# Product Portal UI

Enterprise React user interface for a product portal, built with Vite, TypeScript, PrimeReact Community, and Tailwind CSS.

## Technology Stack

- React 19 with TypeScript
- Vite 8 for local development and production builds
- PrimeReact 11 Community with the Aura theme
- Tailwind CSS 4 with `tailwindcss-primeui`
- React Router for route ownership and code-splitting
- TanStack Query for Spring Boot server state
- Axios for centralized REST communication
- ESLint for code quality checks

## Prerequisites

- Node.js 24
- npm 11
- A PrimeUI Community license key for PrimeReact 11

PrimeReact 11 requires a valid PrimeUI license key. For Community usage, confirm eligibility and request a free key from the PrimeUI Community license page:

https://primeui.dev/licenses/community

## Getting Started

Create a local environment file, configure the Spring Boot API base URL, and add your PrimeUI key:

```bash
cp .env.example .env.local
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run lint` runs ESLint across the repository.
- `npm run typecheck` runs the TypeScript project build check.
- `npm run build` runs type checking and creates a production build.
- `npm run preview` previews the production build locally.

## Project Structure

```text
src/
  app/            Application shell, providers, layouts, and routing
  assets/         Static application assets
  config/         Environment and runtime configuration
  features/       Business modules aligned with backend domains
    shops/        Shop UI, API integration, types, and pages
  shared/         Cross-feature API client and reusable UI components
```

## Spring Boot Integration

`VITE_API_BASE_URL` configures the API base path and defaults to `/api`.
`VITE_API_TIMEOUT_MS` configures the Axios request timeout and defaults to `10000`. Keep Spring
Boot contracts at the feature boundary: a feature's API module calls the backend, maps response
DTOs to frontend types, and exposes TanStack Query hooks. Components must consume those feature
types rather than backend DTOs directly.

When an OpenAPI contract is available, generate its TypeScript client under
`src/shared/api/generated/` and wrap it inside the relevant feature API module. Do not import the
generated client from components or pages.

## PrimeReact and Tailwind

PrimeReact components are imported from their package entry points:

```tsx
import { Button } from '@primereact/ui/button';
```

Tailwind utilities can be used directly with PrimeReact components:

```tsx
<Button className="shadow-sm">Save</Button>
```

## Quality Gates

Every change should pass the same checks that run in CI:

```bash
npm run lint
npm run build
```

Do not commit `.env.local`, build artifacts, logs, or dependency folders.
