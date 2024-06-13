//function that starts the clock

document.addEventListener("DOMContentLoaded", function () {
  //function that update the clock every seconds
  function doClockTick() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let mins = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    mins = mins < 10 ? "0" + mins : mins;

    const timeString = `${hours}:${mins}:${sec}`;

    const outputElement = document.querySelector(".timePar");
    outputElement.innerText = timeString;
  }
  const intervalID = setInterval(doClockTick, 1000);
  //stop time functionality
  const stopTimer = document.querySelector(".stopButton");
  stopTimer.addEventListener("click", function () {
    alert("NO NO NO");
    clearInterval(intervalID);
  });

  doClockTick();
});
