import "../profile/Profile.css";
import { useAuth } from "../../store/auth";
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export const Profile = () => {
    const { user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
            <div className='container mt-5'>
                <h2>User Profile</h2>
                <div className='row'>
                    <div className='col-md-4 text-center mb-4 mb-md-0'>
                        {/* User Image Section */}
                    </div>
                    <div className='col-md-8'>
                        <form>
                            {/* User Info Form */}
                            {/* Username */}
                            {/* Email */}
                            {/* Phone Number */}
                            {/* Password */}
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
                            <button type='submit' className='btn btn-primary mt-2 px-4'>
                                Edit Profile
                            </button>
                            {/* Conditional Rendering of Admin Button */}
                            {user.isAdmin && (
                                <button className='btn btn-primary mt-2 ms-2 px-4'>
                                    Admin
                                </button>
                            )}
                            {/* Logout Button */}
                            <NavLink to="/logout" style={{textDecoration:"none"}} className='btn btn-primary mt-2 ms-2 px-4'>Logout</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
