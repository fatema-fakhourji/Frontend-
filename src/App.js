import {React, useState} from 'react'
import { About, Certificates, Contact, Footer, Header, Navbar, Projects, Skills } from './components'
import './App.css'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import Login from './adminDashboard/Login'
import Dashboard from './adminDashboard/Dashboard'
import Signup from './adminDashboard/register'





export const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (

    
    <BrowserRouter>
    <div className='App'>
   
      <Routes>
        <Route path="/" element={ <Navbar /> } />
      </Routes>
      

      <Routes>
        <Route path="/" element={ <Header /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <About /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <Skills /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <Projects /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <Certificates /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <Contact /> } />
      </Routes>

      <Routes>
        <Route path="/" element={ <Footer /> } />
      </Routes>

      <Routes>
        <Route path="/login" element={ <Login /> } />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>

      <Routes>
        <Route path="/signup" element={ <Signup /> } />
      </Routes>

      
    </div>
  </BrowserRouter>
)
}


export default App
 

