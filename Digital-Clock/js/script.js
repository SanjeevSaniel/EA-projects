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

  let morningMessage = "Grab Some Healthy Breakfast!!!";
  let afternoonMessage = "Let's Have Some Lunch !!";
  let eveningMessage = `Stop Yawning, Get Some Tea..
        It's Just Evening!`;
  let nightMessage = "Close Your Eyes And Go To Sleep";

  let morningText = "Good Morning!! Wake Up !!";
  let afternoonText = "Good Afternoon !! Take Some Sleep";
  let eveningText = "Good Evening !!";
  let nightText = "Good Night !!";

  if (period === "AM") {
    document.getElementById("greeting-message").innerHTML = morningMessage;
    document.getElementById("greeting-text").innerHTML = morningText;
  } else if (period === "PM") {
    if (hours === 12 || 1 <= hours <= 3) {
      document.getElementById("greeting-message").innerHTML = afternoonMessage;
      document.getElementById("greeting-text").innerHTML = afternoonText;
    } else if (4 <= hours <= 7) {
      document.getElementById("greeting-message").innerHTML = eveningMessage;
      document.getElementById("greetings-text").innerHTML = eveningText;
    } else {
      document.getElementById("greeting-message").innerHTML = nightMessage;
      document.getElementById("greeting-text").innerHTML = nightText;
    }
  }
};

clock();
