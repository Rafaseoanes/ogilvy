import React from "react";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <img style={{ 'height': '30px' }} src="https://i.imgur.com/dGpH2Gr.png" alt="Ogilvy logo" />
        <div className="topList">
          <li>
            <ul>HOME</ul>
            <ul>ABOUT</ul>
            <ul>COURSES</ul>
            <ul>BLOG</ul>
          </li>
        </div>
        <button style={{ 'height': '22px', 'border': 'none', 'backgroundColor': 'white', 'width': '75px' }} >SIGN IN</button>
      </div>
      <div className="section">
        <div className="hero">
        <div className="heroFraction fractionOne">
          <h3 className="uiText">UI<span className="uiPoint">.</span></h3>
          <h4 className="beginnerText">BEGINNER'<span className="beginnerS">s</span></h4>
          <h5>• BECOME A PRO-DESIGNER</h5>
        </div>
        <div className="heroFraction"></div>
        <div className="heroFraction"></div>
        </div>
        <div className="heroBase"></div>
      </div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="footer "></div>
    </div>
  );
};

export default App;
