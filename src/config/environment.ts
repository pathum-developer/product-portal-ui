export const environment = {
  primeUiLicense: import.meta.env.VITE_PRIMEUI_LICENSE?.trim() || undefined,
} as const;
