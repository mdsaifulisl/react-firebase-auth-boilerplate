/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
  e.preventDefault();
  const { name, email, password } = formData;

  if (password.length < 6) {
    setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
    return;
  }

  setError(""); 

  createUser(email, password)
    .then((result) => {
      updateUserProfile(name)
        .then(() => {
          navigate("/");
        })
        .catch((err) => setError(err.message));
    })
    .catch((err) => {
      console.error("Registration error:", err.code);

      // একই ইমেইল ২য় বার ব্যবহার করলে এই চেকটি কাজ করবে
      if (err.code === "auth/email-already-in-use") {
        setError("এই ইমেইলটি দিয়ে ইতিপূর্বেই অ্যাকাউন্ট খোলা হয়েছে। দয়া করে লগইন করুন।");
      } else if (err.code === "auth/invalid-email") {
        setError("ইমেইল ফরম্যাটটি সঠিক নয়।");
      } else {
        setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
      }
    });
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister} autoComplete="off">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              required
              autoComplete="new-password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {error && <p className="error-text">{error}</p>}
          </div>
          <button type="submit" className="btn-common btn-primary-custom">
            Register Now
          </button>
        </form>

        <div className="text-center my-4 opacity-50">OR</div>

        <div className="social-auth gap-2 d-grid">
          <button className="btn-common btn-google" onClick={signInWithGoogle}>
            <span>🌐</span> Sign up with Google
          </button>
          <button className="btn-common btn-github" onClick={signInWithGithub}>
            <span>🐱</span> Sign up with GitHub
          </button>
        </div>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
