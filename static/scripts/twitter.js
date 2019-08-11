var configAuth = require('../../config/auth');
var twitter = require('twitter');

var client = new twitter({
  consumer_key: configAuth.twitterAuth.consumer_key,
  consumer_secret: configAuth.twitterAuth.consumer_secret,
  access_token_key: configAuth.twitterAuth.access_token_key,
  access_token_secret: configAuth.twitterAuth.access_token_secret
});

var params = {screen_name: 'jason_anrico'};
client.get('statuses/user_timeline', params, funtion(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

$(document).ready(function() {
  
  let twitterUser = '',
  let key = '',
  let totalFollow = 0; totalFollower = 0;
  loadTwitter(twitter, key);

  function loadTwitter(twitter, key) {
    var url = "";
    $.getJSON(url, function(data) {
      totalFollow = parseInt();
      totalFollower = parseInt();
      $('.following').html(totalFollow);
      $('.followers').html(totalFollower);
    })
  }
  window.setInterval(function() {
    loadTwitter(twitter, key);
  }, 5000);
})
