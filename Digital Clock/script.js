const clock = document.getElementById("clock");
const dateDisplay = document.getElementById("date");

function updateClockAndDate() {
  const now = new Date();
  clock.innerHTML = now.toLocaleTimeString();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateDisplay.innerHTML = now.toLocaleDateString(undefined, options);
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();
