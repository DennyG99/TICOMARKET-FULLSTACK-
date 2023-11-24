import { useState } from 'react'
import './App.css'
import { GestionModerador } from './components/GestionAdministrador/gestionModerador'
import { GestionSuperAdministrador } from './components/GestionAdministrador/gestionSuperAdmin'

import { CardPoliticas } from './components/GestionAdministrador/Politicas/CardPoliticas'
import { CardPlanes } from './components/GestionAdministrador/Planes/CardPlanes'
//import { CardPlanes } from './components/GestionAdministrador/Planes/CardPlanes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Content</h1>
    </>
  )
}

export default App
