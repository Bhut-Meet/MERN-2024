import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {  toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const { storeTokenInLocalStorage, API } = useAuth();


  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json() 
      console.log('response from server: ', res_data.extraDetails);
      if (response.ok) {

        //storage data in localstorage
        storeTokenInLocalStorage(res_data.token);
        setUser({
          username: '',
          email: '',
          phone: '',
          password: '',
        });
        toast.success("Registreation successful")
        navigate('/');
      }
      else{
        alert(res_data.extraDetails ? res_data.extraDetails: res_data.message)
      }
      console.log(response);
    } catch (error) {
      console.log('register', error);
    }
  };

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              // src="/images/register.png"
              src='../../src/assets/register.png'
              alt='Registration Image'
              className='img-fluid'
              style={{ maxWidth: '80%', height: 'auto' }} // Fix image size
            />
          </div>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h2 className='text-center mb-4'>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                      Username
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      name='username'
                      value={user.username}
                      onChange={handleInput}
                      placeholder='Enter username'
                      // required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      value={user.email}
                      onChange={handleInput}
                      placeholder='Enter email'
                      // required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='phone'
                      name='phone'
                      value={user.phone}
                      onChange={handleInput}
                      placeholder='Enter phone number'
                      // required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                      Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                      value={user.password}
                      onChange={handleInput}
                      placeholder='Enter password'
                      // required
                    />
                  </div>
                  <button type='submit' className='btn btn-primary w-100'>
                    Register Now
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
