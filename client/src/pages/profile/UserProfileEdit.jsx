export const UserProfileEdit = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '56px' }}>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              // value={user.username}
              // onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              // value={user.email}
              // onChange={handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              className='form-control'
              id='phone'
              // value={user.phone}
              // onChange={handleInput}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <div className='input-group'>
            <input
              className='form-control'
              id='password'
              placeholder='Enter password'
            //   value={user.password}
            />
          </div>
        </div>
          <button className='btn btn-success mt-2 px-4'>Save Changes</button>
        </form>
      </div>
    </>
  );
};
