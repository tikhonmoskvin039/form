import React, { useState } from "react";
import "./App.css";
import { Button } from "antd";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);

  const handleShowFeedbackForm = () => {
    setFeedbackFormVisible(true);
  };

  const handleCancelFeedbackForm = () => {
    setFeedbackFormVisible(false);
  };

  return (
    <div className="container">
      <Button onClick={handleShowFeedbackForm}>
        Открыть форму обратной связи
      </Button>
      <FeedbackForm
        open={feedbackFormVisible}
        onCancel={handleCancelFeedbackForm}
      />
    </div>
  );
};

export default App;
