import { useState } from 'react'
import './App.css'
import { GestionModerador } from './components/GestionAdministrador/gestionModerador'
import { GestionSuperAdministrador } from './components/GestionAdministrador/gestionSuperAdmin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <GestionSuperAdministrador></GestionSuperAdministrador>
    <h1>Content</h1>
    </>
  )
}

export default App
