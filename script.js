"use strict";

function timer() {
  const inputTimer = prompt(
    "Enter the required number of seconds for the countdown (within 1 hour - this is up to 3600 seconds)"
  );

  if (!validInputTimer(inputTimer)) {
    alert("Incorrect value entered");
    location.reload();
  }

  function validInputTimer(value) {
    return (
      value?.trim() && Number.isInteger(+value) && 0 < +value && +value < 3600
    );
  }

  const timer = +inputTimer;

  const timerContainerElement = document.createElement("div");
  timerContainerElement.className = "timer_container";
  timerContainerElement.textContent = "Timer";

  const timerElement = document.createElement("div");
  timerElement.className = "timer";
  timerContainerElement.append(timerElement);
  document.body.append(timerContainerElement);

  const nowTime = new Date().getTime();
  const endTime = nowTime + timer * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = endTime - now;
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes.toString().padStart(2, "0");
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    seconds = seconds.toString().padStart(2, "0");

    if (timeLeft > 0) {
      timerElement.textContent = `${minutes}:${seconds}`;
    } else {
      clearInterval(interval);
      return;
    }
  }

  const interval = setInterval(() => {
    updateTimer();
  }, 1000);
}

timer();
