import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user, handleLogout }) => {
  return (
    <div className="dashboard-wrapper py-5" style={{ backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      <div className="container py-5">
        <div className="row g-4">
          
          
          <div className="col-lg-4">
            <div className="p-5 bg-white rounded-5 shadow-sm text-center border-0">
              <div className="mb-4 mx-auto bg-soft-custom rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: '100px', height: '100px', backgroundColor: '#eef2ff', fontSize: '40px' }}>
                {user?.photoURL ? <img src={user.photoURL} alt="User" className="rounded-circle w-100" /> : '👤'}
              </div>
              <h3 className="fw-bold mb-1">{user?.displayName || 'Welcome Back!'}</h3>
              <p className="text-muted mb-4">{user?.email}</p>
              <button onClick={handleLogout} className="btn-common btn-google border-danger text-danger">
                Logout from Account
              </button>
            </div>
          </div>

          
          <div className="col-lg-8">
            <div className="p-5 bg-white rounded-5 shadow-sm border-0 h-100">
              <h2 className="fw-bold mb-4">User Status: <span className="badge bg-success fs-6 fw-normal rounded-pill">Active Now</span></h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 border" style={{ backgroundColor: '#fcfcfe' }}>
                    <h5 className="fw-bold text-muted small text-uppercase">Last Login</h5>
                    <p className="fs-5 fw-bold mb-0">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 border" style={{ backgroundColor: '#fcfcfe' }}>
                    <h5 className="fw-bold text-muted small text-uppercase">Auth Provider</h5>
                    <p className="fs-5 fw-bold mb-0 text-capitalize">{user?.providerData[0]?.providerId || 'Email'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-4" style={{ border: '2px dashed var(--border-color)' }}>
                <h4 className="fw-bold mb-3">System Access</h4>
                <p className="text-muted">আপনি সফলভাবে অথেনটিকেশন সিস্টেমের মাধ্যমে প্রবেশ করেছেন। এখন আপনি এই সুরক্ষিত পেজটি দেখতে পাচ্ছেন।</p>
                <div className="d-inline-block"><Link to="/" className="btn-common btn-primary-custom d-inline-block px-5">Back to Home</Link></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;