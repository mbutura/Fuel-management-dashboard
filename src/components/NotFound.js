import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const NotFound = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(redirectHome);
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="jumbotron text-center">
              <h1 className="display-3">404 - Page Not Found</h1>
              <p className="lead">Sorry, the page you are looking for does not exist.</p>
              <p>Redirecting to the homepage in 5 seconds...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;