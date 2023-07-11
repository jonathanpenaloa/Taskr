import { useEffect, useContext } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"; 
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Register/Register'
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { primaryContext } from './contexts/PrimaryContext';

function App() {

const { token, setToken } = useContext(primaryContext);

  useEffect(() => {
    let localToken = localStorage.getItem("userToken");
    setToken(localToken);
  });

  useEffect(() => {
    if (token) {
    const verifySession = async () => {
        const response = await axios({
          method: "PUT",
          url: "/verifySession",
          headers: {
            Authorization: token
          }
        });
        console.log(response);
      }
      verifySession();
    }
  }, [token])




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
