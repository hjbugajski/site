export const getServerSideUrl = () => {
  // Preview deployments: the stable per-branch host (constant across re-deploys, unlike VERCEL_URL).
  if (process.env.VERCEL_TARGET_ENV === 'preview' && process.env.VERCEL_BRANCH_URL) {
    return `https://${process.env.VERCEL_BRANCH_URL}`;
  }

  // Production: the canonical custom domain (first of NEXT_PUBLIC_DOMAIN).
  const domain = process.env.NEXT_PUBLIC_DOMAIN?.split(' ')[0];

  if (process.env.VERCEL_TARGET_ENV === 'production' && domain) {
    return `https://${domain}`;
  }

  // Fallback to Vercel's generated production url when no custom domain is configured.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return 'http://localhost:3000';
};
