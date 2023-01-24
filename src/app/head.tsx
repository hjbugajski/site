import Meta from '@/components/Meta';
import { fetchPage } from '@/graphql';

export default async function Head() {
  try {
    const { meta } = await fetchPage();

    return <Meta title={meta.title} description={meta.description} />;
  } catch {
    return null;
  }
}
