import React from "react";
import './dashboard.css';
import axios from "axios";



const Dashboard = () => {
    return (
        <div>
           <h2>dashboard</h2> 
           
        </div>
    )
}
export default Dashboard

const handleSubmit = event => {
    event.preventDefault();
  
    axios
      .put(`http://localhost:5000/about/${posts.id}`, {
        image: formData.image,
        quote: formData.quote,
        description: formData.description
      })
      .then(response => {
        console.log(response.data);
      });
  };
  
  const UpdateForm = ({ posts }) => {
    const [formData, setFormData] = useState({
      image: posts.image,
      quote: posts.quote,
      description: posts.description
    });
  
    const handleChange = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Update Data</button>
      </form>
    );
  };
  