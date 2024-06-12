import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import login from '../assets/ulogin.png'

// const LOGINURL=`${API}/api/auth/login`;


export const Login = () => {
  const [isLoading, setIsLoading] = useState(false); // State variable to track loading state

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { storeTokenInLocalStorage, API } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when form is submitted
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();

      if (response.ok) {
        // alert("login successfuly ")
        //storage data in localstorage
        storeTokenInLocalStorage(res_data.token);
        // localStorage.setItem("token",res_data.token)
        setUser({
          email: '',
          password: '',
        });
        toast.success('Login successful');
        navigate('/');
        // window.location.reload();
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false); // Set loading state to false after login process is completed
  };

  return (
    <section className='py-5'>
      <div className='container mb-3'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img
              src={login}
              alt='Login Image'
              className='img-fluid mb-3'
              style={{ maxWidth: '80%', height: 'auto' }}
            />
          </div>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h2 className='text-center mb-4'>Login Form</h2>
                <form onSubmit={handleSubmit}>
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
                  <button type='submit' className='btn w-100' style={{backgroundColor:"#9333EA", color:"white"}}>
                    {isLoading ? 'Loading...' : 'Login Now'} {/* Change button text based on loading state */}
                  </button>
                </form>
                <p className="mt-3 text-center">
                {`Don't`} have an account? <NavLink to="/register" style={{color: "#9333EA", textDecoration: 'none'}}>Register here</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};