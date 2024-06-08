import React from 'react';
import './AppBar.css';
import UserIcon from '../assets/USER.png';
import FootBall from '../assets/FOOTBALL.png';
import DOWN from '../assets/DOWN.png'
import bell from '../assets/bell.png'
import NOTIFICATION from '../assets/NOTIFICATION.png'

const StaticAppBar: React.FC = () => {
    return (
        <header className="app-bar">
            <div className="left-section">
                <button className="icon-button" style={{ marginLeft: '' }}>
                    <div style={{ height: '50px', width: '50px', backgroundColor: '#2339aa', borderRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={UserIcon} alt="User Icon" style={{ height: '30px', width: '30px' }} />
                    </div>
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <span style={{ fontSize: '12px', marginBottom: '5px', marginLeft: '2px' }} className="app-title" >Type of sport</span>
                    <div style={{ display: 'flex' }}>
                        <img src={FootBall} height="20px" width="20px" alt='' />
                        <span style={{ fontWeight: 'bold' }} className="app-title">Football</span>
                        <img src={DOWN} height="20px" width="20px" style={{ marginLeft: '10px' }} alt='' />
                    </div>
                </div>
            </div>
            
            
            <div className="right-section" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',width:'100%',marginRight:'20px' }}>
                    <div style={{ height: '40px', width: '40px', backgroundColor: '#2339aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px' }}>
                        <img src={bell} alt="Bell Icon" style={{ height: '20px', width: '20px' }} />
                    </div>
                    <div style={{height: '40px', width: '40px', backgroundColor: '#2339aa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px' }}>
                        <img src={NOTIFICATION} alt="Notification Icon" style={{ height: '20px', width: '20px'}} />
                    </div>
            </div>
            
        </header>
    );
};

export default StaticAppBar;
