import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBarTop from "./components/AppBar";
import Banner from "./components/Banner";
import UpcomingMatch from "./components/Upcoming_Match";
import LiveMatches from "./components/LiveMatches";
import Teams from "./components/Teams";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      
      <AppBarTop />
      <Banner/>
      <UpcomingMatch />
      <LiveMatches />
      <Teams/>
      <BottomNav/>
    </div>
  );
}

export default App;
