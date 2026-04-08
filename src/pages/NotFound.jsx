import "../styles/notfound.css";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="notfound-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Footer compact={true} />
    </div>
  );
};

export default NotFound;