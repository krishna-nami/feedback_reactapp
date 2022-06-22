import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const Feedbackcontext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ]);
  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // add feebakc
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };
  //edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <Feedbackcontext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </Feedbackcontext.Provider>
  );
};
export default Feedbackcontext;
