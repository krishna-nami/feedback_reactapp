import React, { useState, useContext, useEffect } from 'react';
import Button from './common/Button';
import Rating from './common/Rating';
import Feedbackcontext from '../context/Feedbackcontext';

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(Feedbackcontext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleText = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text should be 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>How hould you like to rate?</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleText}
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default FeedbackForm;
