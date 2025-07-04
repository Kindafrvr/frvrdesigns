const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(e.target) &&
    e.target !== menuIcon
  ) {
    navLinks.classList.remove("show");
  }
});

function openModal(src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal").classList.add("active");
}
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}
// Infinite brands scroll effect (duplicate images for seamless loop)
const brands = document.getElementById("brands");
if (brands) {
  // Duplicate the brands for seamless scroll
  brands.innerHTML += brands.innerHTML;
}
particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#91caff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0.7,
        color: "#3061db ",
      },
    },
    opacity: {
      value: 0.4,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3061db",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: true,
      },
      resize: true,
    },
  },
  retina_detect: true,
});
const launchDate = new Date("2025-09-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Shop is now live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

updateCountdown();
setInterval(updateCountdown, 1000);
