const targetDate = "2025-08-30 14:00:00";
const countdownSec = document.getElementsByClassName("tonic-cd-countdown-2443");
const timerDays = document.getElementsByClassName("tonic-cd-days-2443");
const timerHours = document.getElementsByClassName("tonic-cd-hours-2443");
const timerMinutes = document.getElementsByClassName("tonic-cd-minutes-2443");
const timerSeconds = document.getElementsByClassName("tonic-cd-seconds-2443");
const countdownEndNotice = "Countdown Over";

const dateTime = new Date(targetDate);
const yyyy = dateTime.getFullYear();
const mm = String(dateTime.getMonth() + 1).padStart(2, "0");
const dd = String(dateTime.getDate()).padStart(2, "0");
const hour = String(dateTime.getHours()).padStart(2, "0");
const min = String(dateTime.getMinutes()).padStart(2, "0");
const sec = String(dateTime.getSeconds()).padStart(2, "0");

const endDate = yyyy + "-" + mm + "-" + dd;
const endTime = hour + ":" + min + ":" + sec;
const endTimezone = "+00:00";
const endText = `<span class="tonic-cd-end">${countdownEndNotice}</span>`;

const end = new Date(`${endDate}T${endTime}${endTimezone}`).getTime();

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;
const x = setInterval(function() {
  let now = new Date().getTime();
  const difference = end - now;

  if (difference < 0) {
    clearInterval(x);
    countdownSec.innerHTML = endText;
    return;
  }

  Array.from(timerDays).forEach(
    (dayEl) =>
    (dayEl.innerHTML =
      "<strong>" + Math.floor(difference / days) + "</strong><span>Days</span>")
  );
  Array.from(timerHours).forEach(
    (hoursEl) =>
    (hoursEl.innerHTML =
      "<strong>" + Math.floor((difference % days) / hours) + "</strong><span>Hours</span>")
  );
  Array.from(timerMinutes).forEach(
    (minutesEl) =>
    (minutesEl.innerHTML =
      "<strong>" + Math.floor((difference % hours) / minutes) +
      "</strong><span>Minutes</span>")
  );
  Array.from(timerSeconds).forEach(
    (secondsEl) =>
    (secondsEl.innerHTML =
      "<strong>" + Math.floor((difference % minutes) / seconds) +
      "</strong><span>Seconds</span>")
  );
}, seconds);
