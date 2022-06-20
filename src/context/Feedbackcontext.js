import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const Feedbackcontext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  return (
    <Feedbackcontext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </Feedbackcontext.Provider>
  );
};
export default Feedbackcontext;
