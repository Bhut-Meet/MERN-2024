import "../profile/Profile.css";
import { useAuth } from "../../store/auth";
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


export const Profile = () => {
    const { user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
            <div className='container  mt-5 mb-5'>
                <h2>User Profile</h2>
                <div className='row'>
                    <div className='col-md-4 text-center mb-4 mb-md-0'>
                        <div className='mb-3'>
                            <img
                                src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                                alt='User Image'
                                className='img-fluid rounded-circle'
                                style={{ width: '150px', height: '150px' }} // Adjust image size as needed
                            />
                        </div>
                        <div className="d-flex justify-content-center ">
                            <div className='mb-3 custom-file-input'>
                                <input type='file' className='form-control' id='imageUpload' accept='image/*' />
                                <label htmlFor="imageUpload" className="mt-1 btn-sm">Choose Image</label>
                            </div>
                            <div className='mb-3 ms-3 '>
                                <button className='btn btn-danger mt-1'>Remove Image</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='username'
                                    value={user.username}
                                    // onChange={handleInput}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    value={user.email}
                                    // onChange={handleInput}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone Number</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='phone'
                                    value={user.phone}
                                    // onChange={handleInput}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className='form-control'
                                        id='password'
                                        placeholder='Enter password'
                                        value={user.password}

                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? "Hide Password" : "Show Password"}
                                    </button>
                                </div>
                            </div>
                            <button className='btn btn-success mt-2 px-4'>
                                <Link style={{textDecoration:"none", color:"white"}} to={`/Profile/user/${user._id}/edit`}>Edit Profile</Link>
                            </button>
                            {user.isAdmin ? (
                                <Link to="/admin" className='btn btn-primary mt-2 ms-2 px-4'>
                                    Admin
                                </Link>
                            ):(null)}
                            <NavLink to="/logout" style={{textDecoration:"none"}} className='btn btn-primary mt-2 ms-2 px-4'>Logout</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
