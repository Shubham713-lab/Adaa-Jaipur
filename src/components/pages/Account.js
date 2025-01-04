import React from 'react';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping, AiOutlineSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const Account = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="account-container">
      <div className="account-box">
        <div className="user-info">
          <img 
            src={user?.photoURL || 'https://via.placeholder.com/100'} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="user-details">
            <h2>{user?.displayName || 'User'}</h2>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className="account-sections">
          <button className="account-section">
            <AiOutlineShopping className="section-icon" />
            <span>My Orders</span>
          </button>
          <button className="account-section">
            <AiOutlineHeart className="section-icon" />
            <span>Wishlist</span>
          </button>
          <button className="account-section">
            <AiOutlineUser className="section-icon" />
            <span>Profile</span>
          </button>
          <button className="account-section">
            <AiOutlineSetting className="section-icon" />
            <span>Settings</span>
          </button>
        </div>

        <button onClick={handleLogout} className="logout-button">
          <BiLogOut className="logout-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account; 