import "../styles/contact.css";
import Footer from "../components/Footer";
import qr from "../assets/images/qr.png";
import Reviews from "../components/Reviews";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="contact-header">
        <h1>📞 GET IN TOUCH</h1>
        <p>Visit Our Gym or Contact Us</p>
      </div>

      <div className="contact-container">
        {/* Left Section - Contact Info */}
        <div className="contact-info-section">
          <div className="info-card">
            <div className="card-header">
              <FiMapPin className="icon" />
              <h2>Our Location</h2>
            </div>
            <p className="address">
              <strong>MUSCLE UP GYM</strong><br />
              123 Fitness Street,<br />
              Anna Nagar, Chennai<br />
              Tamil Nadu - 600040
            </p>
          </div>

          <div className="info-card">
            <div className="card-header">
              <FiPhone className="icon" />
              <h2>Contact Numbers</h2>
            </div>
            <div className="contact-item">
              <p><strong>☎️ Main Line:</strong></p>
              <a href="tel:+914422345678">+91 44 2234 5678</a>
            </div>
            <div className="contact-item">
              <p><strong>💬 WhatsApp:</strong></p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <FiMail className="icon" />
              <h2>Email & Enquiry</h2>
            </div>
            <div className="contact-item">
              <p><strong>📧 Official Email:</strong></p>
              <a href="mailto:info@muscleupgym.com">info@muscleupgym.com</a>
            </div>
            <div className="contact-item">
              <p><strong>💼 Support:</strong></p>
              <a href="mailto:support@muscleupgym.com">support@muscleupgym.com</a>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <h2>🏋️ Gym Details</h2>
            </div>
            <div className="gym-details">
              <p><strong>Operating Hours:</strong></p>
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
              <hr />
              <p><strong>Facilities:</strong></p>
              <ul>
                <li>✓ Modern Equipment</li>
                <li>✓ Expert Trainers</li>
                <li>✓ Personal Training</li>
                <li>✓ Nutrition Guidance</li>
                <li>✓ Cardio Zone</li>
                <li>✓ Weight Training</li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="info-card">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="https://instagram.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                <AiOutlineInstagram /> Instagram
              </a>
              <a href="https://youtube.com/muscleupgym" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
                <AiOutlineYoutube /> YouTube
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                <AiOutlineWhatsApp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Map & QR Code */}
        <div className="contact-media-section">
          {/* Map */}
          <div className="map-card">
            <h2>📍 Find Us on Map</h2>
            <iframe
              width="100%"
              height="350"
              frameBorder="0"
              style={{ borderRadius: "15px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9556649999!2d80.21!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sAnna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muscle Up Gym Location"
            ></iframe>
          </div>

          {/* QR Code for Payment */}
          <div className="qr-card">
            <h2>💳 Scan & Pay</h2>
            <p>Scan this QR code to make membership payment</p>
            <div className="qr-container">
              <img src={qr} alt="Payment QR Code" />
            </div>
            <p className="qr-note">All payment methods accepted ✓</p>
          </div>

          {/* Trainer Info */}
          <div className="trainer-card">
            <h2>👨‍🏫 Head Trainer</h2>
            <div className="trainer-info">
              <div className="trainer-name">Vinoth</div>
              <p className="trainer-title">🏆 Certified Fitness Coach</p>
              <p className="trainer-experience">10+ years of experience</p>
              <button className="book-session">Book a Session</button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />
      <Footer compact={true} />
    </div>
  );
};

export default Contact;