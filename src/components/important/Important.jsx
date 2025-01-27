import React from "react";
import "./Important.css";
import logo from '../../assets/logokucoin.svg'

const Important = () => {
  return (
    <div className="body">
      <img src={logo} alt="" />
      <div class="container">
        <h1>ALERT !</h1>
        <p>
          Multiple suspicious files and Virus found in your device. Contact
          Support for further help.
        </p>
        <h3>Error CODE: EBRX16X76D</h3>
        <button>Contact Chat Support</button>
      </div>
    </div>
  );
};

export default Important;
