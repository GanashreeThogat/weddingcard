const weddingDate = new Date(2026, 10, 26).getTime();
const countdownParts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};
const countdownNote = document.getElementById("countdown-note");

function updateCountdown() {
  const remaining = weddingDate - Date.now();

  if (remaining <= 0) {
    Object.keys(countdownParts).forEach(function (unit) {
      countdownParts[unit].textContent = "0";
    });
    countdownNote.textContent = "Our celebration has begun!";
    return false;
  }

  const seconds = Math.floor(remaining / 1000);
  countdownParts.days.textContent = Math.floor(seconds / 86400);
  countdownParts.hours.textContent = Math.floor((seconds % 86400) / 3600);
  countdownParts.minutes.textContent = Math.floor((seconds % 3600) / 60);
  countdownParts.seconds.textContent = seconds % 60;
  return true;
}

if (updateCountdown()) {
  const countdownInterval = window.setInterval(function () {
    if (!updateCountdown()) {
      window.clearInterval(countdownInterval);
    }
  }, 1000);
}

const hero = document.querySelector(".hero");
const backgroundImages = ["background.jpeg", "background1.jpeg", "background2.jpg"];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentBackground = 0;

if (hero && !prefersReducedMotion) {
  window.setInterval(function () {
    currentBackground = (currentBackground + 1) % backgroundImages.length;
    hero.dataset.background = backgroundImages[currentBackground];
    hero.style.backgroundImage = "linear-gradient(90deg, rgba(35, 18, 33, .77), rgba(35, 18, 33, .32)), url(\"" + backgroundImages[currentBackground] + "\")";
  }, 6000);
}
