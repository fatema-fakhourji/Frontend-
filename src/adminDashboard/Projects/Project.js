import React, { useEffect, useState } from 'react'
import'./projects.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import checkUser from "../authorize";

function Project({project, project:{_id, number, title, image1, image2, description, link}, captureEdit, changeEditState, setProjects}) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false)
  const handleClickDelete = async (_id) => {
    
          
      setShow(true)
      setDeleteId(_id)
      Submit()
      console.log(_id);
      // console.log('response', response)
  }
  useEffect(() => {
    const auth = checkUser();
    if (auth === "success") {
      setLoggedIn(true);
      handleClickDelete();
    } else {
      setLoggedIn(false);
    }
  }, []);
  const handleCLose = () => {
    setShow(false)
  }
  const handleDeleteProject = async () => {
    setProjects((pre) => {
      const newArray = [...pre];

      return newArray.filter((project) => project._id !== deleteId);

    });
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM3ZmRlZDdiMTk3NTlhNjM5MzczNSIsImlhdCI6MTY3NTg1Mzc5MCwiZXhwIjoxNjc4NDQ1NzkwfQ.t1DZ8C77pNE6wwwItcyI28as6rybO_3BdkIEDBL67zM'
        const response = await fetch({
            method: 'DELETE',
            url: `https://anass-haidar-portfolio-stfk.onrender.com/projects/${_id}`,
            headers: {
                "Content-Type" : "application/json",
                'Authorization': 'Bearer ' + token,
                // 'Authorization': `Bearer ${localStorage.getItem("token")}` after registering in the browser!!!
            }
          })
            const result = await response.json();
            console.log('hello', result)
    setShow(false)
  };
  const Submit = () =>
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => handleDeleteProject()
      },
      {
        label: 'No',
        onClick: () => handleCLose()
      }
    ]
  });
  return (
      <div>
        <div className='projects-section' id='projects'>
          <div className='projects' key={_id}>
            <div className='number'>
              <p>{number}</p>
            </div>
            <div className="project-holder">
              <div className='project-border' >
                <div className='img-container'>
                  <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${image1}`} className='project-image1' alt='logo'/>
                  <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${image2}`} className='project-image2' alt='logo'/>
                </div>
                <div className='project-content'>
                  <p className='title1'>{title}</p>
                  <p className='title2'>{description}</p>
                  <p className='title3'><a href={link}>VISIT THE WEBSITE</a></p>
                </div>  
              </div>
              <button
                 onClick={() => {
                    captureEdit(project);
                    changeEditState(project)
                  }}
                  className='edit-button'
                >Edit Project</button>
                <button
                  onClick={()=> handleClickDelete(_id)}
                  className='edit-button'
                >Delete Project</button>
            </div>
          </div>
        </div>
      </div>
      
  )
}
export default Project