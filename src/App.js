import React, { useEffect } from 'react';

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

  useEffect(() => {
    // Run the handleTrigger function every second
    const intervalId = setInterval(handleTrigger, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <button>Twitter Bot is Running</button>
  );
};

export default TriggerButton;
