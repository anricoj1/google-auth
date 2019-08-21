$(document).ready(function() {
  let page_id = '100000019826527';
  let access_token = '1835070033305750|6dIZOOjkCzJjlKnRXnoe2rJhylc';
  loadFacebook(page_id, access_token);

  function loadFacebook(page_id, access_token) {
    var url = 'https://graph.facebook.com/' + page_id + '?fields=id,name&access_token=' + access_token;
    $.getJSON(url, function(data) {
      name = data.name;
      id = data.id;
      $('.fb_name').html(name);
      $('.id').html(id);
    });
  };
});
