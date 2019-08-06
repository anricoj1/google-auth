$(document).ready(function() {
  let channel = 'UCQeDkRGZZLIcCuNFph6aHqA';
  let key = 'AIzaSyCGpGeTBh75gxAHyxT7rrLT673bVfGe0bQ';
  let totalSubs = 0, totalViews = 0;
  loadChannel(channel, key);

  function loadChannel(channel, key) {
    var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + channel + '&key=' + key;
    $.getJSON(url, function(data) {
      totalSubs = parseInt(data.items[0].statistics.subscriberCount, 10);
      totalViews = parseInt(data.items[0].statistics.viewCount, 10);
      $('.subs').html(totalSubs);
      $('.views').html(totalViews);
    });
  }
  window.setInterval(function(){
    loadChannel(channel, key);
  }, 5000);
});
