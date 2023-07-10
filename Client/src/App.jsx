import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"; 
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Register/Register'
import NavBar from './components/NavBar/NavBar';

function App() {

  // have a user state to conditinally render the pages in the main app

  // pull the state from context

  // create a token state in a useEffect that checks if the token is good


  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
