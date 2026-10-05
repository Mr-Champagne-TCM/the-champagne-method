import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HdLibrary from './HdLibrary';
import '../../index.css';
import './hd-library.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HdLibrary />
  </StrictMode>,
);
