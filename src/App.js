import React, { useState } from 'react';
import Header from './components/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { FeedbackProvider } from './context/Feedbackcontext';

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />

        <div className="container">
          <FeedbackForm />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}
export default App;
