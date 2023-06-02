import React, { useState } from 'react';

const Dropdown = ({ title, subItems }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="dropdown-item" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
      {title}
      {dropdown && subItems.length > 0 && (
        <div className="dropdown-content">
          {subItems.map((item, index) => (
            <div key={index} className="dropdown-subitem">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
