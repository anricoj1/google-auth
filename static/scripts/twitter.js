var configAuth = require('../../config/auth');
$(document).ready(function() {
  let twitter = '',
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
