function updateTime() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("current-time").textContent = `${hours}:${minutes}`;
  document.getElementById(
    "current-time-small"
  ).textContent = `${hours}:${minutes}`;

  // Date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

updateTime();
setInterval(updateTime, 60000);

function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

document.querySelectorAll(".app-icon, .dock-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
      this.style.transform = "scale(1.1)";
    }, 100);
  });
});

setInterval(() => {
  const batteryIcons = document.querySelectorAll(".fa-battery-three-quarters");
  const levels = [
    "fa-battery-empty",
    "fa-battery-quarter",
    "fa-battery-half",
    "fa-battery-three-quarters",
    "fa-battery-full"
  ];
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  batteryIcons.forEach((icon) => {
    icon.classList.remove(
      "fa-battery-empty",
      "fa-battery-quarter",
      "fa-battery-half",
      "fa-battery-three-quarters",
      "fa-battery-full"
    );
    icon.classList.add(randomLevel);
  });
}, 10000);

const wallpaper = document.querySelector(".wallpaper");
let angle = 0;
setInterval(() => {
  angle = (angle + 0.2) % 360;
  wallpaper.style.background = `linear-gradient(${angle}deg, #6e45e2 0%, #89d4cf 100%)`;
}, 100);
