# AGENTS.md

## Project Context

This is a local MVP ERP/POS system for a service-first business with some physical product sales.

Stack:
- Next.js App Router + TypeScript
- React + Ant Design
- Prisma ORM
- SQLite local database

The app is expected to run locally at:

```bash
http://localhost:3000
```

The root route `/` redirects to `/dashboard`, and protected ERP pages redirect unauthenticated users to `/login`.

## Development Priorities

- Keep the app usable first. If the site cannot open, fix runtime/server issues before UI refinements.
- Use existing patterns in `src/components`, `src/lib`, `src/app/api`, and `prisma/schema.prisma`.
- Prefer small scoped changes. Do not rewrite broad modules unless required.
- Ant Design is the UI baseline. Keep layouts compact, table-heavy, and operational.
- Avoid decorative or marketing-style pages. This is an internal management tool.

## Common Commands

Use the bundled runtime path when local shell commands cannot find Node or pnpm:

```bash
PATH=/Users/xudanhe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/xudanhe/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH
```

Run typecheck:

```bash
pnpm exec tsc --noEmit
```

Run dev server:

```bash
pnpm run dev
```

Generate Prisma client:

```bash
pnpm prisma:generate
```

Push schema to SQLite:

```bash
pnpm prisma:push
```

Seed local data:

```bash
pnpm seed
```

## Before Editing

1. Check current git/file state enough to avoid overwriting user work.
2. Read the related component, API route, and Prisma model before changing behavior.
3. For UI bugs, inspect the component and global CSS together.
4. For data bugs, inspect `prisma/schema.prisma`, `src/lib/api-modules.ts`, `src/lib/api-auth.ts`, and the relevant route in `src/app/api`.

## 500 / Page Cannot Open Playbook

This project has frequently hit local dev issues where the browser shows "Internal Server Error" or cannot open `localhost:3000`.

When that happens, do this in order:

1. Confirm whether a Next dev server is running:

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

2. If no process is listening, start the dev server:

```bash
pnpm run dev
```

3. If port `3000` is occupied by a stale Next process and the app still cannot open, stop the stale process and restart the dev server. Use normal `kill` first; use `kill -9` only if the stale process does not exit.

4. Check the active dev server logs. Do not assume the browser error is the root cause; Next usually prints the useful stack trace in the terminal.

5. Verify root and login routes:

```bash
curl -I --max-time 8 http://localhost:3000/
curl -I --max-time 8 http://localhost:3000/login
```

Expected:
- `/` may return `307` to `/login` or `/dashboard`.
- `/login` should return `200 OK`.

6. If a page compiles slowly on first open, retry after compilation completes. A first request can time out while Next is compiling.

7. If the page returns 500, fix the actual stack trace. Common causes:
- Prisma schema and generated client are out of sync.
- API route refers to a model/field that does not exist.
- Client component assumes nullable data is always present.
- Date parsing returns invalid values.
- Route params are used incorrectly in App Router.
- A component imports server-only code into a client component.

8. After fixes, run:

```bash
pnpm exec tsc --noEmit
```

Then restart the dev server if Prisma schema, route structure, or cached build state changed.

## Prisma / SQLite Rules

- Use one SQLite database with separate tables per module.
- Do not duplicate cross-module data in pages. Use foreign keys or IDs where possible.
- When adding fields:
  1. Update `prisma/schema.prisma`.
  2. Run `pnpm prisma:generate`.
  3. Run `pnpm prisma:push` for local MVP schema sync.
  4. Update API serialization/deserialization.
  5. Update UI forms and tables.

If Prisma-related runtime errors appear after schema edits, regenerate the client before debugging further.

## Data Flow Notes

Important module links:
- `SaleLine.itemId` links sales to `Item`.
- Product sales should create inventory deduction records.
- Inventory movement rows are log records; historical rows should not change when current stock changes later.
- Employee-related dropdowns should read from employee data and tags.
- Activity-created sales items should sync into `Item`.
- Shift calendar notes may span date ranges and should display like calendar events.

## UI Conventions

- Sidebar uses a light blue style.
- Brand text is `UNV.PLAN ERP`.
- Remove the top header title text unless explicitly requested.
- Use Traditional Chinese labels.
- Keep cards and forms the same width as their related tables when the user asks for alignment.
- Tables should be compact and support page-size options where added: `30`, `50`, `100`.
- Avoid controls overflowing their card. Check grid widths when adding new fields.
- Date-only fields should display date only, not time.
- Default dates should usually be today, unless the page is month-based, then default to the current month.

## Testing Checklist

For every meaningful change:

1. Run TypeScript check:

```bash
pnpm exec tsc --noEmit
```

2. Start or confirm dev server.
3. Open or verify the changed route.
4. Check terminal logs for runtime errors.
5. For forms, verify create/edit/delete or the requested interaction.
6. For reports/dashboard, verify calculations after seed or generated data changes.

## Known Local Development Caveats

- Sandbox `curl` may fail to connect to localhost even when the browser can. If needed, verify from the host environment.
- Next dev server may leave a stale process on port `3000`; use `lsof` to identify it.
- First page load after restarting may compile slowly and look like a timeout. Wait for `Compiled /route` in logs and retry.
- If a route still shows old UI after changes, restart `pnpm run dev`.

## Files To Check Often

- `src/components/AppShell.tsx` for sidebar navigation and labels.
- `src/components/CrudPage.tsx` for generic module CRUD UI.
- `src/components/SalesPage.tsx` for revenue registration.
- `src/components/DashboardClient.tsx` for dashboard analytics.
- `src/components/ShiftsCalendarPage.tsx` for shift calendar behavior.
- `src/lib/api-modules.ts` for module metadata and API handling.
- `src/lib/module-config.ts` for page/module config.
- `prisma/schema.prisma` for database models.

