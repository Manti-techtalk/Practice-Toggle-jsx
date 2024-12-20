import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './components/Toggle'
import UserStatus from './components/userStatus'
import UserRole from './components/UserRole'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <>
    <Toggle/>
    <UserStatus/>
    <UserRole/>
    <ThemeToggle/>
    </>
  )
}

export default App
