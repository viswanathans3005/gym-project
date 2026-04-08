import "../styles/trainers.css";

import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";
import t3 from "../assets/images/t3.jpg";

const Trainers = () => {
  const data = [
    { name: "John Carter", role: "Strength Coach", img: t1 },
    { name: "Emma Stone", role: "Yoga Trainer", img: t2 },
    { name: "David Lee", role: "Crossfit Coach", img: t3 },
  ];

  return (
    <section className="trainers">
      <h2>Our Trainers</h2>

      <div className="trainer-cards">
        {data.map((t, i) => (
          <div className="trainer-card" key={i}>
            <img src={t.img} alt={t.name} />

            <div className="trainer-overlay">
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;