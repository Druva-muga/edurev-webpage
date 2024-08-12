import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlocking India's Potential Through <span>Innovative Learning</span></h1>
        <p>Empowering students across India with top educators, innovative courses, and personalized digital learning experiences.</p>
        <button className="get-started">Get started!</button>
      </div>
      <img src="https://movieseverywhere.net/wp-content/uploads/2020/05/undraw_Online_learning_re_qw08-1.png" className="hero-image"/>
    </section>
  );
}

export default HeroSection;
