import React from 'react';
import './Teams.css';
import CLUB1 from '../assets/CLUB1.png';
import CLUB2 from '../assets/CLUB2.png';

const Teams: React.FC = () => {
  return (
    <div className="teams-section-new">
      <div className="header-new">
        <p>FOOTBALL TEAMS</p>
        <span>See All</span>
      </div>
      <div className="teams-container-new">
        <div className="card-new">
          <div className="card-body-new">
            <div className='logo-left-content-new'>
              <img src={CLUB1} alt="Team Logo" className="team-logo-new" />
            </div>
            <div className="team-info-new" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '16px' }}>TISB</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Champions</p>
              <p style={{ fontSize: '12px', color: 'grey' }}>15 Players</p>
            </div>
          </div>
        </div>

        <div className="card-new">
          <div className="card-body-new">
            <div className='logo-left-content-new'>
              <img src={CLUB1} alt="Team Logo" className="team-logo-new" />
            </div>
            <div className="team-info-new" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '16px' }}>TISB</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Champions</p>
              <p style={{ fontSize: '12px', color: 'grey' }}>15 Players</p>
            </div>
          </div>
        </div>

        <div className="card-new">
          <div className="card-body-new">
            <div className='logo-left-content-new'>
              <img src={CLUB1} alt="Team Logo" className="team-logo-new" />
            </div>
            <div className="team-info-new" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '16px' }}>TISB</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Champions</p>
              <p style={{ fontSize: '12px', color: 'grey' }}>15 Players</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
