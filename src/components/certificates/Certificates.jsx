import React, { Fragment, useState, useEffect } from "react";
import "./certificates.css";
import certificate1 from "../certificates/images/certificate1.jpg";
import certificate2 from "../certificates/images/certificate2.jpg";
import certificate3 from "../certificates/images/certificate3.jpg";
import certificate4 from "../certificates/images/certificate4.jpg";
import logo from "../certificates/images/logo.png";
import Carousel from "react-elastic-carousel";
import "../certificates/authorize";
import checkUser from "../certificates/authorize";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
];

const ProductCard = () => {
  const [popup, setPopup] = useState(false);
  const [deleted, setDeleted] = useState(0);
  const [image, setImage] = useState();
  const [certificate, setCertificate] = useState({});
  const [projects, setProjects] = useState([]);

  // function EditImage({ editForm, handleProjectUpdate, handleChange }) {
  //   const [loggedIn, setLoggedIn] = useState(false);
  //   let { _id, image } = editForm;
  //   console.log(_id, image);

  //   const handleEditForm = async (e) => {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTU1MWVkNzJmOGJhODBhNzZkM2QwNyIsImlhdCI6MTY3NTk3MzEwMiwiZXhwIjoxNjc4NTY1MTAyfQ.B0qyiDf2ZY4vua4rE7orNwSGByqbFrcTNkvveR9UX-k";

  //     e.preventDefault();

  //     const response = await fetch(
  //       `http://localhost:5000/certificates/${_id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer" + token,
  //         },
  //         body: JSON.stringify(editForm),
  //       }
  //     );
  //     const updatedProject = await response.json();
  //     console.log("updatedProject", updatedProject);
  //     handleProjectUpdate(updatedProject);
  //   };
  //   console.log();
  //   useEffect(() => {
  //     const auth = checkUser();
  //     if (auth === "success") {
  //       setLoggedIn(true);
  //       handleEditForm();
  //     } else {
  //       setLoggedIn(false);
  //     }
  //   }, []);
  // }

  // const editImage = async () => {
  //   try {
  //     let body = {
  //       image: image,
  //     };
  //     const response = await fetch(
  //       `http://localhost:5000/certificates/${certificate?.id}`,
  //       {
  //         method: "PATCH",
  //         mode: "cors",
  //         body,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     setDeleted((prev) => prev + 1);
  //     setPopup(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const saveImage = async () => {
  //   try {
  //     let body = {
  //       image: image,
  //     };
  //     const response = await fetch(`http://localhost:5000/certificates/`, {
  //       method: "POST",
  //       mode: "cors",
  //       body,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const result = await response.json();
  //     setDeleted((prev) => prev + 1);
  //     setPopup(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteImage = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/certificates/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setDeleted((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(`http://localhost:5000/certificates/`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setProjects(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    fetchProjects();
  }, [deleted]);

  return (
    <div id="certificates">
      <Fragment>
        <div className="contact">
          <h1>
            {" "}
            <a href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
            Certificates:
          </h1>
        </div>
        <section>
          <div className="row">
            <Carousel breakPoints={breakPoints}>
              {/*cer 1*/}

              {projects.map((project, key) => (
                <div key={key} className="product">
                  <div className="product-thumb">
                    <div className="image-overlay">
                      <div className="image_description">
                        <button
                          className="changes"
                          onClick={() => deleteImage(project["_id"])}
                        >
                          Delete
                        </button>

                        <button
                          className="changes"
                          onClick={() => EditImage(project.id)}
                        >
                          Edit
                        </button>

                        <button
                          className="changes"
                          onClick={() => saveImage(project.id)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    <a href="#">
                      <img
                        className="image"
                        src={`http://localhost:5000/certificates/${project.image}`}
                        alt="certificate"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </Fragment>
    </div>
  );
};

export default ProductCard;
