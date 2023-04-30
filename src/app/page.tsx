import { notFound } from 'next/navigation';

import Blocks from '@/components/Blocks';
import { fetchPage, fetchPages } from '@/graphql';

import styles from './page.module.css';

export interface PageProps {
  params: {
    slug: string | undefined;
  };
}

export default async function Page({ params }: PageProps) {
  try {
    const { layout: layouts } = await fetchPage(params.slug);

    return (
      <main className={styles.main}>
        {layouts.map((layout, i) => (
          <section key={i} className={styles.section}>
            <Blocks block={layout} />
          </section>
        ))}
      </main>
    );
  } catch {
    return notFound();
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { meta } = await fetchPage(params.slug);

  return {
    title: meta.title,
    description: meta.description
  };
}

export async function generateStaticParams() {
  try {
    const pages = await fetchPages();

    return pages.map(({ slug }) => ({ slug }));
  } catch {
    return [{ slug: undefined }];
  }
}
