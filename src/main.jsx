import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <App />
    </div>
  </StrictMode>
)
