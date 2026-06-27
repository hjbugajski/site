import path from 'path';
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { resendAdapter } from '@payloadcms/email-resend';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

import { env as clientEnv } from '@/env/client';
import { env } from '@/env/server';
import { Role } from '@/payload/access';
import { Pages } from '@/payload/collections/pages';
import { Users } from '@/payload/collections/users';
import { Navigation } from '@/payload/globals/navigation';
import { getServerSideUrl } from '@/payload/utils/get-server-side-url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const serverUrl = getServerSideUrl();
const whitelist = [serverUrl, ...clientEnv.NEXT_PUBLIC_DOMAIN.split(' ')];

export default buildConfig({
  admin: {
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
    user: Users.slug,
  },
  collections: [Pages, Users],
  endpoints: [
    {
      path: '/health',
      method: 'get',
      handler: async (req) => {
        try {
          const startTime = Date.now();

          await req.payload.find({
            collection: 'users',
            limit: 1,
            pagination: false,
          });

          const responseTime = Date.now() - startTime;

          return Response.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            checks: {
              database: {
                status: 'healthy',
                responseTime,
              },
            },
          });
        } catch {
          return Response.json(
            {
              status: 'unhealthy',
              timestamp: new Date().toISOString(),
              checks: {
                database: {
                  status: 'unhealthy',
                  error: 'Database connection failed',
                },
              },
            },
            { status: 503 },
          );
        }
      },
    },
  ],
  cors: whitelist,
  csrf: whitelist,
  db: postgresAdapter({
    pool: {
      connectionString: env.POSTGRES_CONNECTION_STRING,
    },
    migrationDir: path.join(dirname, 'migrations'),
    idType: 'uuid',
    blocksAsJSON: true,
  }),
  editor: lexicalEditor(),
  email: resendAdapter({
    defaultFromAddress: env.RESEND_DEFAULT_FROM_ADDRESS,
    defaultFromName: env.RESEND_DEFAULT_FROM_NAME,
    apiKey: env.RESEND_API_KEY,
  }),
  globals: [Navigation],
  graphQL: {
    disable: true,
  },
  onInit: async ({ create, find }) => {
    const users = await find({
      collection: 'users',
      limit: 1,
    });

    if (users.docs.length === 0) {
      await create({
        collection: 'users',
        data: {
          email: env.PAYLOAD_ADMIN_USER,
          password: env.PAYLOAD_ADMIN_PASSWORD,
          roles: [Role.Admin],
        },
      });
    }
  },
  plugins: [],
  secret: env.PAYLOAD_SECRET,
  serverURL: serverUrl,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    strictDraftTypes: true,
  },
});
