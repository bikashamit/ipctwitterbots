// mentionBot.js
module.exports = (req, res) => {
    const Twit = require('twit');
  
    // Twitter API configuration
    const twitterConfig = {
      consumer_key: 'gBTrIFF11tboJPiMqriafGNzO',
      consumer_secret: '7RR0BjD6LCfsZVTgbLE9Mx4kNzysYS8uemMahGPW10DgI9uepW',
      access_token: '293371547-5R6UI5bS0UUyp4cevFb66O81mI2HCupibYcucyvW',
      access_token_secret: 'IfDEINb3B0mBC90kxGwMFGp9Drc75BiaBOrf63S507CIK'
    };
    const twitterApi = new Twit(twitterConfig);
  
    // Check if the request is a mention
    if (req.body.event_type === 'mention') {
      const tweetText = `Hello, @${req.body.user.screen_name}! Thanks for mentioning me.`;
  
      twitterApi.post('statuses/update', { status: tweetText }, (err, data, response) => {
        if (err) {
          console.error('Error posting tweet:', err);
          res.status(500).json({ error: 'Failed to post tweet' });
        } else {
          console.log('Tweeted:', tweetText);
          res.status(200).json({ message: 'Tweet posted successfully' });
        }
      });
    } else {
      res.status(200).json({ message: 'No mention event detected' });
    }
  };
  