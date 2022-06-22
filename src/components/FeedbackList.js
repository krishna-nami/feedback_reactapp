import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import Feedbackcontext from '../context/Feedbackcontext';

function FeedbackList() {
  const { feedback, deleteFeedback, editFeedback } =
    useContext(Feedbackcontext);
  if (feedback.length === 0) {
    return <p>No Feedback to show</p>;
  }
  let averageRate =
    feedback.reduce((a, c) => {
      return a + c.rating;
    }, 0) / feedback.length;
  return (
    <>
      <div className="feedback-stats">
        <h4>Total Reviews: {feedback.length}</h4>
        <h4>Average Rating: {averageRate.toFixed(1)}</h4>
      </div>
      <div className="list">
        {feedback.map((item) => (
          <div className="card" key={item.id}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
              <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
              <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
