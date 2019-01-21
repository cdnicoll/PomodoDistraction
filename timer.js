var Stopwatch = require('timer-stopwatch');
const COUNTDOWN_TIME = 60000
var timer = new Stopwatch(COUNTDOWN_TIME); // A new countdown timer with 60 seconds
timer.start();

timer.onTime(function(time) {
  $('#timer').text(millisToMinutesAndSeconds(time.ms));
});

const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
