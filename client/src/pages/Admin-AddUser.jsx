import { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AdminAddUser = () => {

  const navigate = useNavigate();

  const { authorizationToken, API ,currentUser } = useAuth();

    // Define currentUserIsAdmin based on the isAdmin status of the current user
    const currentUserIsAdmin = currentUser && currentUser.isAdmin;

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (
      !userData.username ||
      !userData.email ||
      !userData.phone ||
      !userData.password 
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
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
          isAdmin: currentUserIsAdmin ? 'user' : '',
        });
        navigate('/admin/AdminServices');
      } else {
        toast.error('Failed to add user');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed too add user');
    }
  };

  return (
    <div className='container my-4'>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            value={userData.username}
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={userData.email}
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Phone:</label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            name='phone'
            value={userData.phone}
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={userData.password}
            onChange={handleInput}
          />
        </div>
        <button type='submit' className='btn btn-primary my-4'>
          Add User
        </button>
      </form>
    </div>
  );
};
