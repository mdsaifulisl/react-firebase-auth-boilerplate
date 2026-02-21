
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center" style={{ height: "80vh" }}>
      <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#ff4d4d" }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p className="text-muted">The page you are looking for doesn't exist or has been moved.</p>
      <div className="d-inline-block"><Link to="/" className="btn-common btn-primary-custom mt-3">
        Back to Home
      </Link></div>
    </div>
  );
};

export default NotFound;