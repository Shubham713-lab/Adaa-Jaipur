import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/account');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      console.log("Starting Google sign-in process...");
      const provider = new GoogleAuthProvider();
      console.log("Provider created");
      
      const result = await signInWithPopup(auth, provider);
      console.log("Sign-in successful:", result.user);
      navigate('/account');
    } catch (error) {
      console.error("Detailed error:", {
        code: error.code,
        message: error.message,
        fullError: error
      });
      
      setError(`Sign-in error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please sign in to continue</p>

        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleEmailLogin}>
          <div className="form-group">
            <AiOutlineMail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <RiLockPasswordLine className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="google-button"
          disabled={isLoading}
        >
          <FcGoogle className="google-icon" />
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        <div className="login-footer">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login; 