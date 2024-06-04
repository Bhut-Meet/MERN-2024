import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AdminServiceUpdate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    service: '',
    description: '',
    price: '',
    image: '',
    provider: '',
  });
  const params = useParams();
  const { authorizationToken, API } = useAuth();

  // Get single service  data
  const getSingleServiceData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/AdminServices/${params.id}`,
        {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const serviceData = await response.json();
      console.log('User single data', serviceData);
      setData(serviceData);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getSingleServiceData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Update service data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/AdminServices/update/${params.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success('Update successful');
        navigate('/admin/AdminServices');
      } else {
        toast.error('Update failed');
      }
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };

  return (
    <>
      <div className='container py-5'>
        <h2>Update Service</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='service'>Service:</label>
            <input
              type='text'
              className='form-control'
              id='service'
              name='service'
              value={data.service}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <textarea
              className='form-control'
              id='description'
              name='description'
              rows='3'
              value={data.description}
              // onChange={(e) => setDescription(e.target.value)}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price:</label>
            <input
              type='number'
              className='form-control'
              id='price'
              name='price'
              value={data.price}
              onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='image'>Image:</label>
            <input
              type='text'
              className='form-control'
              id='image'
              name='image'
              placeholder='Enter Image url'
              value={data.image}
              onChange={handleInput}
            />
            <p>
              Choose file option is{' '}
              <span style={{ color: 'red' }}>coming soon</span>
            </p>
          </div>
          <div className='form-group'>
            <label htmlFor='provider'>Provider:</label>
            <input
              type='text'
              className='form-control'
              id='provider'
              name='provider'
              value={data.provider}
              onChange={handleInput}
            />
          </div>
          <button type='submit' className='btn btn-primary mt-5'>
            Update Service
          </button>
        </form>
      </div>
    </>
  );
};
