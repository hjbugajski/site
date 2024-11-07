import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DEFAULT_FROM_ADDRESS: z.string().min(1),
    DEFAULT_FROM_NAME: z.string().min(1),
    DOMAINS: z.string().min(1),
    PAYLOAD_ADMIN_PASSWORD: z.string().min(1),
    PAYLOAD_ADMIN_USER: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    POSTGRES_CONNECTION_STRING: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    SERVER_URL: z
      .string()
      .min(1)
      .transform((url) =>
        process.env.VERCEL_ENV === 'preview' ? `https://${process.env.VERCEL_URL}` : url,
      ),
  },
  runtimeEnv: {
    DEFAULT_FROM_ADDRESS: process.env.DEFAULT_FROM_ADDRESS,
    DEFAULT_FROM_NAME: process.env.DEFAULT_FROM_NAME,
    DOMAINS: process.env.DOMAINS,
    PAYLOAD_ADMIN_PASSWORD: process.env.PAYLOAD_ADMIN_PASSWORD,
    PAYLOAD_ADMIN_USER: process.env.PAYLOAD_ADMIN_USER,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    POSTGRES_CONNECTION_STRING: process.env.POSTGRES_CONNECTION_STRING,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SERVER_URL: process.env.SERVER_URL,
  },
});
