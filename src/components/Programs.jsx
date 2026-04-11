import "../styles/programs.css";

import weightImg from "../assets/images/weight.jpg";
import cardioImg from "../assets/images/cardio.jpg";
import yogaImg from "../assets/images/Yoga.jpg";
import crossfitImg from "../assets/images/crossfit.jpg";

const Programs = () => {
  const data = [
  { title: "Weight Training", desc: "Build muscle and strength", img: weightImg },
  { title: "Cardio", desc: "Improve stamina and burn fat", img: cardioImg },
  { title: "Yoga", desc: "Flexibility and peace", img: yogaImg },
  { title: "Crossfit", desc: "High intensity workouts", img: crossfitImg },
];

  return (
    <section className="programs">
      <h2>Our Programs</h2>

      <div className="program-cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
