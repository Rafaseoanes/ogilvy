import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]
  };
  const [enteredText, setEnteredText] = useState();
  const sendMessage = () => {
    alert("Message sent");
    setEnteredText('');
  }
  return (
    <div>
      <div className="navbar">
        <img style={{ 'height': '30px' }} src="https://i.imgur.com/dGpH2Gr.png" alt="Ogilvy logo" />
        <div className="topList">
          <li>
            <ul>HOME</ul>
            <ul> <a href="#about">ABOUT</a></ul>
            <ul> <a href="#courses">COURSES</a></ul>
            <ul> <a href="#blog">BLOG</a></ul>
          </li>
        </div>
        <button style={{ 'height': '22px', 'border': 'none', 'backgroundColor': 'white', 'width': '75px' }} >SIGN IN</button>
      </div>
      <div className="section">
        <div className="hero">
          <div className="heroFraction fractionOne">
            <h3 className="uiText">UI<span className="uiPoint">.</span></h3>
            <h4 className="beginnerText">BEGINNER'<span className="beginnerS">s</span></h4>
            <h5 className="slogan">■ BECOME A <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PRO-DESIGNER</h5>
          </div>
          <div className="heroFraction fractionTwo">
            <img id="heroImage" style={{ 'height': '80vh' }} src="https://i.imgur.com/kW00Dc0.png" alt="developer" />
          </div>
          <div className="heroFraction fractionThree">
            <div className="year">EDITION <br /> 2023</div>
            <h4>START GUIDE FOR BEGINNER <br /> DESIGNER</h4>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, delectus nihil dolores nobis. </p>
            <br />
            <div>
              <button style={{ 'height': '35px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '125px' }}>LET'S START</button>
              <button style={{ 'height': '35px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#171717', 'width': '125px' }}>READ MORE</button>
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
          <div className="infoHide"  >
            <div style={{ 'marginRight': '10px' }}><h5 style={{ 'fontSize': '45px' }}> <span className="plus">+</span>1000</h5></div>
            <div><h5 style={{ 'textAlign': 'left' }}><span className="thinText">AWARDS</span> <br /> RECEIVED</h5></div>
          </div>
        </div>
      </div>
      <div className="section ">
        <div className="skills">
          <h4 className="skillsRight">■ &nbsp;&nbsp;DISCOVER YOUR SKILLS</h4>
          <div className="skillsCenter">
            <h2 style={{ 'textAlign': 'center', 'fontSize': '60px'}}>ACCEPT <br /> <span className="thinText">NEW</span> <br /> CHALLENGES</h2>
            <img id="atomShape" src="https://i.imgur.com/NumISy0.png" alt="shapes" />
          </div>
          <h4 className="skillsLeft">■ &nbsp;&nbsp;DISCOVER YOUR SKILLS</h4>
        </div>
        <div className="skillsAbout">
          <h2>EXPLORE</h2>
          <h2>ABOUT</h2>
        </div>
      </div>
      <div id="courses" className="section ">
        <div className="coursesTitle">
          <h5><span style={{ 'fontSize': '65px', 'fontWeight': '700' }}>FIND </span > <span style={{ 'fontSize': '25px', 'fontWeight': '300', 'letterSpacing': '4px' }}> Your Course.</span></h5>
          <h5 id="coursesYear">■ <span style={{ 'fontSize': '10px', 'fontWeight': '300' }}> EDITION</span><br /><span>&nbsp;&nbsp;&nbsp;2023</span></h5>
        </div>

        {/* carrousel */}
        <div style={{ 'textAlign': 'center', 'padding': '65px 150px 30px 150px' }}>
          <Slider {...settings}>

            <div className="carrouselCard">
              <div className="cornerNumber">.01</div>
              <h3>COURSE <span className="uiPoint">01</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>



            <div className="carrouselCard">
              <div className="cornerNumber">.02</div>
              <h3>COURSE <span className="uiPoint">02</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>

            <div className="carrouselCard">
              <div className="cornerNumber">.03</div>
              <h3>COURSE <span className="uiPoint">03</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>

            <div className="carrouselCard">
              <div className="cornerNumber">.04</div>
              <h3>COURSE <span className="uiPoint">04</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>

            <div className="carrouselCard">
              <div className="cornerNumber">.05</div>
              <h3>COURSE <span className="uiPoint">05</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>

            <div className="carrouselCard">
              <div className="cornerNumber">.06</div>
              <h3>COURSE <span className="uiPoint">06</span></h3>
              <p style={{ 'color': '#a460f9', 'fontWeight': '700' }}>_____</p>

              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus facilis asperiores? Corporis fugiat.</p>

              <br />
              <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>
            </div>

          </Slider>
        </div>
        <br />
        <br />
        <h6 style={{ 'textAlign': 'center' }}>MORE COURSES &nbsp; &nbsp; &nbsp;<span style={{ 'fontSize': '40px', 'fontWeight': '300' }}>&#10230;</span></h6>
      </div>
      <div id="about" className="section ">
        <div className="aboutUs">
          <div>
            <h5 style={{ 'fontSize': '60px' }} >About <span style={{ 'fontWeight': '300' }} className="uiPoint">us.</span></h5>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel soluta ex quae ut, commodi corporis debitis a nobis provident consequatur qui, error doloribus impedit tempora sint alias aliquam. Quia.</p>
            <ul>
              <li> <span style={{ 'color': '#a460f9' }}>■</span> Lorem ipsum dolor.</li>
              <li> <span style={{ 'color': '#a460f9' }}>■</span> Lorem ipsum dolor.</li>
              <li> <span style={{ 'color': '#a460f9' }}>■</span> Lorem ipsum dolor.</li>
              <li> <span style={{ 'color': '#a460f9' }}>■</span> Lorem ipsum dolor.</li>

            </ul>
            <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>

          </div>
          <div className="aboutImage" >
            <img src="https://i.imgur.com/lcaJA7U.png" alt="about" />
          </div>
        </div>
      </div>
      <div className="section ">
        <div className="aboutUs">
          <div id="whyImage">
            <img src="https://i.imgur.com/IxKFaZV.png" alt="about" />
          </div>
          <div>
            <h5 style={{ 'fontSize': '60px' }} >Why <span style={{ 'fontWeight': '300' }} className="uiPoint">us.</span></h5>
            <br />
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel soluta ex quae ut, commodi corporis debitis a nobis provident consequatur qui, error doloribus impedit tempora sint alias aliquam. Quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa corporis natus temporibus est veniam esse nesciunt! Assumenda, quaerat tempora repellendus, ipsum ipsam sequi hic minima eligendi, suscipit sunt corporis!</p>
            <br />
            <br />
            <br />
            <button style={{ 'height': '32px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '95px' }}>READ MORE</button>

          </div>

        </div>
      </div>
      <div className="section videoSection">
        <h5 style={{ 'lineHeight': '17px' }} className="skillsLeft"> <span style={{ 'fontSize': '40px', 'fontWeight': '300' }}> &#10230; </span> READY TO <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; GET STARTED</h5>
        <div className="videoFrame">
          <iframe className="video" src="https://www.youtube.com/embed/v6EjmbMgv80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h5 style={{ 'lineHeight': '17px' }} className="skillsRight"> <span style={{ 'fontSize': '40px', 'fontWeight': '300' }}>&#10230; </span> READY TO <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  GET STARTED</h5>
      </div>
      <div id="blog" className="section ">
        <div className="aboutUs">
          <div className="aboutImage">
            <img style={{ 'width': '50vw', 'position': 'relative', 'left': '-200px', 'bottom': '-70px' }} src="https://i.imgur.com/Bd4ANxi.png" alt="about" />
          </div>
          <div style={{ 'textAlign': 'center' }}>
            <h5 style={{ 'fontSize': '50px', 'textAlign': 'center', 'fontWeight': '700' }} >SUBSCRIBE <br /><span style={{ 'fontSize': '45px', 'fontWeight': '300' }} className="uiPoint">to our newsletter</span></h5>
            <br />
            <input value={enteredText} style={{ 'margin': '15px', 'padding': '15px', 'width': '65%', 'border': 'solid 2px #a460f9', 'backgroundColor': '#171717', 'color': 'white' }} type="text" placeholder="NAME" />
            <br />
            <input value={enteredText} style={{ 'margin': '15px', 'padding': '15px', 'width': '65%', 'border': 'solid 2px #a460f9', 'backgroundColor': '#171717', 'color': 'white' }} type="text" placeholder="MAIL" />
            <br />
            {/* <input style={{ 'margin': '10px', 'padding': '15px', 'width': '60%', 'height': '30%', 'border': 'solid 2px #a460f9', 'backgroundColor': '#171717', 'color': 'white' }} type="text" placeholder="MESSAGE" /> */}
            <textarea value={enteredText} style={{ 'margin': '15px', 'padding': '15px', 'width': '65%', 'height': '30%', 'border': 'solid 2px #a460f9', 'backgroundColor': '#171717', 'color': 'white' }} placeholder="MESSAGE"></textarea>
            <br />

            <button onClick={sendMessage} style={{ 'height': '35px', 'margin': '5px', 'color': 'white', 'border': 'none', 'backgroundColor': '#a460f9', 'width': '165px' }}>SEND MESSAGE</button>

          </div>

        </div>
      </div>
      <div className="footer">
        <div>
          <ul style={{ 'listStyle': 'none' }}>
            <h5 style={{ 'fontSize': '23px', 'borderBottom': '2px solid white', 'marginBottom': '15px' }}>About</h5>
            <li>History</li>
            <li>Our team</li>
            <li>Mission statement</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <br className="footerBreak" />
        <div>
          <ul style={{ 'listStyle': 'none' }}>
            <h5 style={{ 'fontSize': '23px', 'borderBottom': '2px solid white', 'marginBottom': '15px' }}>What we do</h5>
            <li>News and stories</li>
            <li>Publications</li>
            <li>Take action</li>
            <li>Recomandations</li>
            <li>Help</li>
          </ul>
        </div>
        <br className="footerBreak" />
        <div style={{'textAlign': 'right'}}>
          <h5 style={{ 'fontSize': '30px', 'textAlign': 'right', 'fontWeight': '700' }} >Sign Up To Receive <br /> __ Our Newsletter</h5>
          <br />
          <input value={enteredText} style={{ 'margin': '15px 0px', 'padding': '10px', 'width': '65%', 'border': 'solid 2px white', 'backgroundColor': '#a460f9', 'color': 'white' }} type="text"/>
          <br />
          <div style={{'display': 'flex', 'alignItems': 'center','justifyContent': 'right'}}>

          <h6 style={{'fontWeight': '300'}}>Follow us!</h6>
          <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-circle.png" alt="icon" style={{'margin': '0 15px'}} />
          <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-circled--v1.png" alt="icon" style={{'margin': '0 15px'}} />
          <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/youtube-play.png" alt="icon" style={{'margin': '0 0 0 15px'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
