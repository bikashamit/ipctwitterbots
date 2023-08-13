import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState('');

  const handleButtonClick = async () => {
    try {
      const res = await axios.get('/api/mentionBot');
      setResponse(res.data.message);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred');
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Trigger Bot</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
