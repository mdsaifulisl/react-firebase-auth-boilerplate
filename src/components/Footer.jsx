import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-5"
      style={{ backgroundColor: "#1e293b", color: "#f8fafc" }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          <div className="col-lg-4 col-md-6">
            <h3
              className="fw-bold mb-4"
              style={{ color: "var(--primary-color)", letterSpacing: "-1px" }}
            >
              Auth<span className="text-white">Master</span>
            </h3>
            <p
              className="opacity-75 mb-4"
              style={{ fontSize: "16px", lineHeight: "1.8" }}
            >
              একটি শক্তিশালী রিঅ্যাক্ট এবং ফায়ারবেজ ভিত্তিক অথেনটিকেশন সিস্টেম।
              আমরা আপনার ডেটার নিরাপত্তা এবং সহজ ইউজার এক্সপেরিয়েন্স নিশ্চিত
              করি।
            </p>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white opacity-75">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white opacity-75">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="text-white opacity-75">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  to="/"
                  className="text-decoration-none text-white opacity-75 hover-opacity-100"
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/login"
                  className="text-decoration-none text-white opacity-75"
                >
                  Login
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/register"
                  className="text-decoration-none text-white opacity-75"
                >
                  Register
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/about"
                  className="text-decoration-none text-white opacity-75"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="https://firebase.google.com/docs/auth"
                  target="_blank"
                  className="text-decoration-none text-white opacity-75"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <Link
                  to="/about"
                  className="text-decoration-none text-white opacity-75"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/features"
                  className="text-decoration-none text-white opacity-75"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Join Our Journey</h5>
            <p className="opacity-75 small mb-4">
              এই সম্পর্কিত লেটেস্ট আপডেট পেতে আমাদের সাথে থাকুন।
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border-0 py-3 ps-3"
                placeholder="Your Email"
                style={{ borderRadius: "12px 0 0 12px" }}
              />
              <button
                className="btn btn-primary-custom px-3"
                style={{
                  borderRadius: "0 12px 12px 0",
                  backgroundColor: "var(--primary-color)",
                  border: "none",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <hr className="my-5 opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 opacity-50">
              &copy; {currentYear} AuthMaster. Developed by{" "}
              <span className="text-white">Your Name</span>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="mb-0 opacity-50">Assignment-06 (React + Firebase)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
