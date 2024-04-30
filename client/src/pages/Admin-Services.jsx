import { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";

export const AdminServices = () => {
    const [servicesData, setServicesData] = useState([]);
    const { authorizationToken, API } = useAuth();



    const getServicesData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/AdminServices`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("Data from API:", data); // Check fetched data
            if (response.ok) {
                setServicesData(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Delete service message
    const deleteService = async (id) => {
        try {
            const response = await fetch(`${API}/api/admin/AdminServices/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if(response.ok){
                getServicesData();
                toast.success("Service Delete successfully");
            }
        } catch (error) {
            console.log("Error deleting user:", error);
        }
    };

    useEffect(() => {
        getServicesData();
    }, []); // Fetch data when the component mounts

    return (
        <div className="container">
          <h2 className="my-4">Admin Services </h2>
          <Link className='btn btn-success mb-5' to="/admin/AddServices">Add Services</Link>
          <div className="row">
            {servicesData.map((curServiceData, index) => {
              const { _id, service,image, description, price,provider } = curServiceData;
              return (
                <div key={index} className="col-6 col-md-3 mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <img src={image} alt="" className="img-fluid" style={{ height: "200px", width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" }} />
                            <h5 className="card-title ">{service}</h5>
                            <p className="card-text">
                                <strong>Description:</strong> {description}
                            </p>
                            <p className="card-text">
                                <strong>Price:</strong> {price}
                            </p>
                            <p className="card-text">
                                <strong>Provider:</strong> {provider}
                            </p>
                            <div className='d-flex bg-dark p-2 rounded-3 justify-content-between'>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteService(_id)}>
                                    Delete
                                </button>
                                <button className="btn btn-danger"><Link style={{color:"white",textDecoration:"none"}} to={`/admin/AdminServices/${curServiceData._id}/edit`}>Edit</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
    );
};
