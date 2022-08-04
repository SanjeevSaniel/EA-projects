//* Clock ⏱

let clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let period = "AM";
  if (hours === 0) {
    hours = 12;
  } else if (hours >= 12) {
    hours -= 12;
    period = "PM";
  }

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let clockHours = `${hours}`;
  let clockMinutes = `${minutes}`;
  let clockSeconds = `${seconds}`;
  let clockPeriod = `${period}`;

  document.getElementById("clock-hours").innerHTML = clockHours;
  document.getElementById("clock-minutes").innerHTML = clockMinutes;
  document.getElementById("clock-seconds").innerHTML = clockSeconds;
  document.getElementById("clock-period").innerHTML = clockPeriod;
  setTimeout(clock, 1000);
};

clock();
