// Clock ⏱
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

  // access image in the HTML document
  let image = document.getElementById("photo");

  if (period === "AM" && 1 <= hours && hours <= 12) {
    document.getElementById("greeting-message").innerHTML = morningMessage;
    document.getElementById("greeting-text").innerHTML = morningText;
    image.src = "./images/Component-30–1.svg";
  } else if (period === "PM") {
    if (period === "PM" && (hours === 12 || (1 <= hours && hours <= 3))) {
      document.getElementById("greeting-message").innerHTML = afternoonMessage;
      document.getElementById("greeting-text").innerHTML = afternoonText;
      image.src = "./images/Component-31–1.svg";
    } else if (period === "PM" && 4 <= hours && hours <= 7) {
      document.getElementById("greeting-message").innerHTML = eveningMessage;
      document.getElementById("greeting-text").innerHTML = eveningText;
      image.src = "./images/lunch_image.png";
    } else {
      document.getElementById("greeting-message").innerHTML = nightMessage;
      document.getElementById("greeting-text").innerHTML = nightText;
      image.src = "./images/Component-32–1.png";
    }
  }
};

clock();

// Schedule 📃
const setAlarm = () => {
  let selectMorningTime = document.getElementById("select-morning");
  let selectNoonTime = document.getElementById("select-afternoon");
  let selectEveningTime = document.getElementById("select-evening");
  let selectNightTime = document.getElementById("select-night");

  let wakeUpTime =
    selectMorningTime.options[selectMorningTime.selectedIndex].value;
  let lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].value;
  let napTime =
    selectEveningTime.options[selectEveningTime.selectedIndex].value;
  let nightTime = selectNightTime.options[selectNightTime.selectedIndex].value;

  selectMorningTime.addEventListener("click", function handleChange(event) {
    wakeUpTime =
      selectMorningTime.options[selectMorningTime.selectedIndex].value;
  });

  selectNoonTime.addEventListener("click", function handleChange(event) {
    lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].value;
  });
  selectEveningTime.addEventListener("click", function handleChange(event) {
    napTime = selectEveningTime.options[selectEveningTime.selectedIndex].value;
  });
  selectNightTime.addEventListener("click", function handleChange(event) {
    nightTime = selectNightTime.options[selectNightTime.selectedIndex].value;
  });
  // selectNightTime.addEventListener("change", function handleChange(event) {
  //   nightTime = selectNightTime.options[selectNightTime.selectedIndex].value;
  // });

  // Set Alarm 🔔
  let setAlarm = document.getElementById("set-alarm-btn");

  // setAlarm.addEventListener("click", function handleChange(event) {
  //   document.getElementById("set-wakeup-time").innerHTML = wakeUpTime;
  //   document.getElementById("set-lunch-time").innerHTML = lunchTime;
  //   document.getElementById("set-nap-time").innerHTML = napTime;
  //   document.getElementById("set-night-time").innerHTML = nightTime;
  // });

  const setTimeValues = () => {
    document.getElementById("set-wakeup-time").innerHTML = wakeUpTime;
    document.getElementById("set-lunch-time").innerHTML = lunchTime;
    document.getElementById("set-nap-time").innerHTML = napTime;
    document.getElementById("set-night-time").innerHTML = nightTime;
  };

  setAlarm.onclick = setTimeValues;
};

setAlarm();
