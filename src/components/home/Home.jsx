import React from "react";
import "./Home.css";
import bgimg from "../../assets/bgimage.png";
import qr from "../../assets/qr.png";
import Nav from "../nav/Nav";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  const handlesignup = (e) => {
    e.preventDefault();
    navigate('login');
  }

  return (
    <>
      <Nav />
      <div className="main">
        <img src={bgimg} alt="" />
        <div className="mainbody">
          <div className="leftmain">
            <h1>
              Find the Next <br /> <span>Crypto Gem </span>
              on KuCoin
            </h1>
            <p>1 out of 4 Crypto Holders Worldwide Is with Kucoin</p>
            <form className="mainsignup">
              <input type="email" placeholder="Email/Phone Number" required/>
              <button onClick={handlesignup}>Sign Up Now</button>
            </form>
          </div>
          <div className="rightmain">
            <div className="qr">
              <p>Scan QR Code to Download App</p>
              <div className="qrcontainer">
                <img src={qr} alt="" />
              </div>
              <p className="viewmore">View More</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
