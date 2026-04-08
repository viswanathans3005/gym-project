import { Link } from "react-router-dom";
import { FiHome, FiBook, FiShoppingBag, FiMail } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp, AiFillPhone } from "react-icons/ai";
import "../styles/footer.css";

const Footer = ({ compact = false }) => {
  if (compact) {
    // Compact mode - only icons and copyright
    return (
      <footer className="footer compact">
        <div className="footer-content">
          <div className="footer-nav-icons">
            <Link to="/" className="footer-icon-btn" title="Home">
              <FiHome />
            </Link>
            <Link to="/blog" className="footer-icon-btn" title="Blog">
              <FiBook />
            </Link>
            <Link to="/shop" className="footer-icon-btn" title="Shop">
              <FiShoppingBag />
            </Link>
            <Link to="/contact" className="footer-icon-btn" title="Contact">
              <FiMail />
            </Link>
            <a href="https://instagram.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon instagram" title="Instagram">
              <AiOutlineInstagram />
            </a>
            <a href="https://youtube.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon youtube" title="YouTube">
              <AiOutlineYoutube />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon whatsapp" title="WhatsApp">
              <AiOutlineWhatsApp />
            </a>
            <a href="tel:+914422345678" className="footer-icon-btn social-icon phone" title="Call Us">
              <AiFillPhone />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy">© 2026 Muscle Up Fitness Studio. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  // Full professional footer - for home page
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section 1 - About */}
        <div className="footer-section">
          <h3>💪 MUSCLE UP GYM</h3>
          <p>Transform your body, transform your life with our expert trainers and world-class facilities.</p>
          <p><strong>Location:</strong> 123 Fitness Street, Anna Nagar, Chennai</p>
          <p><strong>Phone:</strong> +91 44 2234 5678</p>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="footer-section">
          <h3>Quick Navigation</h3>
          <Link to="/">🏠 Home</Link>
          <Link to="/blog">📝 Blog</Link>
          <Link to="/shop">🛍️ Shop</Link>
          <Link to="/contact">📞 Contact Us</Link>
          <Link to="/feed">📸 Community</Link>
        </div>

        {/* Section 3 - Connect */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Follow us on social media and stay updated with the latest fitness trends.</p>
          
          <div className="footer-nav-icons">
            <Link to="/" className="footer-icon-btn" title="Home">
              <FiHome />
            </Link>
            <Link to="/blog" className="footer-icon-btn" title="Blog">
              <FiBook />
            </Link>
            <Link to="/shop" className="footer-icon-btn" title="Shop">
              <FiShoppingBag />
            </Link>
            <Link to="/contact" className="footer-icon-btn" title="Contact">
              <FiMail />
            </Link>
          </div>

          <div className="footer-social-icons">
            <a href="https://instagram.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon instagram" title="Instagram">
              <AiOutlineInstagram />
            </a>
            <a href="https://youtube.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon youtube" title="YouTube">
              <AiOutlineYoutube />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer-icon-btn social-icon whatsapp" title="WhatsApp">
              <AiOutlineWhatsApp />
            </a>
            <a href="tel:+914422345678" className="footer-icon-btn social-icon phone" title="Call Us">
              <AiFillPhone />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copy">© 2026 Muscle Up Fitness Studio. All rights reserved. | Designed & Developed with 💪</p>
      </div>
    </footer>
  );
};

export default Footer;