import React, { useState } from 'react';
import './BottomNax.css';
import { FaHome, FaListUl, FaPlusCircle, FaTv, FaBook } from 'react-icons/fa';

const BottomNav: React.FC = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${active === 'home' ? 'active' : ''}`}
        onClick={() => setActive('home')}
      >
        <FaHome className="nav-icon" />
        <p>Home</p>
      </div>
      <div 
        className={`nav-item ${active === 'matches' ? 'active' : ''}`}
        onClick={() => setActive('matches')}
      >
        <FaListUl className="nav-icon" />
        <p>Matches</p>
      </div>
      <div 
        className={`nav-item ${active === 'add' ? 'active' : ''}`}
        onClick={() => setActive('add')}
      >
        <FaPlusCircle className="nav-icon" />
        <p>Add</p>
      </div>
      <div 
        className={`nav-item ${active === 'live' ? 'active' : ''}`}
        onClick={() => setActive('live')}
      >
        <FaTv className="nav-icon" />
        <p>Live</p>
      </div>
      <div 
        className={`nav-item ${active === 'syllabus' ? 'active' : ''}`}
        onClick={() => setActive('syllabus')}
      >
        <FaBook className="nav-icon" />
        <p>Syllabus</p>
      </div>
    </div>
  );
};

export default BottomNav;
