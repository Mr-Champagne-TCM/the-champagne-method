import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HumanDesignPlainly from './HumanDesignPlainly';
import '../../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HumanDesignPlainly />
  </StrictMode>,
);
