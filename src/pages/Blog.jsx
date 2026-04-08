import "../styles/blog.css";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="blog-header">
        <h1>📝 BLOG</h1>
        <p>Fitness Tips, Nutrition & Training Guides</p>
      </div>

      <div className="blog-content">
        <p>Coming soon...</p>
      </div>
      <Footer compact={true} />
    </div>
  );
};

export default Blog;