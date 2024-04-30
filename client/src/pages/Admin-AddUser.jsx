import { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const AdminAddUser = () => {
  const {  API } = useAuth();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    role: '', // Assuming you have roles like admin, user, etc.
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (
      !userData.username ||
      !userData.email ||
      !userData.phone ||
      !userData.password ||
      !userData.role
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: authorizationToken,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        toast.success('User added successfully');
        // Clear input fields after successful submission
        setUserData({
          username: '',
          email: '',
          password: '',
          role: '',
        });
      } else {
        toast.error('Failed to add user');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed too add user');
    }
  };

  return (
    <div className='container'>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            className='form-control'
            id='username'
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Phone:</label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select
            className='form-control'
            id='role'
            value={userData.role}
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          >
            <option value=''>Select Role</option>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Add User
        </button>
      </form>
    </div>
  );
};
