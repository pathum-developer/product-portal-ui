# Versioning

This application follows [Semantic Versioning](https://semver.org/). The `version` field in
`package.json` is the single source of truth and is injected into the production bundle by Vite.

Use the following increments:

- `patch` for backward-compatible fixes (`0.1.0` to `0.1.1`)
- `minor` for backward-compatible features (`0.1.0` to `0.2.0`)
- `major` for breaking changes (`1.0.0` to `2.0.0`)

## Release process

Start from an up-to-date, clean release branch, then run one of:

```shell
npm version patch
npm version minor
npm version major
```

`npm version` updates both `package.json` and `package-lock.json`, creates a release commit, and
creates a matching Git tag. Push the commit and tag only after the quality checks pass:

```shell
npm run lint
npm run build
git push --follow-tags
```

Release builds should be produced from immutable Git tags. Pre-release versions can use identifiers
such as `1.2.0-beta.1`; do not edit generated bundle files or maintain a second version constant.
