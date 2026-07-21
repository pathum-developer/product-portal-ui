import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';

import { environment } from './config/environment';
import './index.css';
import App from './App.tsx';

const primeReactConfig = {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primereact',
        order: 'theme, base, primereact',
      },
    },
  },
  license: environment.primeUiLicense,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider {...primeReactConfig}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
