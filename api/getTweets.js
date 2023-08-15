// twitterBotFunction.js
const Twit = require('twit');

const twitterConfig = {
  consumer_key: '21ZwOAvOIrXVUsVZXwnErhuDX',
  consumer_secret: 'OKBtHab8HqzT0gsyIW5tem0pFD7D3hUY0tzYOa6rJCrW0B0yZg',
  access_token: '1691301964498542592-Ymy0C51e2BHoQiL9XfDxczlfcVhpwu',
  access_token_secret: 'pnyQ0GgfheOR0WX2rFOy7pW4rYV2T4NqZzCPhivVxH3QW'
};

const twitterApi = new Twit(twitterConfig);

module.exports = async (req, res) => {
  try {
    const stream = twitterApi.stream('statuses/filter', { track: '@ipcExplainBot' });

    stream.on('tweet', tweet => {
      try {
        const tweetId = tweet.id_str;
        const username = tweet.user.screen_name;

        // Your reply logic here

        // Example: Reply to the tweet
        const replyText = `Hello @${username}! Thank you for tagging me.`;
        twitterApi.post('statuses/update', { status: replyText, in_reply_to_status_id: tweetId }, (err, data) => {
          if (err) {
            console.error('Error replying to tweet:', err);
          } else {
            console.log('Reply sent successfully:', data.text);
          }
        });

        // Log the received tweet details
        console.log('Tweet received:', tweet.text);
        console.log('Tweet ID:', tweet.id_str);
        console.log('Username:', tweet.user.screen_name);
      } catch (error) {
        console.error('Error handling tweet:', error);
      }
    });

    stream.on('error', error => {
      console.error('Stream error:', error);
    });

    res.status(200).json({ message: 'Twitter bot is now listening.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
