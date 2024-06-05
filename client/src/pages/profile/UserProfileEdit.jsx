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
    hobby:"",
    image: "" // New property for user image
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
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

  


  const viewProfileImage = () => {
    if (data.image) {
      return (
        <div className="col-md-6">
          <img
            src={data.image}
            alt="Profile"
            className="img-fluid rounded"
            style={{ maxHeight: "200px" }}
          />
        </div>
      );
    } else {
      return null;
    }
  };


  return (
    <>
<div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={data.username}
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                readOnly
              />
            </div>
            <p>Change email</p>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleInput}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Hobby
              </label>
              <input
                type="text"
                className="form-control"
                id="hobby"
                name="hobby"
                value={data.hobby}
                onChange={handleInput}
                
              />
            </div>
            {viewProfileImage()}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
