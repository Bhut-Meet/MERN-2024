import { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const UserProfileEdit = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
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

    // Update user data
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          `${API}/api/admin/user/update/${params.id}`,
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
          // navigate("/admin/users");
        } else {
          toast.error("Update failed");
        }
      } catch (error) {
        console.log("Error updating user:", error);
      }
    };


  return (
    <>
      <div className='container' style={{ paddingTop: '56px' }}>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={data.username}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={data.email}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              className='form-control'
              id='phone'
              name='phone'
              value={data.phone}
              onChange={handleInput}
              />
          </div>
          {/* <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <div className='input-group'>
            <input
              className='form-control'
              value={data.password}
              id='password'
              name='password'
              placeholder='Enter password'
              value={user.password}
            />
          </div>
        </div> */}
          <button className='btn btn-success mt-2 px-4 mb-4'>Save Changes</button>
        </form>
      </div>
    </>
  );
};
