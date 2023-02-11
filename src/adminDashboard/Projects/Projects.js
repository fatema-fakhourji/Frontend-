import React, { useEffect, useState } from 'react'
import EditProject from './EditProject';
import Project from './Project'
import checkUser from "../Authorize";
import logo from '../../assets/logo.png';
import'./projects.css';

function Projects({projects, onUpdateProject, setProjects}) {
  const [loggedIn, setLoggedIn] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        _id: "",
        number: "",
        title: "",
        image1: "",
        image2: "",
        description: "",
        link: ""
    })
    

    function handleProjectUpdate(updatedProject) {
    setIsEditing(false);
    onUpdateProject(updatedProject);
    }
    function handleChange(e) {
        setEditForm({
        ...editForm,
        [e.target.name]: e.target.value
        })
    }
    // console.log("editForm", editForm)
    function changeEditState(project) {
        if (project._id === editForm._id) {
          setIsEditing(isEditing => !isEditing) // hides the form
        } else if (isEditing === false) {
          setIsEditing(isEditing => !isEditing) // shows the form
        }
    }
    function captureEdit(clickedProject) {
        let filtered = projects.filter(project => project._id === clickedProject._id)
        setEditForm(filtered[0])
    }
      // Define the state for storing the form data
      const [formData, setFormData] = useState({
        number: '',
        title: '',
        image1: '',
        image2: '',
        description: '',
        link: ''
      });
      const [showPopup, setShowPopup] = useState(false);
    
      const handleInputChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
        console.log('value', event.target.value)

      }
      
      const HandleAddData = async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM3ZmRlZDdiMTk3NTlhNjM5MzczNSIsImlhdCI6MTY3NjEyODk3NywiZXhwIjoxNjc4NzIwOTc3fQ.Uf9nb5MnyOpZSSwzV1zpIrU_9gbN-BbyDszOzNfpn2g'
        const response = await fetch('http://localhost:5000/projects/', {
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
            'Authorization': 'Bearer ' + token,
        },
        
          body: JSON.stringify(formData)
        });
        console.log('response', formData);
        if (response.ok) {
          setFormData({ name: '', email: '', image1: '', image2: '', description: '', link: '' });
          setShowPopup(false);

          alert('Data was added to the database!');
        } else {
          alert('Failed to add data to the database. Please try again later.');
        }
      };
      useEffect(() => {
        const auth = checkUser();
        if (auth === "success") {
          setLoggedIn(true);
          HandleAddData();
        } else {
          setLoggedIn(false);
        }
      }, []);

  return (
    <div>
      <div className="projects-top">
            <div className='projects-header'>
              <img src={logo} alt='' />
              <p>Projects:</p>
            </div>
          </div>
      <div>
      <button type="button" onClick={() => setShowPopup(true)} className="projects-button">
        Add new project
        </button>
        {showPopup && (
        <div className="popup">
          <form>
          <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image1:
          <input
            type="text"
            name="image1"
            value={formData.image1}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image2:
          <input
            type="text"
            name="image2"
            value={formData.image2}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}          
            />
        </label>
            <br />
            <button type="button" onClick={HandleAddData}>
              Submit
            </button>
            <button type="button" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
      </div>
    {isEditing?
      (<EditProject
        editForm={editForm}
        handleChange={handleChange}
        handleProjectUpdate={handleProjectUpdate}
      />) : null}
        { projects.map(project =>
          <Project
            key={project.id}
            project={project}
            captureEdit={captureEdit}
            changeEditState={changeEditState}
            setProjects={setProjects}
          />) }
  </div>

  )

}
export default Projects
