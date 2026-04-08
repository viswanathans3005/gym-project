import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Feed", path: "/feed" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const page = pages.find(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (page) {
        navigate(page.path);
        setSearchQuery("");
        setSearchOpen(false);
      }
    }
  };

  const searchResults = searchQuery.trim()
    ? pages.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.toLowerCase().includes(p.name.toLowerCase())
      )
    : [];

  return (
    <nav className="navbar">
      <div className="logo">
        MUSCLE<span>UP</span> 
      </div>

      {/* DESKTOP MENU - Always visible on desktop */}
      <ul className="nav-links">
        <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
        <li><Link to="/blog" onClick={handleLinkClick}>BLOG</Link></li>
        <li><Link to="/feed" onClick={handleLinkClick}>📸 FEED</Link></li>
        <li><Link to="/shop" onClick={handleLinkClick}>SHOP</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>CONTACT</Link></li>
      </ul>

      {/* SEARCH BAR - Always visible */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(true);
            }}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FiSearch />
          </button>
        </form>
        
        {/* Search Results - Only show when typing */}
        {searchOpen && searchQuery.trim() && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link
                  key={result.path}
                  to={result.path}
                  className="search-result-item"
                  onClick={handleLinkClick}
                >
                  {result.name}
                </Link>
              ))
            ) : (
              <div className="search-result-item no-results">
                Your keyword not related to our website
              </div>
            )}
          </div>
        )}
      </div>

      {/* MENU ICON - After search bar */}
      <div className={`menu-dropdown ${menuOpen ? "active" : ""}`}>
        <HiOutlineMenuAlt3 
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }} 
        />
        
        {/* Menu Items Dropdown */}
        {menuOpen && (
          <div className="menu-items-dropdown">
            <Link to="/" className="menu-item" onClick={handleLinkClick}>HOME</Link>
            <Link to="/blog" className="menu-item" onClick={handleLinkClick}>BLOG</Link>
            <Link to="/feed" className="menu-item" onClick={handleLinkClick}>📸 FEED</Link>
            <Link to="/shop" className="menu-item" onClick={handleLinkClick}>SHOP</Link>
            <Link to="/contact" className="menu-item" onClick={handleLinkClick}>CONTACT</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;