import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Register/Register'

function App() {

  return (
    <>
      <div>
        <LoginPage/>
        <Register/>
      </div>
    </>
  )
}

export default App
