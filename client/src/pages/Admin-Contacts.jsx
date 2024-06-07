import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken, API } = useAuth();
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [loadingStates, setLoadingStates] = useState([]); // Initialize loading states for delete actions

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("data is ", data);
      if (response.ok) {
        setContactData(data);
        setLoading(false); // Set loading to false when fetch operation completes
        // Initialize loading states for delete actions
        setLoadingStates(Array(data.length).fill(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete users message
  const deleteContact = async (id, index) => {
    // Update loading state for the specific delete action
    setLoadingStates((prevLoadingStates) => {
      const newLoadingStates = [...prevLoadingStates];
      newLoadingStates[index] = true;
      return newLoadingStates;
    });
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      console.log("Error deleting user:", error);
      toast.error("Failed to delete");
    } finally {
      // Reset loading state for the specific delete action
      setLoadingStates((prevLoadingStates) => {
        const newLoadingStates = [...prevLoadingStates];
        newLoadingStates[index] = false;
        return newLoadingStates;
      });
    }
  };

  useEffect(() => {
    getContactsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Admin Contacts</h2>
      {/* Check if loading is true, then display loading indicator */}
      {loading ? (
        <div className="text-center mx-3">
          <h3>Loading...</h3>
        </div>
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
                  <p className="card-text">
                    <strong>Message:</strong> {`${message} (User ID: ${_id})`}
                  </p>
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
                      onClick={() => deleteContact(_id, index)}
                      disabled={loadingStates[index]} // Disable button if delete action is in progress
                    >
                      {loadingStates[index] ? "Deleting..." : "Delete"}{" "}
                      {/* Change button text based on loading state */}
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
