
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider"; 

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

 
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(formData.email, formData.password)
      .then(result => {
        const user = result.user;
        console.log("Logged in user:", user);
        setError("");
        navigate("/dashboard"); 
      })
      .catch(err => {
        console.error("Login error:", err);
        setError("Invalid email or password. Please try again.");
      });
  };


  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => navigate("/dashboard"))
      .catch(err => setError(err.message));
  };


  const handleGithubLogin = () => {
    signInWithGithub()
      .then(() => navigate("/dashboard"))
      .catch(err => setError(err.message));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        {error && <p className="error-text text-center mb-3" style={{color: 'red'}}>{error}</p>}
        
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="new-password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button type="submit" className="btn-common btn-primary-custom">
            Login
          </button>
        </form>

        <div className="text-center my-4 opacity-50">OR</div>

        <div className="social-auth gap-2 d-grid">
          <button className="btn-common btn-google" onClick={handleGoogleLogin}>
            <span>🌐</span> Sign in with Google
          </button>
          <button className="btn-common btn-github" onClick={handleGithubLogin}>
            <span>🐱</span> Sign in with GitHub
          </button>
        </div>

        <p className="auth-link">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;