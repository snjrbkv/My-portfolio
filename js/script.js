let elBurger = document.querySelectorAll(".burger");
let elClose = document.querySelectorAll(".side-bar--link");

elBurger.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.toggle("active");
  });
});

elClose.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.remove("active");
  });
});
