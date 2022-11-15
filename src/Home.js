import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
function Home() {
  return (
    <>
      <section>
        <Navbar />
        <div className="section">
          <div className="left">
            <p className="para-one">
              Rent a <span style={{ color: "#a02279" }}>Place</span> Away From{" "}
              <span style={{ color: "#a02279" }}>Home</span> in the{" "}
              <span style={{ color: "#a02279" }}>Metaverse</span>
            </p>
            <p className="para-two">
              We provide you with access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="form">
              <input
                type="text"
                value="search for location"
                className="input"
              />
              <input type="submit" value="search" className="submit" />
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img src="./image 4.png" alt="first" className="one" />
              <img src="./image 6.png" alt="first" className="one" />
            </div>
            <div className="right-image">
              <img src="./image 3.png" alt="first" className="one" />
              <img src="./image 5.png" alt="first" className="one" />
            </div>
          </div>
        </div>
        <div className="icons">
          <img src="./mb.svg" alt="two" className="mb" />
          <img src="./ml.svg" alt="two" className="ml" />
          <img src="./md.svg" alt="two" className="md" />
        </div>
      </section>
      <section>
        <p className="inspiration">Inspiration for your next adventure</p>
        <div className="image-gallery">
          <div className="image-box">
            <img src="./Group 4048 (1).png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4049 (1).png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4050 (2).png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4051 (1).png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4048.png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4049.png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4050 (1).png" className="main" alt="one" />
          </div>
          <div className="image-box">
            <img src="./Group 4051.png" className="main" alt="one" />
          </div>
        </div>
      </section>
      <section className="third">
        <div className="nft">
          <p className="bnb">Metabnb NFTs</p>
          <p className="meta">
            Discover our NFT gift card collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customers
            access to loads of our exclusive services
          </p>
          <div id="learn">
          <Link className="learn">Learn more</Link>
          </div>
          
        </div>
        <div className="nft-image">
          <img src="./10.png" alt="one" className="layer1" />
        </div>
        
      </section>
      <Footer />
    </>
  );
}
export default Home;
