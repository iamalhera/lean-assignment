import React from 'react';
import logo from "../../assets/logo.png";
import { MdiEmailFast } from '../../assets/icons';
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import Vector from "../../assets/Vector.png";
import twitter from "../../assets/twitter.png";
import Envato from "../../assets/Envato.png";
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app__footer-upper flex-row">
                <div className="footer__upper-left">
                    <h1>Ready to launch <br />your next website?</h1>
                </div>
                <div className="footer__upper-right">
                    <div className="touch-button">
                        <MdiEmailFast />
                        <label> Get in touch now </label>
                    </div>
                    <p>Or, take a peek inside our <span className="highlighted-yellow">design studio</span></p>
                </div>
            </div>
            <div className="app__footer-lower flex-column">
                <div className="footer-lower-top flex-row">
                    <div className="lower-section-4 flex-column">
                        <img className="logo" src={logo} alt="logo" />
                        <p>Digits is a website template built to<br /> work seamlesly with the WordPress<br /> block editor to create beautifully<br /> designed pages in minutes.</p>
                    </div>
                    <div className="lower-section-4 flex-column">
                        <Link className="first-link">Pages</Link>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>News</Link>
                        <Link>Pricing</Link>
                        <Link>Contact</Link>
                    </div>
                    <div className="lower-section-4 flex-column">
                        <Link className="first-link">Demos</Link>
                        <Link>Classic</Link>
                        <Link>Boxy</Link>
                        <Link>Gradient</Link>
                        <Link>Minimal</Link>
                        <Link>Night</Link>
                    </div>
                    <div className="lower-section-4 flex-column">
                        <Link className="first-link">Resources</Link>
                        <div className="social-icons-panel">
                            <div className="social-link-5">
                                <img src={fb} alt="social" />
                            </div>
                            <div className="social-link-5">
                                <img src={ig} alt="social" />
                            </div>
                            <div className="social-link-5">
                                <img src={twitter} alt="social" />
                            </div>
                            <div className="social-link-5">
                                <img src={Vector} alt="social" />
                            </div>
                            <div className="social-link-5">
                                <img src={Envato} alt="social" />
                            </div>
                        </div>
                        <Link>Download Now</Link>
                        <Link>Documentation</Link>
                    </div>
                </div>
                <div className="footer-lower-bottom flex-row">
                    <p>Copyright © 2020 tempy.club</p>
                    <div className="bottom-links">
                        <Link>Privacy Policy</Link>
                        <Link>Terms of Use</Link>
                        <Link>GDPR</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer