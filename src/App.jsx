import React, { useState } from "react";
import "./App.css";
import Room1 from "./assets/img/room1.png";
import Room2 from "./assets/img/room2.png";
import Room3 from "./assets/img/room3.jpg";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const panels = [
    {
      id: 1,
      title: "Explore the world",
      imageUrl: Room1,
    },
    {
      id: 2,
      title: "Wild Forest",
      imageUrl: Room2,
    },
    {
      id: 3,
      title: "Sunny Beach",
      imageUrl: Room3,
    },
  ];

  return (
    <div className="container">
      {panels.map((panel) => (
        <div
          key={panel.id}
          className={`panel ${activeIndex === panel.id ? "active" : ""}`}
          onClick={() => setActiveIndex(panel.id)}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
