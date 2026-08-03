# Security Policy

## Supported Versions

Security fixes are applied to the latest code on the `main` branch.

## Reporting a Vulnerability

Please do not open public issues for suspected security vulnerabilities.

Report vulnerabilities privately to the repository owner with:

- A clear summary of the issue
- Steps to reproduce, if available
- The affected files, packages, routes, or configuration
- Any known impact or mitigation

After a report is received, the vulnerability will be reviewed, triaged, and fixed based on severity.

## Dependency Security

Dependencies should be reviewed during regular maintenance. Before merging dependency updates, run:

```bash
npm run lint
npm run build
```

Do not commit secrets, `.env.local`, build artifacts, logs, or dependency folders.
