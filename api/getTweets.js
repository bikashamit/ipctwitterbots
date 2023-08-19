const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const twitterApiUrl = 'https://twitter.com/search?q=ipcexplainbot&src=typed_query';
    const response = await fetch(twitterApiUrl);

    if (response.ok) {
      const data = await response.json();
      // Process the Twitter API response here
      res.status(200).json({ message: 'Twitter data fetched successfully', data });
    } else {
      console.error('Error fetching Twitter data:', response.statusText);
      res.status(500).json({ error: 'An error occurred while fetching Twitter data' });
    }
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    res.status(500).json({ error: 'An error occurred while fetching Twitter data' });
  }
};
