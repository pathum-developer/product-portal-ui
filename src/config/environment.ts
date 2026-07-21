const DEFAULT_API_TIMEOUT_MS = 10_000;

function getApiTimeoutMs(): number {
  const configuredTimeout = Number(import.meta.env.VITE_API_TIMEOUT_MS);

  return Number.isFinite(configuredTimeout) && configuredTimeout > 0
    ? configuredTimeout
    : DEFAULT_API_TIMEOUT_MS;
}

export const environment = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL?.trim() || '/api',
  apiTimeoutMs: getApiTimeoutMs(),
  primeUiLicense: import.meta.env.VITE_PRIMEUI_LICENSE?.trim() || undefined,
} as const;
