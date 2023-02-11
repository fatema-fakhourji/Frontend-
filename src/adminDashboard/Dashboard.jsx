import React from 'react';
import Projects from './Projects/Projects.jsx.js';

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