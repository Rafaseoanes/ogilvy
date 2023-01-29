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
        <button style={{ 'height': '25px', 'border': 'none', 'backgroundColor': 'white', 'width': '75px' }} >SIGN IN</button>
      </div>
      <div className="section "></div>
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
