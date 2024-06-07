import { useState } from 'react';
import { useAuth } from '../store/auth';
import support from '../assets/usupport.png';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

const defaultContactFormData = {
  username: '',
  email: '',
  phone: '',
  message: '',
};

export const Contact = () => {
  const [isSending, setIssending] = useState(false); // State variable to track loading state
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();

  // if (userData && user) {
  //   setContact({
  //     username: user.username,
  //     email: user.email,
  //     phone: user.phone,
  //     message: '',
  //   });
  //   setUserData(false);
  // }

  // const handleInput = (e) => {
  //   const { name, value } = e.target;

  //     setContact({
  //       ...contact,
  //       [name]: value,
  //     });
  //   };

  //   setContact((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch(`${API}/api/form/contact`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(contact),
  //     });
  //     if (response.ok) {
  //       setContact(defaultContactFormData);
  //       const data = await response.json();
  //       console.log(data);
  //       alert('Message Sent!');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Populate contact data from user if available
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      phone: user.phone,
      message: '',
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const trimmedContact = {
    ...contact,
    message: contact.message.trimEnd(), // Trim trailing spaces and newlines from the message field
  };

  const handleChatButtonClick = () => {
    // Implement logic to initiate chat with admin
    // Example: ChatService.initiateChatWithAdmin();
    // You may need to pass user information for identification
    toast.info('Chat functionality coming soon!');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssending(true); // Set loading state to true when form is submitted
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedContact),
      });

      if (response.ok) {
        setContact((prevContact) => ({
          ...prevContact,
          message: '', // Clear only the message field
        }));
        toast.success('Message Sent!');
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
    setIssending(false); // Set loading state to false when form is submitted
  };

  return (
    <section className='pt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img
              // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAFR6-dn5mIqIzM3ti2HUhmH6E0ad_PTd2x_BgrYAw&s'
              src={support}
              alt='Login Image'
              className='img-fluid mb-3'
              style={{ maxWidth: '80%', height: 'auto' }}
            />
          </div>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h2 className='text-center mb-4'>Contact Us</h2>
                {user ? (
                  <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <label htmlFor='username' className='form-label'>
                        Username
                      </label>
                      <input
                        type='text'
                        className='form-control fw-bold'
                        id='username'
                        name='username'
                        value={contact.username}
                        // onChange={handleInput}
                        placeholder='Enter username'
                        // required
                        disabled
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label '>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control fw-bold focus-ring-none'
                        style={{ outline: 'none' }}
                        id='email'
                        name='email'
                        value={contact.email}
                        disabled
                        // onChange={handleInput}
                        placeholder='Enter email'
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Phone
                      </label>
                      <input
                        type='email'
                        className='form-control fw-bold'
                        id='number'
                        name='number'
                        value={contact.phone}
                        disabled
                        // onChange={handleInput}
                        placeholder='Enter email'
                      />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='message' className='form-label'>
                        Message
                      </label>
                      <textarea
                        className='form-control'
                        id='message'
                        name='message'
                        value={contact.message}
                        onChange={handleInput}
                        placeholder='Enter your message'
                        rows='5'
                        required
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='btn w-100'
                      style={{ backgroundColor: '#9333EA', color: 'white' }}
                    >
                      {isSending ? 'sending...' : 'Send Message'}{' '}
                      {/* Change button text based on loading state */}
                    </button>
                    {/* Add chat button */}
                    <Link className='btn btn-primary mt-3'
                  onClick={handleChatButtonClick} to="/Chat">Start Chat with Admin</Link>
                  </form>
                ) : (
                  <>
                    <p className='text-center'>
                      Please{' '}
                      <a href='/login' className='text-primary fw-bold'>
                        login
                      </a>{' '}
                      to contact and send a message.
                    </p>
                    <p className='text-center'>
                      After Login the refresh the page.
                    </p>
                  </>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* className='m-4 card shadow border border-5 overflow-hidden  border border-start-0 rounded-5 ' */}
      <div
        style={{
          border: '0px solid black',
          borderRadius: '30px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          margin: '4rem',
          overflow: 'hidden',
        }}
      >
        {/* <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1719.818283857928!2d70.78692423866337!3d22.24368495097004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712481581750!5m2!1sen!2sin'
            width='100%'
            height='500'
            allowFullScreen=''
            loading='lazy'
          ></iframe> */}
      </div>
    </section>
  );
};
