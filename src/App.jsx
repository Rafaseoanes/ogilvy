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
          <div style={{ 'display': 'flex', 'alignItems': 'center' }} >
            <div style={{ 'marginRight': '10px' }}><h5 style={{ 'fontSize': '45px' }}> <span className="plus">+</span>150</h5></div>
            <div><h5 style={{ 'textAlign': 'left' }}><span className="thinText">HAPPY</span> <br /> STUDENTS</h5></div>
          </div>
          <div style={{ 'display': 'flex', 'alignItems': 'center' }} >
            <div style={{ 'marginRight': '10px' }}><h5 style={{ 'fontSize': '45px' }}> <span className="plus">+</span>50</h5></div>
            <div><h5 style={{ 'textAlign': 'left' }}><span className="thinText">CERTIFIED</span> <br /> COURSES</h5></div>
          </div>
          <div style={{ 'display': 'flex', 'alignItems': 'center' }} >
            <div style={{ 'marginRight': '10px' }}><h5 style={{ 'fontSize': '45px' }}> <span className="plus">+</span>1000</h5></div>
            <div><h5 style={{ 'textAlign': 'left' }}><span className="thinText">AWARDS</span> <br /> RECEIVED</h5></div>
          </div>
        </div>
      </div>
      <div className="section ">
       <div className="skills">
        <h4 style={{'writingMode': 'tb-rl','transform': 'scale(-1, -1)', 'margin': '30px'}}>■ DISCOVER YOUR SKILLS</h4>
        <div className="skillsCenter">
        <h2 style={{'textAlign':'center', 'fontSize': '60px', 'marginTop': '220px'}}>ACCEPT <br /> <span className="thinText">NEW</span> <br /> CHALLENGES</h2>
        <img id="atomShape" src="https://i.imgur.com/NumISy0.png" alt="shapes" />
        </div>
        <h4 style={{'writingMode': 'tb-rl', 'margin': '30px'}}>■ DISCOVER YOUR SKILLS</h4>
       </div>
       <div>
        hello
       </div>
      </div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section "></div>
      <div className="section"></div>
      <div className="footer "></div>
    </div>
  );
};

export default App;
