import React, { useState } from "react";

const EditButton = ({ about, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    onUpdate({
      quote: event.target.quote.value,
      description: event.target.description.value,
      image: event.target.image.value
    });

    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            name="quote"
            type="text"
            defaultValue={about.quote}
          />
          <input
            name="description"
            type="text"
            defaultValue={about.description}
          />
          <input
            name="image"
            type="text"
            defaultValue={about.image}
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button onClick={handleEdit} className="changes">Edit</button>
      )}
    </>
  );
};

export default EditButton;
