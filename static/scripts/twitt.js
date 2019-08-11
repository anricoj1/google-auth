var client = new twitter({
  consumer_key: configAuth.twitterAuth.consumer_key,
  consumer_secret: configAuth.twitterAuth.consumer_secret,
  access_token_key: configAuth.twitterAuth.access_token_key,
  access_token_secret: configAuth.twitterAuth.access_token_secret
});

$(document).ready(function() {
  let params = {screen_name: 'jason_anrico'};
  client.get('statuses/user_timeline', params, function(err, tweets, response) {
    if(!err){
      console.log(tweets);
    }
  })
})
