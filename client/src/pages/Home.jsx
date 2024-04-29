import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 text-center'>
          {/* <h1>Welcome to [ MEET PATEL ] Portfolio</h1> */}
          <h1>Welcome to My Website </h1>
          <p className='lead'>
            Crafting beautiful and functional web solutions for your business
            needs
          </p>
          <div className='mt-4'>
            <Link to='/about' className='btn btn-primary me-2'>
              About Me
            </Link>
            <Link to='/portfolio' className='btn btn-secondary'>
              Portfolio
            </Link>
            {/* <p>{API}</p> */}
            {/* <Link to="/admin">admin</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
