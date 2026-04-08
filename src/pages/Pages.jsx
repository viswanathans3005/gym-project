import "../styles/pages.css";
import Footer from "../components/Footer";

const Pages = () => {
  return (
    <div className="pages-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="pages-header">
        <h1>📄 PAGES</h1>
        <p>More Content Coming Soon</p>
      </div>

      <div className="pages-content">
        <p>Pages will be coming soon</p>
      </div>
      <Footer compact={true} />
    </div>
  );
};

export default Pages;