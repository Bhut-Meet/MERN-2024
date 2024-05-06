import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const UserProfileEdit = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    image: null // New property for user image
  });

  const params = useParams();
  const { API } = useAuth();

  // Get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/auth/user/${params.id}`, {
        method: "GET",
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
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  // Update user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/auth/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Update successful");
        navigate("/Profile");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "56px" }}>
        <form onSubmit={handleSubmit}>
            <img src={data.image} alt="" />
            <br />
            <br />
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={data.username}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Profile Image:</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-success mt-2 px-4 mb-4">Save Changes</button>
        </form>
      </div>
    </>
  );
};
