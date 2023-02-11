import React, { useEffect, useState } from 'react';
import checkUser from "../Authorize";
import'./projects.css';

function EditProject({ editForm, handleProjectUpdate, handleChange }) {
    const [loggedIn, setLoggedIn] = useState(false);
    let {_id, number, title, image1, image2, description, link} = editForm;
    console.log(number,title)
    const handleEditForm = async (e) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM3ZmRlZDdiMTk3NTlhNjM5MzczNSIsImlhdCI6MTY3NTg1Mzc5MCwiZXhwIjoxNjc4NDQ1NzkwfQ.t1DZ8C77pNE6wwwItcyI28as6rybO_3BdkIEDBL67zM'
        
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/projects/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(editForm),
        })
        const updatedProject = await response.json();
        console.log("updatedProject", updatedProject)
        handleProjectUpdate(updatedProject)
    }
    useEffect(() => {
        const auth = checkUser();
        if (auth === "success") {
          setLoggedIn(true);
          handleEditForm();
        } else {
          setLoggedIn(false);
        }
      }, []);
    
    return (
        <div>
            <form onSubmit={handleEditForm}>
                <input type="number" name="number" value={number} onChange={handleChange} className='input'/>
                <input type="sting" name="title" value={title} onChange={handleChange} className='input'/>
                <input type="string" name="image1" value={image1} onChange={handleChange} className='input'/>
                <input type="string" name="image2" value={image2} onChange={handleChange} className='input'/>
                <input type="sting" name="description" value={description} onChange={handleChange} className='input'/>
                <input type="string" name="link" value={link} onChange={handleChange} className='input'/>
                <button type="submit" className='input'>Submit Changes</button>
            </form>

        </div>
    );
}

export default EditProject;