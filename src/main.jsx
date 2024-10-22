import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Blog from './componant/Comment-Review Section/Blog';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog/>
  </StrictMode>
)
