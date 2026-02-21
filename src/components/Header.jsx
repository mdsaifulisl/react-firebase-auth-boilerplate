import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ user, handleLogout }) => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/" style={{ color: 'var(--primary-color)', letterSpacing: '-1px' }}>
          Auth<span className="text-dark">Master</span>
        </Link>


        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-semibold" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-semibold" to="/features">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 fw-semibold" to="/about">About</NavLink>
            </li>
            {
              user && (
                <li className="nav-item">
                  <NavLink className="nav-link px-3 fw-semibold" to="/dashboard">Dashboard</NavLink>
                </li>
              )
            }
          </ul>

          {/* Dynamic Auth Buttons */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-lg-0 mt-3">
            {user ? (
              <>
                <div className="d-flex align-items-center gap-2 me-2">
                  {user.photoURL ? <img src={user.photoURL} alt="User" className="rounded-circle" style={{ width: '40px', height: '40px' }} /> : <div className="bg-soft-custom rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    👤
                  </div>}
                  
                  <span className="fw-bold d-none d-lg-inline text-dark">{user.displayName || 'User'}</span>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="btn btn-danger px-4 py-2 rounded-pill fw-bold shadow-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="btn btn-outline-custom px-4 py-2 rounded-pill fw-bold"
                  style={{ border: '2px solid var(--primary-color)', color: 'var(--primary-color)' }}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-primary-custom px-4 py-2 rounded-pill fw-bold shadow-sm"
                  style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;