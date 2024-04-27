/* eslint-disable react/no-unescaped-entities */
import {Link} from "react-router-dom"
import { useAuth } from "../store/auth";
export const About = () => {
  const {user} = useAuth();
  return (
    <div className="container my-5" >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow p-5">
            <h5>Welcome, { user ? `${user.username} to our website` :`to our website`}</h5>
            <h1 className="text-center mb-4">About Me</h1>
            <p className="lead">
              I am a passionate and skilled web developer with [1] years of experience in crafting robust and dynamic web applications. My journey in web development began with a deep fascination for creating innovative solutions that enhance user experiences and drive business growth.
            </p>
            <h3 className="mt-4">Expertise</h3>
            <ul className="list-group">
              <li className="list-group-item">Front-end: HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js</li>
              <li className="list-group-item">Back-end: Node.js, Express.js,</li>
              <li className="list-group-item">Databases: MongoDB,</li>
              <li className="list-group-item">Other Tools: Git, RESTful APIs</li>
            </ul>
            <h3 className="mt-4">Approach</h3>
            <p>
              My approach to web development is rooted in a meticulous attention to detail and a commitment to delivering high-quality, scalable solutions. I thrive in collaborative environments, working closely with cross-functional teams to translate client requirements into functional and visually stunning web applications.
            </p>
            <h3 className="mt-4">Mission</h3>
            <p>
              My mission as a web developer is to leverage my technical expertise and creativity to empower businesses and individuals with innovative digital solutions. I am dedicated to staying updated with the latest technologies and best practices in web development to ensure that I deliver cutting-edge solutions that exceed client expectations.
            </p>
            <div className="">
            <h3 className="mt-4">Let's Connect</h3>
            <p>
              I am always open to new opportunities and collaborations. Whether you're looking to revamp your existing website, build a new web application from scratch, or simply discuss ideas, feel free to reach out. Let's work together to turn your vision into reality!
            </p>
            <Link className="btn btn-success" to="/contact">Connect Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
