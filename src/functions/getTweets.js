// src/functions/getTweets.js
const Twit = require('twit');

const twitterConfig = {
  consumer_key: 'gBTrIFF11tboJPiMqriafGNzO',
  consumer_secret: '7RR0BjD6LCfsZVTgbLE9Mx4kNzysYS8uemMahGPW10DgI9uepW',
  access_token: '293371547-5R6UI5bS0UUyp4cevFb66O81mI2HCupibYcucyvW',
  access_token_secret: 'IfDEINb3B0mBC90kxGwMFGp9Drc75BiaBOrf63S507CIK'
};
const twitterApi = new Twit(twitterConfig);

// functions/getTweets.js
module.exports = async (req, res) => {
  try {
    const tweets = ["Tweet 1", "Tweet 2", "Tweet 3"]; // Replace with actual data
    res.status(200).json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
};

