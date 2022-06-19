import React from 'react';
import { FaTimes } from 'react-icons/fa';

function FeedbackList({ feedback }) {
  if (feedback.length === 0) {
    return <p>No Feedback to show</p>;
  }
  const handleClick = () => {
    console.log('close');
  };
  return (
    <div className="list">
      {feedback.map((item) => (
        <div className="card">
          <div className="num-display">{item.rating}</div>
          <button onClick={handleClick} className="close">
            <FaTimes color="purple" />
          </button>
          <div className="text-display">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
