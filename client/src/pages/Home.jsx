import { useAuth } from "../store/auth";
export const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          {/* <h1>Welcome to [ MEET PATEL ] Portfolio</h1> */}
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">Crafting beautiful and functional web solutions for your business needs</p>
          <div className="mt-4">
            <a href="/about" className="btn btn-primary me-2">About Me</a>
            <a href="/portfolio" className="btn btn-secondary">Portfolio</a>
            {/* <p>{API}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
