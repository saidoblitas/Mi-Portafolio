import React, { useState, useEffect } from "react";
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDay = daysOfWeek[time.getDay()];
  const currentTime = time.toLocaleTimeString();
  const currentMonth = monthsOfYear[time.getMonth()];
  const currentDate = `${currentDay}, ${time.getDate()} ${currentMonth}`;

  return (
    <div className="reloj">
      <div className="tiempo">{currentTime}</div>
      <div className="fecha">{currentDate}</div>
    </div>
  );
};

export default Clock;
