import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Register/Register'

function App() {

  // have a user state to conditinally render the pages in the main app

  // pull the state from context

  // create a token state in a useEffect that checks if the token is good


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
