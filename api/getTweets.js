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
    // Fetch tweets using the Twitter API
    const response = await twitterApi.get('statuses/user_timeline', { screen_name: 'TwitterDev', count: 5 });
    const tweets = response.data.map(tweet => tweet.text);

    res.status(200).json({ message: 'Success', data: tweets });
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
};
