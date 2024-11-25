import React from "react";

function About() {
  const title = "Full Stack Developer";
  return (
    <div className="card-list">
      <div className="card">
        <img className="image-img" src="yosef.jpg" alt="" />
        <h2>יוסף חיים מדמון</h2>
        <h4>{title}</h4>
      </div>
      <div className="card">
        <img className="image-img" src="yaakov.jpg" alt="" />
        <h2>יעקב שלמה גרטזנר</h2>
        <h4>{title}</h4>
      </div>
      <div className="card">
        <img className="image-img" src="gadi.jpg" alt="" />
        <h2>גד מונסנגו</h2>
        <h4>{title}</h4>
      </div>
      <div className="card">
        <img className="image-img" src="reuven.jpg" alt="" />
        <h2>ראובן דגגה</h2>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default About;
