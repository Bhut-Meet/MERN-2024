import  { useState } from 'react';
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const AdminAddService =() =>{
  const { authorizationToken , API} = useAuth();
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [provider, setProvider] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the input fields are empty
    if (!service || !description || !price || !image || !provider) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch(`${API}/api/admin/AddServices`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationToken,
          },
          body: JSON.stringify({ service, description, price, image, provider }),
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("Service added successfully");
        // Clear input fields after successful submission
        setService('');
        setDescription('');
        setPrice('');
        setImage('');
        setProvider('');
      } else {
        toast.error("Failed to add service");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <input
            type="text"
            className="form-control"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder='Enter Image url'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p>Choose file option is <span style={{color:"red"}}>coming soon</span></p>
        </div>
        <div className="form-group">
          <label htmlFor="provider">Provider:</label>
          <input
            type="text"
            className="form-control"
            id="provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Service
        </button>
      </form>
    </div>
  );
};
