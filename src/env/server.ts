import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PAYLOAD_ADMIN_PASSWORD: z.string().min(1),
    PAYLOAD_ADMIN_USER: z.string().min(1),
    PAYLOAD_SECRET: z.string().min(1),
    POSTGRES_CONNECTION_STRING: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_DEFAULT_FROM_ADDRESS: z.string().min(1),
    RESEND_DEFAULT_FROM_NAME: z.string().min(1),
  },
  runtimeEnv: {
    PAYLOAD_ADMIN_PASSWORD: process.env.PAYLOAD_ADMIN_PASSWORD,
    PAYLOAD_ADMIN_USER: process.env.PAYLOAD_ADMIN_USER,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    POSTGRES_CONNECTION_STRING: process.env.POSTGRES_CONNECTION_STRING,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_DEFAULT_FROM_ADDRESS: process.env.RESEND_DEFAULT_FROM_ADDRESS,
    RESEND_DEFAULT_FROM_NAME: process.env.RESEND_DEFAULT_FROM_NAME,
  },
});
