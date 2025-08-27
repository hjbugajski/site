# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start Next.js development server with Turbopack
- `pnpm i:dev` - Start development server with Infisical (environment variables)
- `pnpm dev:clean` - Clean Next.js build cache and start development server
- `pnpm build` - Build the Next.js application
- `pnpm i:build` - Build with Infisical environment variables
- `pnpm lint:all` - Run all linting tools (prettier, eslint, stylelint)
- `pnpm eslint` - Run ESLint
- `pnpm eslint:fix` - Fix ESLint issues automatically
- `pnpm prettier` - Check Prettier formatting
- `pnpm prettier:fix` - Fix Prettier formatting issues
- `pnpm stylelint` - Check CSS with Stylelint
- `pnpm stylelint:fix` - Fix Stylelint issues automatically

## Database & CMS Commands

- `pnpm migrate` - Run Payload CMS database migrations
- `pnpm i:migrate` - Run migrations with Infisical environment variables
- `pnpm migrate:create` - Create new database migration
- `pnpm migrate:dev` - Development migration workflow (clean, create, migrate)
- `pnpm generate:types` - Generate TypeScript types from Payload schema
- `pnpm generate:importmap` - Generate Payload import map

## Architecture

This is a personal website built with:

- **Frontend**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **CMS**: Payload CMS with Lexical rich text editor
- **Database**: PostgreSQL with UUID primary keys
- **Email**: Resend adapter for transactional emails
- **Environment**: T3 Env with separate client/server validation using Zod
- **Analytics**: Umami (self-hosted)
- **Deployment**: Vercel

### Project Structure

- `src/app/(payload)/` - Payload CMS admin interface routes
- `src/app/(site)/` - Public website routes with catch-all dynamic routing
- `src/components/` - Reusable React components including blocks and UI elements
- `src/payload/` - Payload CMS configuration, collections, globals, and migrations
- `src/env/` - Environment variable validation (client.ts and server.ts)
- `src/utils/` - Utility functions (className merging, duration formatting, etc.)
- `src/icons/` - Custom SVG icon components

### Key Patterns

- **Route Groups**: Uses Next.js route groups `(payload)` and `(site)` to separate admin and public routes
- **Environment Variables**: Strict validation using T3 Env with separate client/server schemas
- **TypeScript Paths**: `@/*` for src directory, `@payload-config` for Payload configuration
- **Payload Collections**: Pages collection with rich content blocks, Users collection with role-based access
- **Content Blocks**: Modular content system using Payload's block field type
- **Font Strategy**: Uses Next.js font optimization with Funnel Display and Inter fonts
- **CSS Architecture**: Tailwind CSS with custom properties and dark mode support

### Important Files

- `src/payload/payload.config.ts` - Main Payload CMS configuration
- `src/payload/payload-types.ts` - Generated TypeScript types (do not edit)
- `src/app/(payload)/admin/importMap.js` - Generated import map (do not edit)
- `src/env/` - Environment variable schemas and validation
- Path aliases configured in `tsconfig.json` for clean imports

### Development Notes

- Uses `pnpm` as package manager
- Infisical integration for secure environment variable management (commands prefixed with `i:`)
- ESLint configuration includes TypeScript, React, Next.js, and import sorting rules
- Stylelint configured for Tailwind CSS with custom at-rules support
- Database migrations are version controlled in `src/payload/migrations/`
- Live preview is enabled in Payload admin with responsive breakpoints
