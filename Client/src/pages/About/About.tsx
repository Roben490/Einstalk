import React from "react";

function About() {
  const title = "Full Stack Developer";
  return (
    <div className="card-list">
      <div className="card">
        <img src="" alt="" />
        <h1>יוסף חיים מדמון</h1>
        <h2>{title}</h2>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h1>יעקב שלמה גרטזנר</h1>
        <h2>{title}</h2>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h1>גד מונסנגו</h1>
        <h2>{title}</h2>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h1>ראובן דגגה</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default About;
