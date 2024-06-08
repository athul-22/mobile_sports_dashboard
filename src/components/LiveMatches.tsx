import React from "react";
import Slider from "react-slick";
// import './LiveMatch.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../assets/LOGO1.png";
import Logo2 from "../assets/LOGO2.png";
import LIVE from "../assets/LIVE.png";
import "./LiveMatch.css";

const LiveMatches: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="live-match">
      <div className="header">
        <p style={{fontSize:'12px'}}>LIVE MATCHES</p>
        <span style={{fontSize:'12px'}}>See All</span>
      </div>
      <Slider {...settings}>
        <div className="card">
          <div className="card-header">
            <p style={{fontSize:'12px'}}>Champions League 24</p>
          </div>
          <div className="card-body">
            <div className="logo-left-content" style={{ marginTop: "10px" }}>
              <img
                src={Logo1}
                alt="Team Logo"
                className="team-logo left-logo"
              />
              <p className="team-name">TISB U15</p>
            </div>
            <div
              className="match-info"
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "-30px",
              }}
            >
              <p>
                <span style={{ fontSize: "40px", margin: "10px" }}>1</span>
                <span
                  style={{ fontSize: "17px", margin: "2px", color: "grey" }}
                >
                  Final
                </span>
                <span style={{ fontSize: "40px", margin: "10px" }}>0</span>
              </p>
              <div style={{display:'flex',justifyContent:'center',marginTop:'-20px'}}>
                <p
                  style={{
                    backgroundColor: "#d82020",
                    color: "white",
                    padding: "1px 2px",
                    width: "100px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    height:'20px'
                  }}
                >
                  <img
                    src={LIVE}
                    height="15px"
                    width="15px"
                    alt="Live Icon"
                    style={{ marginRight: "5px" }}
                  />
                  Live
                </p>
              </div>
            </div>

            <div className="logo-left-content" style={{ marginTop: "10px" }}>
              <img
                src={Logo2}
                alt="Team Logo"
                className="team-logo left-logo"
              />
              <p className="team-name">CIS U15</p>
            </div>
          </div>
        </div>

        {/* <div className="card"></div>

        <div className="card"></div> */}
      </Slider>
    </div>
  );
};

export default LiveMatches;
