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
            <h5>■ BECOME A <br /> PRO-DESIGNER</h5>
          </div>
          <div className="heroFraction fractionTwo">
            <img style={{ 'height': '80vh' }} src="https://i.imgur.com/kW00Dc0.png" alt="developer" />
          </div>
          <div className="heroFraction fractionThree">
            <div className="year">EDITION <br /> 2023</div>
            <h4>START GUIDE FOR BEGINNER <br /> DESIGNER</h4>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, delectus nihil dolores nobis. </p>
            <br />
            <div>
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>LET'S START</button>
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#171717', 'width': '95px' }}>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="heroBase">
          <h5> <span className="firtsLetter"> <span className="plus">+</span>150 </span> <span className="thinText">HAPPY</span> STUDENTS</h5>
          <h5> <span className="firtsLetter"> <span className="plus">+</span>50 </span> <span className="thinText">CERTIDIED</span> COURSES</h5>
          <h5> <span className="firtsLetter"> <span className="plus">+</span>1000 </span> <span className="thinText">AWARDS</span> RECEIVED</h5>
        </div>
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
