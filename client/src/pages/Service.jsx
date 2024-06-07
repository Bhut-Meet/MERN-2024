import { useAuth } from "../store/auth";
import {Link} from "react-router-dom";
// import "../../src/index.css"
export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services my-4" >
      <div className="container">
        <h2 className="main-heading">Services</h2>
      </div>
      <div className="container">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {services ? (
      services.map((curElem, index) => {
        const { image, service, price, provider, description } = curElem;
        return (
          <div className="col" key={index}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <div className="card h-100 custom-card">
                <img
                  src={image}
                  alt=""
                  className="card-img-top custom-card-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <div className="card-footer custom-card-footer">
                  <div className="row">
                    <div className="col">
                      <p className="card-text">{provider}</p>
                    </div>
                    <div className="col m-auto text-end">
                      <p className="card-text">Price: ₹ {price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    )}
  </div>
</div>

    </section>
  );
};
