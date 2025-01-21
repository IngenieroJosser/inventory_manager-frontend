import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema
import 'primereact/resources/primereact.min.css';         // Core CSS de PrimeReact
import 'primeicons/primeicons.css';                      // Iconos
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </PrimeReactProvider>
)
