import { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const AdminAddUser = () => {
  const { currentUser } = useAuth();

  // Define currentUserIsAdmin based on the isAdmin status of the current user
  const currentUserIsAdmin = currentUser && currentUser.isAdmin;

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    isAdmin: currentUserIsAdmin ? 'admin' : 'user', // Set default role based on user's isAdmin status
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (
      !userData.username ||
      !userData.email ||
      !userData.phone ||
      !userData.password ||
      !userData.isAdmin
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    // Handle form submission, e.g., send data to backend
    try {
      // Your form submission logic here
      console.log('Form submitted:', userData);
      // Reset form fields after successful submission
      setUserData({
        username: '',
        email: '',
        phone: '',
        password: '',
        isAdmin: currentUserIsAdmin ? 'admin' : 'user', // Reset role based on user's isAdmin status
      });
      toast.success('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error('Failed to add user');
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
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select
            className='form-control'
            id='role'
            value={userData.isAdmin}
            onChange={(e) => setUserData({ ...userData, isAdmin: e.target.value })}
            disabled={!currentUserIsAdmin} // Disable role selection if not an admin
          >
            {!currentUserIsAdmin && (
              <option value='user'>User</option>
            )}
            {currentUserIsAdmin && (
              <>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </>
            )}
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Add User
        </button>
      </form>
    </div>
  );
};
