import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 text-center'>
          <h1>Professional Web Development Services</h1>
          <p className='lead'>
            We build beautiful, modern websites that meet the goals of our clients and the needs of their customers.
          </p>
          <Link to="/contact" className='btn' style={{ background: "#9333EA",color:"white" }}>
            Get Started
          </Link>
        </div>
      </div>
      <div className='container mt-5'>
        <h1 className='text-center'>Our Services</h1>
        <div className='row mt-5'>
          <div className='col-md-4 mb-3 mb-md-0 mb-sm-4'>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">Web Design</h3>
                <p className="card-text">Stunning, responsive designs that adapt to any device.</p>
                <Link to="#" className='btn' style={{ background: "#9333EA",color:"white" }}>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3 mb-md-0 mb-sm-4'>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">Web Development</h3>
                <p className="card-text">Custom development tailored to your specific business needs.</p>
                <Link to="#" className='btn' style={{ background: "#9333EA",color:"white" }}>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3 mb-md-0 mb-sm-4'>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">SEO Optimization</h3>
                <p className="card-text">Improve your websites visibility and ranking in search engines.</p>
                <Link to="#" className='btn' style={{ background: "#9333EA",color:"white" }}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pb-5 mt-5 mb-5'>
        <h2 className='text-center mb-5'>About Us</h2>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <img src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg" alt="" className='img-fluid rounded shadow' />
          </div>
          <div className='col-md-6'>
            <div className=''>
              <p>We are a team of passionate web developers and designers who love to create exceptional websites. With over a decade of experience, we have the skills and knowledge to bring your vision to life.</p>
              <Link to="/contact" className='btn' style={{ background: "#9333EA",color:"white" }}>Meet the Team</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='text-center mt-5 bg-dark' ><p style={{color:"white"}}>© 2023 WebDev. All rights reserved.</p></div> */}
    </div>
  );
};
