// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const projectImages = {
  lednlux: [
    "Images/Project-Images/LednLux/lednlux1.png",
    "Images/Project-Images/LednLux/lednlux2.png",
    "Images/Project-Images/LednLux/lednlux3.png",
    "Images/Project-Images/LednLux/lednlux4.png",
    "Images/Project-Images/LednLux/lednlux5.png",
    "Images/Project-Images/LednLux/lednlux6.png",
    "Images/Project-Images/LednLux/lednlux7.png",
    "Images/Project-Images/LednLux/lednlux8.png",
  ],

  replayvr: [
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot1.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot2.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot3.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot4.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot5.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot6.png",
    "Images/Project-Images/ReplayVr/ReplayVrScreenshot7.png",
  ],

  belisol: [
    "Images/Project-Images/Belisol/BelisolKleurenConfig1.png",
    "Images/Project-Images/Belisol/BelisolKleurenConfig2.png",
    "Images/Project-Images/Belisol/BelisolKleurenConfig3.png",
  ],

  grondwaterzuivering: [
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering1.png",
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering2.png",
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering3.png",
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering4.png",
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering5.png",
    "Images/Project-Images/Grondwaterzuivering-frontend/Grondwaterzuivering6.png",
  ],

  energysector: [
    "Images/Project-Images/Energy-Sector/EnergySector1.png",
    "Images/Project-Images/Energy-Sector/EnergySector2.png",
    "Images/Project-Images/Energy-Sector/EnergySector3.png",
    "Images/Project-Images/Energy-Sector/EnergySector4.png",
    "Images/Project-Images/Energy-Sector/EnergySector5.png",
    "Images/Project-Images/Energy-Sector/EnergySector6.png",
    "Images/Project-Images/Energy-Sector/EnergySector7.png",
    "Images/Project-Images/Energy-Sector/EnergySectorExtra.png",
  ],

  lednluxVr: [
    "Images/Project-Images/LednLuxVr/lednlux1.png",
    "Images/Project-Images/LednLuxVr/lednlux2.png",
    "Images/Project-Images/LednLuxVr/lednlux3.png",
    "Images/Project-Images/LednLuxVr/lednlux4.png",
    "Images/Project-Images/LednLuxVr/lednlux5.png",
    "Images/Project-Images/LednLuxVr/lednlux6.png",
  ],

  agri: [
    "Images/Project-Images/Agri/AgruKubota1.png",
    "Images/Project-Images/Agri/AgruKubota2.png",
    "Images/Project-Images/Agri/AgruKubota3.png",
    "Images/Project-Images/Agri/AgruKubota4.png",
  ],

  logistictraining: [
    "Images/Project-Images/Logis/Logis1.png",
    "Images/Project-Images/Logis/Logis2.png",
    "Images/Project-Images/Logis/Logis3.png",
    "Images/Project-Images/Logis/Logis4.png",
    "Images/Project-Images/Logis/Logis5.png",
  ],
};

const slideshows = document.querySelectorAll(".project-slideshow");

slideshows.forEach((img) => {
  const projectKey = img.dataset.project;
  const images = projectImages[projectKey];

  let index = 0;

  setInterval(() => {
    img.style.opacity = 0;
    img.style.transform = "scale(1.03)";

    setTimeout(() => {
      index = (index + 1) % images.length;
      img.src = images[index];

      img.style.opacity = 1;
      img.style.transform = "scale(1)";
    }, 400);
  }, 3000);
});
