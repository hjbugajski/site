import path from 'path';
import { fileURLToPath } from 'url';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

import { env } from '@/env/server';
import { Role } from '@/payload/access';
import { Pages } from '@/payload/collections/pages';
import { Users } from '@/payload/collections/users';
import { Navigation } from '@/payload/globals/navigation';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const whitelist = [env.SERVER_URL, ...env.DOMAINS.split(' ')];

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Users],
  cors: whitelist,
  csrf: whitelist,
  db: mongooseAdapter({
    url: env.MONGODB_URL,
    connectOptions: {
      dbName: env.MONGODB_DATABASE,
    },
  }),
  editor: lexicalEditor(),
  globals: [Navigation],
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
  serverURL: env.SERVER_URL,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
