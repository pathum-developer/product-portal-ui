# Contributing

## Development Workflow

1. Create a focused branch from `main`.
2. Keep changes small and aligned to one feature, fix, or refactor.
3. Follow the existing component structure and TypeScript conventions.
4. Validate locally before opening a pull request.

## Branch Naming

Use clear, purpose-based branch names:

- `feat/header-navigation`
- `fix/license-env-config`
- `refactor/product-layout`

## Commit Messages

Use concise, conventional commit messages:

- `feat(header): add responsive navigation`
- `fix(config): load PrimeUI license from env`
- `docs(readme): document local setup`

## Local Validation

Run these checks before pushing:

```bash
npm run lint
npm run build
```

## Pull Requests

Pull requests should include:

- A short summary of what changed
- Screenshots for visible UI changes
- Validation steps performed
- Notes about risks, follow-up work, or migration steps

## Code Standards

- Prefer functional React components and hooks.
- Keep components focused and reusable.
- Use strong TypeScript types and avoid `any`.
- Keep styling scoped with Tailwind utilities or component-level styles.
- Preserve keyboard navigation and accessible labels for interactive UI.
- Do not commit secrets, local environment files, logs, or generated builds.
