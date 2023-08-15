// src/components/TriggerButton.js
import React from 'react';

const TriggerButton = () => {
  const handleTrigger = async () => {
    try {
      const response = await fetch('/api/getTweets');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error triggering function:', error);
    }
  };

  return (
    <button onClick={handleTrigger}>Trigger Twitter Bot</button>
  );
};

export default TriggerButton;
