import React from "react";
import "./Features.css";
import { ReactComponent as MyIcon } from './rocket.svg';
import { ReactComponent as MyIcon2 } from './hat.svg';
import { ReactComponent as MyIcon3 } from './calendar.svg';




function Features() {
  return (
    <section className="features">
      <div className="feature-item">
      <MyIcon2 width={50} height={50} fill="white" />
        <h3>Live Learning, Anytime, Anywhere</h3>
        <p>Engage in daily live classes where you can chat with educators, ask questions, participate in live polls, and get your doubts cleared in real-time.</p>
      </div>
      <div className="feature-item">
      <MyIcon3 width={50} height={50} fill="white" />
        <h3>Interactive Learning, On Your Schedule</h3>
        <p>Enhance your understanding with dedicated practice sessions, mock tests, and comprehensive lecture notes in PDF format.</p>
      </div>
      <div className="feature-item">
      <MyIcon width={50} height={50} fill="blue" />
        <h3>Interactive Learning, On Your Schedule</h3>
        <p>Strengthen your knowledge with our practical tools, mock tests, and detailed lecture notes. With one subscription, you can access every live and recorded class, anytime, on any device.</p>
      </div>
    </section>
  );
}

export default Features;
