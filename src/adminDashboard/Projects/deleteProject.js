import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import checkUser from "../Authorize";

function DeleteProject({}) {
  const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const auth = checkUser();
      if (auth === "success") {
        setLoggedIn(true);
        // deleteData();
      } else {
        setLoggedIn(false);
      }
    }, []);
    async function deleteData(_id) {
      const response = await fetch(`http://localhost:5000/projects/${_id}`, {
        method: 'DELETE'
      });
    
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
    }
    
    async function handleDeleteButtonClick(event) {
      const _id = event.target.dataset._id;
    
      try {
        await deleteData(_id);
        console.log(`Data with ID ${_id} was deleted successfully.`);
      } catch (error) {
        console.error(error);
      }
    }
    
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', handleDeleteButtonClick);
    });
      return (
          <div className='container'>
            <button 
            // onClick={submit}
            >Confirm dialog</button>
          </div>
      );
    
    }
    
    export default DeleteProject; 
            