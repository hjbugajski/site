import { cacheLife, cacheTag } from 'next/cache';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';

import config from '@payload-config';

import { metadata } from '@/app/(site)/layout';
import { LivePreviewListener } from '@/components/live-preview-listener';
import { RichText } from '@/components/rich-text';
import type { PayloadPagesCollection } from '@/payload/payload-types';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const pageTitle = (title: string | undefined, metadata: Metadata) =>
  !title || title?.toLowerCase() === 'home'
    ? metadata.title
    : `${title} | ${metadata.title as string}`;

const pageSlug = (segments: string[] | undefined) => segments?.at(-1) || 'home';

const queryPage = async ({ slug, draft }: { slug: string; draft: boolean }) => {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'pages',
    draft,
    pagination: false,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
};

const queryCachedPage = async (slug: string) => {
  'use cache';
  cacheLife('max');
  cacheTag(`page_${slug}`);

  return queryPage({ slug, draft: false });
};

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config });
    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      pagination: false,
      overrideAccess: false,
      select: {
        slug: true,
      },
    });

    return pages.docs.map(({ slug }) => ({ slug: [slug] }));
  } catch {
    return [{ slug: undefined }];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await queryCachedPage(pageSlug(slug));

  return {
    title: pageTitle(page?.title, metadata),
    description: page?.description || metadata.description,
  };
}

/**
 * Rendering blocks formats dates and open-ended durations with Luxon, which reads the current
 * time. Caching the rendered output keeps that out of the prerender. The cache key is the content
 * itself, so edits render immediately, while the daily lifetime keeps durations current.
 */
async function PageBody({ content }: { content: PayloadPagesCollection['content'] }) {
  'use cache';
  cacheLife('days');

  return <RichText content={content} />;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { isEnabled: draft } = await draftMode();
  const page = draft
    ? await queryPage({ slug: pageSlug(slug), draft })
    : await queryCachedPage(pageSlug(slug));

  if (!page) {
    notFound();
  }

  return (
    <>
      {draft ? <LivePreviewListener /> : null}
      <PageBody content={page.content} />
    </>
  );
}
