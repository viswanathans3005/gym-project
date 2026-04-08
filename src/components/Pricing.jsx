import { Link } from "react-router-dom";
import "../styles/pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Membership Plans</h2>

      <div className="pricing-cards">

        <div className="price-card">
          <h3>Basic</h3>
          <h1>₹2,999</h1>
          <p className="plan-duration">/month</p>
          <ul className="features-list">
            <li>✓ 24/7 Gym Access</li>
            <li>✓ Basic Equipment</li>
            <li>✓ Community Support</li>
            <li>✓ Monthly Progress Tracking</li>
          </ul>
          <Link to="/contact" className="join-btn">
            💳 JOIN NOW - Pay via QR
          </Link>
        </div>

        <div className="price-card premium">
          <div className="popular-badge">MOST POPULAR</div>
          <h3>Premium</h3>
          <h1>₹5,999</h1>
          <p className="plan-duration">/month</p>
          <ul className="features-list">
            <li>✓ Unlimited Gym Access</li>
            <li>✓ 2 Sessions/Week Trainer</li>
            <li>✓ Nutrition Guidance</li>
            <li>✓ Personal Equipment Locker</li>
            <li>✓ Weekly Progress Report</li>
          </ul>
          <Link to="/contact" className="join-btn premium-btn">
            💳 JOIN NOW - Pay via QR
          </Link>
        </div>

        <div className="price-card">
          <h3>Pro</h3>
          <h1>₹9,999</h1>
          <p className="plan-duration">/month</p>
          <ul className="features-list">
            <li>✓ All Premium Features</li>
            <li>✓ Daily Personal Training</li>
            <li>✓ Custom Diet Plan</li>
            <li>✓ Priority Support</li>
            <li>✓ Free Supplements</li>
            <li>✓ Transformation Guarantee</li>
          </ul>
          <Link to="/contact" className="join-btn">
            💳 JOIN NOW - Pay via QR
          </Link>
        </div>

      </div>

      <p className="payment-note">
        🔐 All plans include secure payment via QR code scanning on our Contact page
      </p>
    </section>
  );
};

export default Pricing;