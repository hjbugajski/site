export interface MetaProps {
  title: string;
  description: string;
}

export default function Meta({ title, description }: MetaProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
