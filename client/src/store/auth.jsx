import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `meet ${token}`;
  // const authorizationToken = ('meet', token);

  // const API = import.meta.env.VITE_BASE_URL;

  const API = 'https://mernbackend-2cyi.onrender.com';

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);
  };

  let isLoggedIn = !!token; // if token exists in the local storage then it

  //user logout functiality
  const LogoutUser = () => {
    setToken('');
    return localStorage.removeItem('token');
  };

  // jwt authentication -to get current login user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('user Data', data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        toast.error('error fachig admin');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('error fatching user data');
    }
  };

  //to fatch the serviuces data from the database

  const getSevices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.log('services frontend error:', error);
    }
  };

  useEffect(() => {
    getSevices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        storeTokenInLocalStorage,
        LogoutUser,
        authorizationToken,
        services,
        isLoading,
        API,
        userAuthentication
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth must be used within the AuthProvider');
  }
  return authContextValue;
};
