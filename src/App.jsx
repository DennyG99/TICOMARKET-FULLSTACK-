import { useState } from 'react'
import './App.css'
import { GestionModerador } from './components/GestionAdministrador/gestionModerador'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GestionModerador></GestionModerador>
    <h1>Content</h1>
    </>
  )
}

export default App
