import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightContent = ({ recentPosts }) => {
  return (
    <div className="right-content">
      <div className="recent-posts-heading">
        <h2>Recent Posts</h2>
        <span className="border"></span>
      </div>
      {recentPosts.map((post) => (
        <div key={post.id} className="recent-post">
          <div className="recent-post-image">
            <img src={post.image} alt="Recent Post Image" />
          </div>
          <div className="recent-post-details">
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </div>
        </div>
      ))}

      <div className="recent-posts-heading">
        <h2>Social</h2>
        <span className="border"></span>
      </div>
      <div className="social-icons">
        <div className="social-icon">
          <FaFacebook size={50} color="#3b5998" className="navbar-icon" />
        </div>
        <div className="social-icon">
          <FaTwitter size={50} color="#1DA1F2" className="navbar-icon" />
        </div>
        <div className="social-icon">
          <FaInstagram size={50} color="#E1306C" className="navbar-icon" />

        </div>
      </div>
    </div>
  );
};

export default RightContent;
