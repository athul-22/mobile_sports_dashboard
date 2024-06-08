import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBarTop from "./components/AppBar";
import Banner from "./components/Banner";
import UpcomingMatch from "./components/Upcoming_Match";
import LiveMatches from "./components/LiveMatches";
import Teams from "./components/Teams";
import BottomNav from "./components/BottomNav";
import Greetings from './components/Greetings'
import GradientText from "./components/GradientText";
import Analysis from "./components/Analysis";

function App() {
  return (
    <div className="App">
      
      <AppBarTop />
      <Greetings/>
      <div style={{ clear: 'both' }}></div>
      <Analysis/>
      {/* <Banner/> */}
      <UpcomingMatch />
      <LiveMatches />
      <Teams/>
      <BottomNav/>
      <GradientText/>
      <div style={{ height:'50px'}}></div>
    </div>
  );
}

export default App;
