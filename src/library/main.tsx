import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LibraryApp from './LibraryApp';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LibraryApp />
  </StrictMode>,
);
