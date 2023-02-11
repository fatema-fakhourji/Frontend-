import React, { useState, useEffect } from "react";

function DeleteSkill(props) {
  const [error, setError] = useState(null);

  const handleDelete = () => {
    fetch(`/api/skills/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          setError(data.error);
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}   className="changes-skills">Delete Skill</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default DeleteSkill;
