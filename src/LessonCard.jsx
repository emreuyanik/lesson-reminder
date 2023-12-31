// LessonCard.jsx
import React from "react";
import "./LessonCard.css";

const LessonCard = ({ lesson }) => {
  return (
    <main className="enez" >
      <div className="lesson-card">
        <img src={lesson.image} alt={lesson.name} />
        <div className="lesson-fill">
          <h2>{lesson.name}</h2>
          <p>Class Hour: {lesson.hour}</p>
        </div>
      </div>
    </main>
  );
};

export default LessonCard;
