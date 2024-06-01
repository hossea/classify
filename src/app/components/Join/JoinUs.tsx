import React from 'react';
import { FaApple } from 'react-icons/fa'; // Import Apple icon from react-icons/fa
import './JoinUs.css';

const JoinUs = () => {
  return (
    <div className="joinUsContainer">
      <h6 className="joinUsText">
        Join us to stay connected with <b />those closest to you
      </h6>
      <div className="buttonContainer">
        <a href="#" className="joinUsButton">
          <FaApple /> Download for Mac
        </a>
        <a href="#" className="joinUsButton">Open in Browser</a>
      </div>
    </div>
  );
};
export default JoinUs;

