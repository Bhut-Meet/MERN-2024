import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    hobby: "",
    birthDate: "",
    isAdmin: false, // Initialize isAdmin as false
  });
  const params = useParams();
  const { authorizationToken, API } = useAuth();
  const [updating, setupdating] = useState(false); // State variable to track loading state

  // Get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const userData = await response.json();
      console.log("User single data", userData);
      setData(userData);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle checkbox change for isAdmin field
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData({ ...data, [name]: checked });
  };
  
  // Update user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setupdating(true); // Set loading state to true when form is submitted
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Update successful");
        navigate("/admin/users");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.log("Error updating user:", error);
    }
    setupdating(false); // Set loading state to false when form is submitted
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="text-center mb-4">User data</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control fw-bold"
                      id="username"
                      name="username"
                      value={data.username}
                      onChange={handleInput}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label ">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control fw-bold focus-ring-none"
                      style={{ outline: "none" }}
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control fw-bold"
                      id="phone"
                      name="phone"
                      value={data.phone}
                      onChange={handleInput}
                      placeholder="Enter phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      hobby
                    </label>
                    <input
                      type="text"
                      className="form-control fw-bold"
                      id="hobby"
                      name="hobby"
                      value={data.hobby !== null ? data.hobby : ''}
                    onChange={handleInput}
                    placeholder="Enter hobby"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">
                    Birth Date
                    </label>
                    <input
                      type="date"
                      className="form-control fw-bold"
                      id="birthDate"
                      name="birthDate"
                      value={data.birthDate}
                      onChange={handleInput}
                      placeholder="Enter your Brith Date"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isAdmin"
                      name="isAdmin"
                      checked={data.isAdmin}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="isAdmin">
                      Is Admin
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    {updating ? 'Updating...' : 'Update'} {/* Change button text based on loading state */}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
