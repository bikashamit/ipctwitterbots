import React from 'react';

const TriggerButton = () => {
  const handleTrigger = async () => {
    try {
      const response = await fetch('/api/getTweets');
      const data = await response.json();
      console.log('Function response:', data);

      if (data.message === 'Twitter bot is now listening.') {
        console.log('Twitter bot is now listening for tweets.');
      }
    } catch (error) {
      console.error('Error triggering function:', error);
    }
  };

  return (
    <button onClick={handleTrigger}>Trigger Twitter Bot</button>
  );
};

export default TriggerButton;
