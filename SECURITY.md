# Security Policy

## Supported Versions

Security fixes are maintained for the active `main` branch.

## Reporting a Vulnerability

Do not open public issues for security vulnerabilities.

Use GitHub private vulnerability reporting if it is enabled for this repository. If it is not enabled, contact the repository owner or project maintainer directly through GitHub.

Include:

- A clear description of the vulnerability
- Steps to reproduce
- Affected files, routes, or dependencies
- Any known impact or workaround

## Secret Management

Never commit secrets to the repository. Local secrets belong in ignored environment files such as `.env.local`.

Frontend environment variables are visible in browser builds. Do not place server credentials, private API keys, or internal tokens in Vite environment variables.
