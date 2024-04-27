import { useAuth } from "../store/auth";
// import "../../src/index.css"
export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services my-2" >
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3  g-4">
          {services ? (
            services.map((curElem, index) => {
              const {image, service, price, provider, description } = curElem;
              return (
                <div className="col" key={index}>
                  <div className="card h-100 box" >
                    <img src={image} alt="" style={{ height: "200px", width: "100%", objectFit: "cover",borderRadius:"5px"}}/>
                    <div className="card-body">
                      <h5 className="card-title">{service}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer ">
                      <div className="row">
                        <div className="col">
                          <p className="card-text">{provider}</p>
                        </div>
                        <div className="col m-auto text-end">
                          <p className="card-text">Price:- ₹ {price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
