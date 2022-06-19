import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Header from './components/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
export default App;
