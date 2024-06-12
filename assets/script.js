//function that starts the clock

document.addEventListener("DOMContentLoaded", function () {
  setInterval(doClockTick, 1000);
});

//function that update the clock every seconds
function doClockTick() {
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var mins = currentDate.getMinutes();
  var sec = currentDate.getSeconds();
  var timeString = `${hours}:0${mins}:${sec}`;

  var outputElement = document.querySelector(".timePar");
  outputElement.innerText = timeString;
}
