import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer className="footer">
            <div className="footer-image">
                <div>
                <img src="./vector.png" alt="YOUT" className="footer-image1"/>
                <img src="./vector (1).png" alt="LOSS" className="footer-image2"/>
                </div>
                <div className="footer-logo">
                    <a href="facebook.com"><img src="./f.png" alt="one"/></a>
                    <a href="instagram.com"><img src="./insta.png" alt="two"/></a>
                    <a href="https://twitter.com/Pels_xx"><img src="./t.png " alt="three"/></a>
                </div>
                <p className="footer-para">
                    Ⓒ 2022 Metabnb
                </p>
            </div>
            <div className="footer-second">
                <Link className="foot">Community</Link>
                <Link className="foots">NFTs</Link>
                <Link className="foots">Tokkens</Link>
                <Link className="foots">Landlords</Link>
                <Link className="foots">Discord</Link>
                
            </div>

            <div className="footer-third">
            <Link className="foot">Places</Link>
                <Link className="foots">Castle</Link>
                <Link className="foots">Farms</Link>
                <Link className="foots">Beach</Link>
                <Link className="foots">Learn more</Link>

            </div>
            <div className="footer-fourth">
            <Link className="foot">About us</Link>
                <Link className="foots">Road map</Link>
                <Link className="foots">creators</Link>
                <Link className="foots">career</Link>
                <Link className="foots">Contact us</Link>



            </div>

        </footer>
    )
   
}
export default Footer;