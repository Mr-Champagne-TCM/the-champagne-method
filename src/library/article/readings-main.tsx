import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import WhatAReadingIs from './WhatAReadingIs';
import '../../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WhatAReadingIs />
  </StrictMode>,
);
