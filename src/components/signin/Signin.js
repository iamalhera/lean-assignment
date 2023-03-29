import React from 'react'
import "./signin.css";
import signin from "../../assets/signin.png";
import { LogosApple, LogosFacebook, LogosGoogleIcon, MdiPhone } from '../../assets/icons';
const Signin = () => {
    return (
        <div className="app__signin flex-row">
            <div className="sign__left">
                <h4>Your Logo</h4>
                <div className="sign-form">
                    <h3>Sign in</h3>
                    <div className="sign-description">
                        <p>If you don't have an account register</p>
                        <p>You can <span className="highlighted-text">Register Here!</span></p>
                    </div>
                    <form className="signin-form flex-column">
                        <div className="form-section flex-column">
                            <label htmlFor="emai">Email</label>
                            <input className="active" type="text" placeholder="Enter your email address" />
                        </div>
                        <div className="form-section flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="passsword" placeholder="Enter Your Password" />
                        </div>
                        <div className="form-section-2 flex-row-center">
                            <label className="checkbox">
                                <input type="checkbox" name="Remember me" />
                                Remember Me
                            </label>
                            <label className="f-pwd">Forgot Password ?</label>
                        </div>
                        <button className="primary-cta">Login</button>
                        <label className="gray-text">or continue with</label>
                        <div className="social-icons-panel">
                            <div className="social-icon">
                                <LogosFacebook />
                            </div>
                            <div className="social-icon">
                                <LogosApple />
                            </div>
                            <div className="social-icon">
                                <LogosGoogleIcon />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="sign__right">
                <div className="sign-right-container flex-column">
                    <div className="right-top">
                        <MdiPhone />
                        <label>+94 0116 789 754</label>
                    </div>
                    <div className="right-middle flex-row-center">
                        <img src={signin} alt="signin-logo" />
                    </div>
                    <div className="right-bottom">
                        <h3>Sign in to name</h3>
                        <p>Lorem Ipsum is simply </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin