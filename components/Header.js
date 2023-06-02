import React from 'react';
import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa';
import Dropdown from './functionalities/Dropdown';

const Header = () => {
  const menuItems = [
    { title: 'Home', subItems: [' 1', ' 2', ' 3'] },
    { title: 'Header Styles', subItems: ['Subitem 1', 'Subitem 2'] },
    { title: 'Post Features', subItems: ['Subitem 1', 'Subitem 2', 'Subitem 3', 'Subitem 4'] },
    { title: '#Tag', subItems: ['#tag1', '#tag2'] },
    { title: 'Author', subItems: [] },
    { title: 'Features', subItems: ['Subitem 1', 'Subitem 2', 'Subitem 3'] },
    { title: 'Contact', subItems: [] },
  ];

  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
          <FaFacebook size={30} color="#3b5998" className="navbar-icon" />
          <FaTwitter size={30} color="#1DA1F2" className="navbar-icon" />
          <FaInstagram size={30} color="#E1306C" className="navbar-icon" />
        </div>
        <div className="navbar-middle">
          <h1 >Rohit Yadav</h1>
        </div>
        <div className='extend'>
        <div className="navbar-right">

          <FaSearch size={20} color="#f9f9fe" />
        </div>
        </div> 
      </div>
      <div className="dropdown-box">
        {menuItems.map((menuItem, index) => (
          <Dropdown key={index} title={menuItem.title} subItems={menuItem.subItems} />
        ))}
      </div>
    </header>
  );
};

export default Header;
