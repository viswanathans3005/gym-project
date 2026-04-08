import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="hero-badge">
          <span>💪 NO. 1 FITNESS STUDIO</span>
        </div>
        
        <h1>
          BUILD YOUR
          <br />
          <span>DREAM BODY</span>
        </h1>
        
        <p className="hero-desc">
          Join thousands of members transforming their lives. Expert trainers, modern equipment, and personalized programs.
        </p>
        
        <div className="hero-buttons">
          <Link to="/shop" className="btn-primary">
            🚀 START NOW
          </Link>
          <Link to="/contact" className="btn-secondary">
            📞 CONTACT US
          </Link>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expert Trainers</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <div className="glow-circle"></div>
          <img src="/gym.png" alt="gym" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;