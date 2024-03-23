import { notFound } from 'next/navigation';

import { fetchPage, fetchPages } from '@/lib/api';

import PageClient from './page.client';
import { metadata } from '../layout';

export async function generateStaticParams() {
  try {
    const pages = await fetchPages();

    return pages?.map(({ slug }) => ({ slug: [slug] })) ?? [];
  } catch {
    return [{ slug: undefined }];
  }
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string[] } }) {
  const page = await fetchPage(slug);
  const title =
    !page?.title || page?.title?.toLowerCase() === 'home' ? metadata.title : `${page.title} | ${metadata.title}`;

  return {
    title,
    description: page?.description || metadata.description,
  };
}

export default async function Page({ params: { slug } }: { params: { slug: string[] } }) {
  const page = await fetchPage(slug);

  if (!page) {
    notFound();
  }

  return <PageClient page={page} />;
}
