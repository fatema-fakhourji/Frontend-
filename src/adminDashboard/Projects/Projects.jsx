import React, { useState, useEffect } from 'react';
import'./projects.css';
import Projects from './Projects.js'
const AllProjects= () => {
    const [projects, setProjects] = useState({});
    const [loading, setLoading] = useState(true);

    function onUpdateProject(updatedProject) {
        const updatedProjects = projects.map(
          project => {
            if (project._id === updatedProject._id) {
              return updatedProject
            } else {return project}
          }
        )
        setProjects(updatedProjects)
      }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://anass-haidar-portfolio-stfk.onrender.com/projects/')
                const projects = await response.json();
                setProjects(projects);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        
          fetchData();
    }, []);
        return (
            <>
                {loading ? (
                    <p className='loading'>Loading data...</p>
                ) : (
                    <div>
                        <Projects 
                          projects={projects} 
                          setProjects={setProjects}
                          onUpdateProject={onUpdateProject} 
                        />
                    </div>
                 )}
                
            </>
    );
};
export default AllProjects;
