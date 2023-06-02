import React from "react";

const LeftContent = ({ data }) => {
  return (
    <div className="left-content">
      {data.map((post, index) => (
        <div data-aos="fade-right">
          <div key={index} className="boxcontainer">
            <div className="post-container">
              <div className="post-image">
                <img src={post.image} alt="Post Image" />
              </div>
              <div className="post-details">
                <h2>{post.title}</h2>
                <p>
                  {post.date} • {post.duration}
                </p>
                <p className="desc">{post.description}</p> {/* New line */}
                <div className="author">
                  <img src={post.image} alt="Author Image" />
                  <p>{post.author}</p>
                </div>
                <div className="continue-reading">
                  <button>Continue Reading</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftContent;
