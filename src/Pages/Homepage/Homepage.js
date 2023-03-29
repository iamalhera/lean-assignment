import React from 'react';
import netflix from "../../assets/netflix.png";
import drawkit from "../../assets/drawkit.png";
import figma from "../../assets/figma.png";
import cinemax from "../../assets/cinemax.png";
import stripe from "../../assets/stripe.png";
import google from "../../assets/google.png";
import disney from "../../assets/disney.png";
import Footer from '../../components/footer/Footer';
import "./Homepage.css";
import homepage_img1 from "../../assets/homepage_img1.png";
import homepage_img2 from "../../assets/homepage_img2.png";
import homepage_img3 from "../../assets/homepage_img3.png";
import design from "../../assets/design.png";
import fast from "../../assets/fast.png";
import easy from "../../assets/easy.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const Homepage = () => {
  return (
    <div className="app__homepage">
      <div className="homepage__section-off-white">
        <div className="hero-section">
          <h1>Good design meets <br /> great user experience</h1>
          <p>For everyone, from beginners to experts</p>
          <div className="button-panel">
            <button className="primary-cta">Buy Digits</button>
            <button className="secondary-cta">See the Feautures</button>
          </div>
          <img src={homepage_img1} alt="hero" />
          <p>Trusted by forward-thinking software teams around the world</p>
          <div className="img-panel">
            <img src={netflix} alt="panel" />
            <img src={drawkit} alt="panel" />
            <img src={figma} alt="panel" />
            <img src={cinemax} alt="panel" />
            <img src={stripe} alt="panel" />
            <img src={google} alt="panel" />
            <img src={disney} alt="panel" />
          </div>
        </div>
      </div>
      <div className="homepage__section-white">
        <h1>Whatever work you do, <br /> we're able to help</h1>
        <div className="container-2">
          <div className="hero-2-left">
            <img src={homepage_img2} alt="hero" />
          </div>
          <div className="hero-2-right">
            <article className="card">
              <img src={design} alt="card" />
              <div className="card-desc">
                <h3>Design and Assets</h3>
                <p>Make your brand stand out with pixel-perfect design crafted to perfection.</p>
              </div>
            </article>
            <hr />
            <article className="card">
              <img src={easy} alt="card" />
              <div className="card-desc">
                <h3>Easy Content</h3>
                <p>Import your demos or build pages visually. Bonus: All images and illustrations included!</p>
              </div>
            </article>
            <hr />
            <article className="card">
              <img src={fast} alt="card" />
              <div className="card-desc">
                <h3>Fat and Reliable</h3>
                <p>No heavy-weight plugins. No builders. No unneccesary file loading. Pure WordPress.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="homepage__section-cream">
        <h1>Simplicity meets innovative design</h1>
        <p>It's really easy to start using Digits.<br />
          Install the theme, choose a demo and<br />
          start designing the future of your business!</p>
        <div className="button-box">
          <button className="primary-cta">
            Buy Digits
          </button>
        </div>
        <img src={homepage_img3} alt="pictures" />
      </div>
      <div className="homepage__section-white-2">
        <h1>What others are saying</h1>
        <div className="article-cards">
          <section className="user-card">
            <p>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</p>
            <div className="user-detail">
              <img src={user1} alt="user1" />
              <h6>Happy User</h6>
              <p>tempy.club</p>
            </div>
          </section>
          <section className="user-card">
            <p>Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!</p>
            <div className="user-detail">
              <img src={user2} alt="user2" />
              <h6>Happy User</h6>
              <p>tempy.club</p>
            </div>
          </section>
          <section className="user-card">
            <p>Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user.</p>
            <div className="user-detail">
              <img src={user3} alt="user3" />
              <h6>Happy User</h6>
              <p>tempy.club</p>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Homepage