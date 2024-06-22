import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DEFAULT_FROM_ADDRESS: z.string().min(1),
    DEFAULT_FROM_NAME: z.string().min(1),
    DOMAINS: z.string().min(1),
    MONGODB_DATABASE: z.string().min(1),
    MONGODB_URL: z.string().min(1),
    PAYLOAD_ADMIN_PASSWORD: z.string().min(1),
    PAYLOAD_ADMIN_USER: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    SERVER_URL: z.string().min(1),
  },
  runtimeEnv: {
    DEFAULT_FROM_ADDRESS: process.env.DEFAULT_FROM_ADDRESS,
    DEFAULT_FROM_NAME: process.env.DEFAULT_FROM_NAME,
    DOMAINS: process.env.DOMAINS,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    MONGODB_URL: process.env.MONGODB_URL,
    PAYLOAD_ADMIN_PASSWORD: process.env.PAYLOAD_ADMIN_PASSWORD,
    PAYLOAD_ADMIN_USER: process.env.PAYLOAD_ADMIN_USER,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    SERVER_URL: process.env.SERVER_URL,
  },
});
