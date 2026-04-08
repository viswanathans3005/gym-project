import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Events from "../components/Events";
import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="programs-section section-wrapper">
        <div className="section-header">
          <h2>🔥 OUR PROGRAMS</h2>
          <p>Choose from our diverse range of fitness programs designed for all levels</p>
        </div>
        <Programs />
      </section>

      <Events />
      
      <section className="trainers-section section-wrapper">
        <div className="section-header">
          <h2>👨‍🏫 EXPERT TRAINERS</h2>
          <p>Meet our certified trainers ready to guide your fitness journey</p>
        </div>
        <Trainers />
      </section>
      
      <section className="pricing-section section-wrapper">
        <div className="section-header">
          <h2>💰 MEMBERSHIP PLANS</h2>
          <p>Affordable plans for every budget and fitness goal</p>
        </div>
        <Pricing />
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;