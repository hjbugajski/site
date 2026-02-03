# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start Next.js development server
- `pnpm i:dev` - Start development server with Infisical (environment variables)
- `pnpm build` - Build the Next.js application
- `pnpm i:build` - Build with Infisical environment variables
- `pnpm lint` - Run oxlint with type-aware rules and auto-fix
- `pnpm format` - Run oxfmt formatter
- `pnpm stylelint` - Check and fix CSS with Stylelint
- `pnpm typecheck` - Run TypeScript type checking

## Database & CMS Commands

- `pnpm migrate` - Run Payload CMS database migrations
- `pnpm i:migrate` - Run migrations with Infisical environment variables
- `pnpm migrate:create` - Create new database migration
- `pnpm migrate:dev` - Development migration workflow (clean, create, migrate)
- `pnpm generate:types` - Generate TypeScript types from Payload schema
- `pnpm generate:importmap` - Generate Payload import map

## Architecture

Next.js 16 with Payload CMS, PostgreSQL (UUID primary keys, blocksAsJSON), and Tailwind CSS 4.

### Content Flow

1. **Payload Collections** (`src/payload/collections/`): `Pages` with draft/publish workflow, auto-generated slugs, revalidation hooks
2. **Payload Blocks** (`src/payload/blocks/`): `Section` and `Item` blocks define content structure in Lexical editor
3. **Catch-all Route** (`src/app/(site)/[[...slug]]/page.tsx`): Queries pages by slug, generates static params, handles draft mode
4. **RichText Renderer** (`src/components/rich-text/`): Custom JSX converters for Lexical nodes → React components
5. **Block Components** (`src/components/blocks/`): `SectionBlock`, `ItemBlock` render Payload block data

### Route Groups

- `(payload)` - Payload CMS admin interface
- `(site)` - Public website with catch-all `[[...slug]]` routing

### Key Files (do not edit generated files)

- `src/payload/payload.config.ts` - Main Payload configuration
- `src/payload/payload-types.ts` - Generated types
- `src/app/(payload)/admin/importMap.js` - Generated import map
- `src/env/` - T3 Env validation with separate client/server schemas

### Patterns

- Path aliases: `@/*` for src, `@payload-config` for Payload config
- Infisical commands prefixed with `i:` for environment variables
- Migrations version controlled in `src/payload/migrations/`
- Live preview enabled with responsive breakpoints
