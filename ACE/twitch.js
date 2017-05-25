$(document).ready(function() {
  var streamArray = [
    'ESL_SC2',
    'cretetion',
    'freecodecamp',
    'storbeck',
    'habathcx',
    'RobotCaleb',
    'noobs2ninjas',
    '0gamingSC2'
  ];

  for (var i = 0; i < streamArray.length; i++) {
    var apiChans =
    'https://api.twitch.tv/kraken/channels/' + 
    streamArray[i] + 
    '?client_id=v3vqtgs52allv1w9trvwc1odqx5huh';

    var apiStreams =
    'https://api.twitch.tv/kraken/streams/' +
    streamArray[i] +
    '?client_id=v3vqtgs52allv1w9trvwc1odqx5huh';

    console.log(apiChans);

    StreamerInfo(apiChans, apiStreams);
  }
});

function StreamerInfo(channels, streams) {
  $.getJSON(channels, function(data1) {
    var displayName = data1.display_name;
    var description = data1.status;
    var offOn = 0;
    var chanUrl = data1.url;
    var banner = data1.profile_banner;
      console.log(data1);

    if (description !== null) {
      $.ajax({
        url: streams,
        datatype: 'jsonp',
        data: { format: 'json' },
        success: function(data2) {
          console.log(data2);
            /*console.log(apiStreams);*/

          if (data2.stream === null) {
            offOn = 0;

            $('#output').append('<li id=' + displayName + '><img src=' + data1.logo + ' width="100" height="100"> <h2>' + 
            displayName + '</h2><h4 id="status"><a href=' + chanUrl + '>' +
            description + '</a></h4></li>');

            $('#output').append('<p> this channel is not streaming at this time.</p>');

            if (banner !== null) {
              $('#' + displayName).css('background-image', 'url(' + banner + ')');
            } else {
              $('#' + displayName).css('background-color', '#7F0215');
            }

          } else {
            offOn = 1;

            $('#output').append('<li id=' + displayName + '><img src=' + data1.logo + ' width="100" height="100"> <h2>' + 
            displayName + '</h2><h4 id="status"><a href=' + chanUrl + '>' + 
            description + '</a></h4></li>');

            $('#output').append('<p> this channel is currently streaming: ' + data1.game + '</p>')

            if (banner !== null) {
              $('#' + displayName).css('background-image', 'url(' + banner + ')');
            } else {
              $('#' + displayName).css('background-color', '#0F7001');
            }
          }
        }
      });
    }
  }).fail(function() {
    //alert('JSON ERROR');
  });
}

