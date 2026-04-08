import "../styles/shop.css";
import Footer from "../components/Footer";
import cardio from "../assets/images/cardio.jpg";
import weight from "../assets/images/weight.jpg";
import crossfit from "../assets/images/crossfit.jpg";
import yoga from "../assets/images/Yoga.jpg";

const products = [
  {
    id: 1,
    name: "Whey Protein - Gold Standard",
    price: 2500,
    category: "Protein",
    image: cardio,
    description: "Premium whey protein with 25g protein per serving. Supports muscle growth and recovery.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Dumbbell Set 20kg",
    price: 3500,
    category: "Equipment",
    image: weight,
    description: "Heavy-duty adjustable dumbbells perfect for strength training. Non-slip grip.",
    rating: 4.8
  },
  {
    id: 3,
    name: "BCAA Supplement",
    price: 1800,
    category: "Protein",
    image: crossfit,
    description: "Branched-chain amino acids for muscle endurance and recovery. 30 servings.",
    rating: 4.3
  },
  {
    id: 4,
    name: "Yoga Mat Premium",
    price: 1200,
    category: "Equipment",
    image: yoga,
    description: "Non-slip yoga mat with cushioning. Perfect for yoga and stretching exercises.",
    rating: 4.6
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    price: 1500,
    category: "Protein",
    image: cardio,
    description: "Pure creatine for muscle strength and endurance. 200 servings per pack.",
    rating: 4.7
  },
  {
    id: 6,
    name: "Resistance Bands Set",
    price: 800,
    category: "Equipment",
    image: weight,
    description: "5-level resistance bands for full body workout. Portable and durable.",
    rating: 4.4
  },
  {
    id: 7,
    name: "Mass Gainer Shake",
    price: 2200,
    category: "Protein",
    image: crossfit,
    description: "High-calorie mass gainer with 50g protein. Chocolate flavor. 1kg pack.",
    rating: 4.5
  },
  {
    id: 8,
    name: "Kettlebell 16kg",
    price: 1600,
    category: "Equipment",
    image: yoga,
    description: "Cast iron kettlebell for functional training. Ergonomic handle design.",
    rating: 4.9
  }
];

const Shop = () => {
  return (
    <div className="shop-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="shop-header">
        <h1>💪 MUSCLE UP SHOP</h1>
        <p>Premium Gym Equipment & Supplements</p>
      </div>

      <div className="shop-container">
        <div className="products-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                <div className="category-badge">{item.category}</div>
              </div>
              
              <div className="product-info">
                <h3>{item.name}</h3>
                
                <div className="rating">
                  <span className="stars">⭐ {item.rating}</span>
                </div>
                
                <p className="description">{item.description}</p>
                
                <div className="product-footer">
                  <span className="price">₹{item.price}.00</span>
                  <button className="add-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer compact={true} />
    </div>
  );
};

export default Shop;