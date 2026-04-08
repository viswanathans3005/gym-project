import { useState } from "react";
import "../styles/reviews.css";
import { AiOutlineStar } from "react-icons/ai";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Software Engineer",
      image: "👨‍💼",
      rating: 5,
      text: "Muscle Up Gym changed my life! The trainers are extremely knowledgeable and motivating. I've seen amazing results in just 3 months.",
      date: "March 2026"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Fitness Enthusiast",
      image: "👩‍🦰",
      rating: 5,
      text: "Best gym in Chennai! Modern equipment, clean facilities, and the atmosphere is very motivating. Highly recommended!",
      date: "February 2026"
    },
    {
      id: 3,
      name: "Arun Singh",
      role: "Business Owner",
      image: "👨‍💼",
      rating: 4.5,
      text: "Great experience! The staff is friendly and helpful. The membership pricing is reasonable for the quality of service provided.",
      date: "January 2026"
    },
    {
      id: 4,
      name: "Divya Patel",
      role: "Yoga Instructor",
      image: "👩‍🏫",
      rating: 5,
      text: "The yoga section is excellent! Vinoth and the team are very supportive and create a positive environment for everyone.",
      date: "March 2026"
    },
    {
      id: 5,
      name: "Vikram Reddy",
      role: "Athlete",
      image: "🏃",
      rating: 4.8,
      text: "Fantastic trainers! They customize workouts according to individual needs. The results speak for themselves!",
      date: "February 2026"
    },
    {
      id: 6,
      name: "Anjali Gupta",
      role: "Working Professional",
      image: "👩‍💼",
      rating: 5,
      text: "Perfect balance of cardio, weights, and functional training. The gym is always clean and well-maintained.",
      date: "March 2026"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.review) {
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        role: "Member",
        image: "👤",
        rating: parseFloat(formData.rating),
        text: formData.review,
        date: new Date().toLocaleString("en-US", { month: "long", year: "numeric" })
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", email: "", rating: 5, review: "" });
      alert("Thank you for your review! ✅");
    } else {
      alert("Please fill all fields");
    }
  };

  const renderStars = (rating) => (
    <div className="stars">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <AiOutlineStar key={i} className="star filled" />
      ))}
      {rating % 1 !== 0 && <AiOutlineStar className="star half" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <AiOutlineStar key={i} className="star empty" />
      ))}
      <span className="rating-text">{rating}</span>
    </div>
  );

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* Reviews Header */}
        <div className="reviews-header">
          <h2>⭐ MEMBER REVIEWS & TESTIMONIALS</h2>
          <p>See what our members say about Muscle Up Gym</p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-top">
                <div className="review-avatar">{review.image}</div>
                <div className="review-meta">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
              
              {renderStars(review.rating)}
              
              <p className="review-text">"{review.text}"</p>
              
              <p className="review-date">📅 {review.date}</p>
            </div>
          ))}
        </div>

        {/* Submit Review Section */}
        <div className="submit-review-section">
          <h3>📝 Share Your Experience</h3>
          <p>Help other members by sharing your honest review about Muscle Up Gym</p>
          
          <form className="review-form" onSubmit={handleSubmitReview}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="rating-select"
              >
                <option value="5">⭐⭐⭐⭐⭐ Excellent (5 Stars)</option>
                <option value="4.5">⭐⭐⭐⭐☆ Very Good (4.5 Stars)</option>
                <option value="4">⭐⭐⭐⭐ Good (4 Stars)</option>
                <option value="3.5">⭐⭐⭐☆ Average (3.5 Stars)</option>
                <option value="3">⭐⭐⭐ Fair (3 Stars)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Review</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Share your experience with Muscle Up Gym... (min 20 characters)"
                rows="5"
                minLength="20"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              💬 Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
