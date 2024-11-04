import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Test />
    <App />
  </>
)

// Only one element can be exported or rendered so we wrap everything into fragments