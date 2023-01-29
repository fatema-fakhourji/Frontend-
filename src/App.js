import React from 'react'
import { About, Certificates, Contact, Footer, Header, Navbar, Projects, Skills } from './components'
import './App.css'

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