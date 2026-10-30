import React from "react";
import Hero from "../assets/banner-marci.webp";
import Marci from "../assets/marci-img.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <img src={Hero} alt="Pahrump golf course and mountain landscape" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow eyebrow--light">
            Marci Metzger - The Ridge Realty Group
          </p>
          <h1>Pahrump Realtor</h1>
          <a className="primary-button" href="tel:2069196886">
            Call Now <FaArrowRightLong />
          </a>
        </div>
      </section>

      {/* Owner Section */}
      <section className="agent section-pad" id="about">
        <div className="agent-intro">
          <p className="eyebrow">Local experience</p>
          <h2>Marci Metzger</h2>
          <p className="agent-subtitle">Realtor for nearly 3 decades</p>
          <a href="tel:2069196886">206-919-6886</a>
        </div>
        <div className="agent-image">
          <img src={Marci} alt="Marci Metzger" />
        </div>
        <div className="agent-note">
          <span>Serving</span>
          <strong>Pahrump</strong>
          <span>with local expertise</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
