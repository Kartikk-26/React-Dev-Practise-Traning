import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </StrictMode>,
)
