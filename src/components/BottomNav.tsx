import React, { useState } from 'react';
import './BottomNax.css';
import Home from '../assets/HOE.png';
import CuP from '../assets/CUP.png';
import Add from '../assets/ADD.png';
import Live from '../assets/LIVE.png';
import Syllabus from '../assets/BOOK.png';

const BottomNav: React.FC = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${active === 'home' ? 'active' : ''}`}
        onClick={() => setActive('home')}
      >
        <img src={Home} alt="Home" className="nav-icon" />
        <p>Home</p>
      </div>
      <div 
        className={`nav-item ${active === 'matches' ? 'active' : ''}`}
        onClick={() => setActive('matches')}
      >
        <img src={CuP} alt="Matches" className="nav-icon" />
        <p>Matches</p>
      </div>
      <div 
        className={`nav-item ${active === 'add' ? 'active' : ''}`}
        onClick={() => setActive('add')}
      >
        <img src={Add} alt="Add" className="nav-icon" />
        <p>Add</p>
      </div>
      <div 
        className={`nav-item ${active === 'live' ? 'active' : ''}`}
        onClick={() => setActive('live')}
      >
        <img src={Live} alt="Live" className="nav-icon" />
        <p>Live</p>
      </div>
      <div 
        className={`nav-item ${active === 'syllabus' ? 'active' : ''}`}
        onClick={() => setActive('syllabus')}
      >
        <img src={Syllabus} alt="Syllabus" className="nav-icon" />
        <p>Syllabus</p>
      </div>
    </div>
  );
};

export default BottomNav;
