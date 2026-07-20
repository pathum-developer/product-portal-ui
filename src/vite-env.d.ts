/// <reference types="vite/client" />

declare const __APP_VERSION__: string

interface ImportMetaEnv {
  readonly VITE_PRIMEUI_LICENSE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
