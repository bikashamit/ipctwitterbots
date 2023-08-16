const Twit = require('twit');

const twitterConfig = {
  consumer_key: 'BHnduZm1TXBU1Aic6lSgLLema',
  consumer_secret: 'UpHGbx5VwIlpYrJr406MkhAvPVz3dDPLMWmU8h6plXsGz3Zw27',
  access_token: '1691301964498542592-VHP4nrBzssOx51WcD13If4XX5tyjMU',
  access_token_secret: '2SwL3rE9FtKH0W0QGKTSezFzMl7vATtwjHhyu6wwHO2gq'
};

const twitterApi = new Twit(twitterConfig);

module.exports = async (req, res) => {
  try {
    // Fetch tweets from the @am_IT___ user's timeline
    twitterApi.get('statuses/user_timeline', { screen_name: 'am_IT___', count: 10 }, (err, data) => {
      if (err) {
        console.error('Error fetching tweets:', err);
        res.status(500).json({ error: 'Failed to fetch tweets' });
      } else {
        // Extract relevant tweet data and send as response
        const tweets = data.map(tweet => ({
          id: tweet.id_str,
          text: tweet.text,
          user: tweet.user.screen_name,
          created_at: tweet.created_at
        }));
        res.status(200).json({ message: 'Success', data: tweets });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
