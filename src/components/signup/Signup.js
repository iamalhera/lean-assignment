import React from 'react'
import "./signup.css";
import signin from "../../assets/signin.png";
import { MdiPhone } from '../../assets/icons';
const Signin = () => {
    return (
        <div className="app__signin flex-row">
            <div className="sign__left">
                <h4>Your Logo</h4>
                <div className="sign-form">
                    <h3>Sign up</h3>
                    <div className="sign-description">
                        <p>If you don't have an account register</p>
                        <p>You can <span className="highlighted-text">Login Here!</span></p>
                    </div>
                    <form className="signin-form flex-column">
                        <div className="form-section flex-column">
                            <label htmlFor="emai">Email</label>
                            <input className="active" type="text" placeholder="Enter your email address" />
                        </div>
                        <div className="form-section flex-column">
                            <label htmlFor="usename">Username</label>
                            <input type="text" placeholder="Enter your Username" />
                        </div>
                        <div className="form-section flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="passsword" placeholder="Enter Your Password" />
                        </div>
                        <div className="form-section flex-column">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="passsword" placeholder="Confirm Your Password" />
                        </div>
                        
                        <button className="primary-cta">Register</button>
                        
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
                        <h3>Sign up to name</h3>
                        <p>Lorem Ipsum is simply </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin