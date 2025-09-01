import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usememo_useCallback from './Usememo_useCallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Usememo_useCallback/> */}
  </StrictMode>,
)
