import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
function FeedbackItem({ addText }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('this is the text from user 1');
  //setText([props.data, ...text]);
  const newText = (newFeedback) => {
    setText([...text, newFeedback]);
  };

  const handleClick = () => {
    console.log(text);
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
