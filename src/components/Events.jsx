import "../styles/events.css";
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Summer Fitness Challenge",
      date: "15 April 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Main Arena",
      sponsor: "Nike Fitness",
      description: "90-day transformation challenge with exciting prizes and recognition.",
      image: "🏆",
      category: "Challenge"
    },
    {
      id: 2,
      title: "CrossFit Masters Meet",
      date: "22 April 2026",
      time: "7:00 AM - 12:00 PM",
      location: "CrossFit Zone",
      sponsor: "Reebok Sports",
      description: "Elite CrossFit competition with athletes from 5 cities competing.",
      image: "⚡",
      category: "Competition"
    },
    {
      id: 3,
      title: "Yoga & Wellness Retreat",
      date: "28 April 2026",
      time: "5:00 PM - 7:00 PM",
      location: "Yoga Hall",
      sponsor: "Wellness Plus",
      description: "Relaxing yoga session followed by healthy nutrition workshop.",
      image: "🧘",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Women's Empowerment Fitness Day",
      date: "5 May 2026",
      time: "4:00 PM - 6:00 PM",
      location: "Main Hall",
      sponsor: "Women Power Inc",
      description: "Special fitness day celebrating women health and strength.",
      image: "💪",
      category: "Special Event"
    },
    {
      id: 5,
      title: "Nutrition & Diet Seminar",
      date: "12 May 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Room",
      sponsor: "FitNutrition Co",
      description: "Expert nutritionists share tips for optimal health and fitness results.",
      image: "🥗",
      category: "Seminar"
    },
    {
      id: 6,
      title: "Annual Gym Gala & Awards",
      date: "20 May 2026",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hall",
      sponsor: "Gold's Gym Partner",
      description: "Celebrate member achievements, awards, and networking event.",
      image: "🎉",
      category: "Celebration"
    }
  ];

  return (
    <section className="events-section">
      <div className="events-header">
        <h2>🎯 UPCOMING EVENTS</h2>
        <p>Join our exciting fitness events, competitions, and workshops</p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-icon">{event.image}</div>
            
            <div className="event-category">{event.category}</div>
            
            <h3>{event.title}</h3>
            
            <div className="event-details">
              <div className="detail-item">
                <AiOutlineCalendar className="icon" />
                <span>{event.date}</span>
              </div>
              <div className="detail-item">
                <AiOutlineClockCircle className="icon" />
                <span>{event.time}</span>
              </div>
              <div className="detail-item">
                <AiOutlineEnvironment className="icon" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <p className="event-description">{event.description}</p>
            
            <div className="event-sponsor">
              <strong>Sponsored by:</strong> {event.sponsor}
            </div>
            
            <button className="register-btn">📝 Register Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
