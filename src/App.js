// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState([]);

  const handleFetchTweets = async () => {
    try {
      const response = await axios.get('/api/getTweets', {
        params: { username }
      });

      setTweets(response.data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div>
      <h1>Twitter App</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Twitter Handle"
      />
      <button onClick={handleFetchTweets}>Fetch Tweets</button>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
