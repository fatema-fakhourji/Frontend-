import React, { useState } from "react";

function DeleteButton(props) {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/about/${props.id}`, {
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
