import React from 'react'
// import { About, Certificates, Contact, Footer, Header, Navbar, Projects, Skills, register } from './components'
import './App.css'
import Register from "./components/adminDashboard/register"


export const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  )
}

export default App