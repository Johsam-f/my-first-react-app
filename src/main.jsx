import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Person, CustomInput } from './greeting.jsx'
import Clock from './clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
    <CustomInput/>
    <Clock/>
  </StrictMode>,
)
