import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";
import {  toast } from "react-toastify";

// const LOGINURL=`${API}/api/auth/login`;

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {storeTokenInLocalStorage,API} =useAuth();
  const navigate = useNavigate()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/auth/login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(user),
      });
      const res_data = await response.json();

      if(response.ok){
        // alert("login successfuly ")
        //storage data in localstorage
      storeTokenInLocalStorage(res_data.token);
      // localStorage.setItem("token",res_data.token)
        setUser({
          email: "",
          password: "",
        });
        toast.success("Login successful")

        navigate("/");
        // window.location.reload();
      } else{
        toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message)

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="../assets/login.png"
              alt="Login Image"
              className="img-fluid"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="text-center mb-4">Login Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Enter email"
                      // required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Enter password"
                      // required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login Now
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
