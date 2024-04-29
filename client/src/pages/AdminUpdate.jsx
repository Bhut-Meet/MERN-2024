import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminUpdate = () =>{
  const navigate = useNavigate()
    const [data, setData] = useState({
        username:"",
        email:"",
        phone:"",
    });
    const params = useParams();
    const { authorizationToken, API } = useAuth();

    //get single user data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            }
        );

        const data = await response.json();
        console.log('user single data', data);
        setData(data);

        } catch (error) {
            console.log("Error deleting user:", error);
        }
    };

    useEffect(()=>{
      getSingleUserData();
  },[])
        
  const handleInput = (e) =>{
    const { name, value } = e.target;
    setData({...data,[name]:value})
}

        // to update the data dynamically
        const hanleSubmit = async (e)  =>{
          e.preventDefault();
          try {
           const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
              method:"PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization:authorizationToken,
              },
              body: JSON.stringify(data),
            }
          );
          if(response.ok){
            toast.success("Update successful");
            navigate("/admin/users")
          }
          else{
            toast.error("Not Update");
          }

          } catch (error) {
            console.log(error);
          }

        }
return (
    <>
    <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card shadow'>
                <div className='card-body'>
                  <h2 className='text-center mb-4'>User data</h2>
                  <form onSubmit={hanleSubmit}>
                    <div className='mb-3'>
                      <label htmlFor='username' className='form-label'>
                        Username
                      </label>
                      <input
                        type='text'
                        className='form-control fw-bold'
                        id='username'
                        name='username'
                        value={data.username}
                        onChange={handleInput}
                        placeholder='Enter username'
                        // required
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label '>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control fw-bold focus-ring-none'
                        style={{ "outline":"none"}}
                        id='email'
                        name='email'
                        value={data.email}
                        onChange={handleInput}
                        placeholder='Enter email'
                        required
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='number' className='form-label'>
                        Phone
                      </label>
                      <input
                        type='phone'
                        className='form-control fw-bold'
                        id='phone'
                        name='phone'
                        value={data.phone}
                        onChange={handleInput}
                        placeholder='Enter phone'
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='number' className='form-label'>
                        isAdmin
                      </label>
                      <input
                        type='phone'
                        className='form-control fw-bold'
                        id='isAdmin'
                        name='isAdmin'
                        value={data.isAdmin}
                        onChange={handleInput}
                        // placeholder='En'
                      />
                    </div>

                    <button type='submit' className='btn btn-primary w-100'>
                     Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
)
}