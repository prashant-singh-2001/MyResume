const observer = new IntersectionObserver((e) => {
  e.forEach((et) => {
    if (et.isIntersecting) {
      et.target.classList.add("show-item");
    } else {
      et.target.classList.remove("show-item");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hid");
hiddenElements.forEach((element) => observer.observe(element));

var typed = new Typed("#element", {
  strings: [
    "WEB DEVELOPER",
    "MERN STACK",
    "JAVA FULL STACK",
    "DATA ANALYST",
    "LEETCODE #10K",
    "HACKERRANK 5⭐",
  ],
  typeSpeed: 25,
  loop: true,
});
