import React, { useState } from "react";

function DeleteButton(props) {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://anass-haidar-portfolio-stfk.onrender.com/about/${props.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete quote");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <button onClick={handleDelete} className="changes">Delete</button>
      {error && <p>Error deleting quote: {error}</p>}
    </>
  );
}

export default DeleteButton;
