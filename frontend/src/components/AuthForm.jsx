import React, { useState } from 'react';
import './style.css'; // Ensure you import your CSS file

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2 className="auth-title">{isLogin ? 'Login' : 'Register'}</h2>

        <form className="auth-form">
          <div className="auth-group">
            <label htmlFor="email" className="auth-label">Email Address</label>
            <input type="email" id="email" className="auth-input" required />
          </div>

          <div className="auth-group">
            <label htmlFor="password" className="auth-label">Password</label>
            <input type="password" id="password" className="auth-input" required />
          </div>

          {!isLogin && (
            <div className="auth-group">
              <label htmlFor="confirmPassword" className="auth-label">Confirm Password</label>
              <input type="password" id="confirmPassword" className="auth-input" required />
            </div>
          )}

          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={toggleForm} className="auth-toggle-btn">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
