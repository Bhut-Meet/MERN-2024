import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
export const AdminContacts = () => {
  const { authorizationToken,API } = useAuth();
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts `, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("data is ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false); // Set loading to false when fetch operation completes
    }
  };




  // delete users message
  const deleteContact = async (id) => {
    try {
        const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
        });
        if(response.ok){
            getContactsData();
            toast.success("deleted successfully")
        }
        else{
            toast.error("Not deleting");
        }
    } catch (error) {
        console.log("Error deleting user:", error);
    }
};



  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Admin Contacts</h2>
      {/* Check if loading is true, then display loading indicator */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {contactData.map((curContactData, index) => {
            const { _id, username, email, phone, message } = curContactData;
            const capitalizedUsername =
              username.charAt(0).toUpperCase() + username.slice(1);
            return (
              <div key={index} className="col-md-3 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{capitalizedUsername}</h5>
                    <p className="card-text">
                      <strong>Email:</strong> {email}
                    </p>
                    <p className="card-text">
                      <strong>Phone:</strong> {phone}
                    </p>
                    <p className="card-text">
                      <strong>Message:</strong> {message}
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContact(_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>

  );
};