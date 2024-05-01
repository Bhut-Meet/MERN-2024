import { useEffect, useState } from "react";
// import { useAuth } from "../store/auth";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";

export const UserProfileEdit = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password:""
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
  return (
    <>
      <div className='container' style={{ paddingTop: '56px' }}>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              value={data.username}
              // onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={data.email}
              // onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              className='form-control'
              id='phone'
              value={data.phone}
              // onChange={handleInput}
              />
          </div>
          <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <div className='input-group'>
            <input
              className='form-control'
              value={data.password}
              id='password'
              name='password'
              placeholder='Enter password'
            //   value={user.password}
            />
          </div>
        </div>
          <button className='btn btn-success mt-2 px-4 mb-4'>Save Changes</button>
        </form>
      </div>
    </>
  );
};
