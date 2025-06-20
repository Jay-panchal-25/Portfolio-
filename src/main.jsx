import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeScrollAnimations } from './utils/animations.js'

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initializeScrollAnimations, 100)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)