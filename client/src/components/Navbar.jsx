import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';
import "../components/Navbar.css";
import { FaUser  } from "react-icons/fa";
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import logo from '../assets/mainlogo.png'


export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  // start which navbar show admin navbar or user navbar
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if the current path is '/admin/users'
    if (location.pathname.includes('/admin')){
      setShowNavbar(false); // Hide the navbar
    } else {
      setShowNavbar(true); // Show the navbar for other paths
    }
  }, [location.pathname]); // Re-run effect when the path changes

// end which navbar show admin navbar or user navbar


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  const {isLoggedIn} =useAuth();


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: showNavbar ? 'block' : 'none' }}>
      <div className="container">
        <NavLink className="navbar-brand" to='/' onClick={closeNav}><img src={logo} alt="" style={{width:"31%", height:"10%"}}/></NavLink>
        <button onClick={toggleNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse mt-3 ${
                  isNavOpen ? 'show' : ''
                }`}
                id='navbarSupportedContent'>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to='/' onClick={closeNav}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/about' onClick={closeNav}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/contact' onClick={closeNav}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/service' onClick={closeNav}>Services</NavLink>
            </li>

            { isLoggedIn ? (
              <>
            <li className="nav-item">
              <NavLink className="nav-link" to='/logout' onClick={closeNav}>Logout</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='Profile' onClick={closeNav}><FaUser className='m-2'></FaUser></NavLink>
            </li>
            </>
            )
              
             : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/register' onClick={closeNav}>Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login' onClick={closeNav}>Login</NavLink>
                </li>
              </>) }

          </ul>
        </div>
      </div>
    </nav>
  );
};
