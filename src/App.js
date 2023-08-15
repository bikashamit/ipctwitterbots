import React, { useEffect } from 'react';

const FetchTweets = () => {
  useEffect(() => {
    fetch('/api/getTweets')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched tweets:', data);
      })
      .catch(error => {
        console.error('Error fetching tweets:', error);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Tweets</h1>
    </div>
  );
};

export default FetchTweets;
