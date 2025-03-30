import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BagProvider } from './context/BagContext.tsx'

import App from './App.tsx'

import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BagProvider>
      <App />
    </BagProvider>
  </StrictMode>,
)
