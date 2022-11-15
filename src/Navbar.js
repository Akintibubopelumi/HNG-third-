import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-image">
        <img src="./image1.png" alt="Navigation" className="image1" />
        <img src="./image2.png" alt="Nav2" className="image2" />
      </div>
      <div className="nav-links">
        <Link className="link" to={"/"}>
          HOME
        </Link>
        <Link className="link" to={"/place"}>
          PLACE TO STAY
        </Link>
        <Link className="link">NFT</Link>
        <Link className="link">COMMUNITY</Link>
      </div>
      <div className="connect">
        <Link className="wallet">Connect Wallet</Link>
      </div>
      {/* A JSX comment 
      <div id="popup">
        <h3 className="popup-head">Connect Wallet</h3>
        <p className="popup-para">Choose yout preferred wallet</p>
        <button className="metamask">
          <img src="image 66.png" alt="metamask" />
          Metamask
        </button>
        <button className="Walletconnect">
          <img src="image 69.png" alt="wallet" />
          Wallet Connect
        </button>
      </div>
      */}
      
    </div>
  );
}
export default Navbar;
