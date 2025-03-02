import React from 'react';
import Slider from 'react-slick';
import './UpcomingMatch.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from '../assets/LOGO1.png';
import Logo2 from '../assets/LOGO2.png';


const UpcomingMatch: React.FC = () => {
    const settings = {
        dots: true, 
        arrows: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="upcoming-match">
      <div className="header">
        <p style={{fontSize:'12px'}}>UPCOMING MATCHES</p>
        <span style={{fontSize:'12px'}}>See All</span>
      </div>
      <Slider {...settings}>

      <div className="card">
          <div className="card-header" >
            <p style={{fontSize:'12px'}}>U15 Champion League</p>
          </div>
          <div className="card-body">
            <div className='logo-left-content'>
                <img src={Logo1} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>TISB U15</p>
            </div>
            <div className="match-info" style={{ display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <p style={{ color: 'red', fontSize: '12px',marginTop:'-30px'}}>04:00 PM</p>
                <p style={{ marginTop: '-6px', fontSize: '12px', color: 'grey' }}>4th Apr</p>
                <p style={{marginTop:"-5px",fontSize: '12px', color: '#b79900', backgroundColor: '#fefbdd', padding: '6px, 8px, 6px, 8px', borderRadius: '20px', display: 'inline-block' ,height:'20px',width:'80px',paddingTop:'4px'}}>7-A-SIDE</p>
                <p style={{color: 'grey', fontSize: '12px' ,marginTop:"-10px"}}>TISB Basketball Court</p>
            </div>

            <div className='logo-left-content'>
                <img src={Logo2} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>CIS U15</p>
            </div>
          </div>
        </div>
       

        <div className="card">
          <div className="card-header" >
            <p style={{fontSize:'12px'}}>U15 Champion League</p>
          </div>
          <div className="card-body">
            <div className='logo-left-content'>
                <img src={Logo1} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>TISB U15</p>
            </div>
            <div className="match-info" style={{ display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <p style={{ color: 'red', fontSize: '12px',marginTop:'-30px'}}>04:00 PM</p>
                <p style={{ marginTop: '-6px', fontSize: '12px', color: 'grey' }}>4th Apr</p>
                <p style={{marginTop:"-5px",fontSize: '12px', color: '#b79900', backgroundColor: '#fefbdd', padding: '6px, 8px, 6px, 8px', borderRadius: '20px', display: 'inline-block' }}>7-A-SIDE</p>
                <p style={{color: 'grey', fontSize: '12px' ,marginTop:"-10px"}}>TISB Basketball Court</p>
            </div>

            <div className='logo-left-content'>
                <img src={Logo2} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>CIS U15</p>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-header" >
            <p style={{fontSize:'12px'}}>U15 Champion League</p>
          </div>
          <div className="card-body">
            <div className='logo-left-content'>
                <img src={Logo1} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>TISB U15</p>
            </div>
            <div className="match-info" style={{ display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <p style={{ color: 'red', fontSize: '12px',marginTop:'-30px'}}>04:00 PM</p>
                <p style={{ marginTop: '-6px', fontSize: '12px', color: 'grey' }}>4th Apr</p>
                <p style={{marginTop:"-5px",fontSize: '12px', color: '#b79900', backgroundColor: '#fefbdd', padding: '6px, 8px, 6px, 8px', borderRadius: '20px', display: 'inline-block' }}>7-A-SIDE</p>
                <p style={{color: 'grey', fontSize: '12px' ,marginTop:"-10px"}}>TISB Basketball Court</p>
            </div>

            <div className='logo-left-content'>
                <img src={Logo2} alt="Team Logo" className="team-logo left-logo" />
                <p className='team-name'>CIS U15</p>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default UpcomingMatch;
