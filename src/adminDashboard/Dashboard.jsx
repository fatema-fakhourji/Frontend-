import React from 'react';
import Projects from './Projects/Projects.jsx';
import Navbar from './navbar/Navbar.jsx';
import Header from './header/Header.jsx';
import About from './about/About.jsx';
import Skills from './skills/Skills.jsx';
import Certificates from './certificates/Certificates.jsx';
import Contact from './contact/Contact.jsx';
import Footer from './footer/Footer.jsx';
import './dashboard.css'
function Dashboard() {
    return (
        <div>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects/>
        <Certificates />
        <Contact />
        <Footer />
        </div>
    );
}

export default Dashboard;