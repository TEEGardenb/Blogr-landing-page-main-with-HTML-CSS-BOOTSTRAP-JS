const navbarr = document.querySelector(".navbar");

console.log("holaaa");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const scrollThreshold = 600;

  if (scrollY >= scrollThreshold) {
    navbarr.classList.add("nav-scroll");
  } else {
    navbarr.classList.remove("nav-scroll");
  }
});
