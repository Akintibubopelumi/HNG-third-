import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
function Place() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="link-space">
        <Link className="place-links">Restaurant</Link>
        <Link className="place-links">Cottage</Link>
        <Link className="place-links">Castle</Link>
        <Link className="place-links">Fantasy City</Link>
        <Link className="place-links">Beach</Link>
        <Link className="place-links">Carbins</Link>
        <Link className="place-links">Off-grid</Link>
        <Link className="place-links">Farm</Link>
        </div>
        <div className="location">
            <Link className="location-para">Location</Link>
            <img src="setting-5.png" alt="three" className="location-image"/>
            </div>
      </div>
      <div className="image-gallery">
      <div className="image-box">
        <img src="one.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="two.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="three.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="four.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="five.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="six.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="seven.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="eight.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="nine.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="ten.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="eleven.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="twelve.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="thirteen.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="fourteen.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="fifteen.png" className="main" alt="number" />
        </div>
        <div className="image-box">
        <img src="sixteen.png" className="main" alt="number" />
        </div>
      </div>
      <Footer />


    </section>
  );
}
export default Place;
