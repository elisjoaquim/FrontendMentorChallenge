const body = document.querySelector("body");
const btnHamburger = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

//Toggle between to classes passed to the element
const toggleClass = (elementClassList, class1, class2) => {
  elementClassList.contains(class1)
    ? elementClassList.remove(class1) || elementClassList.add(class2)
    : elementClassList.remove(class2) || elementClassList.add(class1);
};

btnHamburger.addEventListener("click", () => {
  body.classList.toggle("noscroll");
  header.classList.toggle("open");
  toggleClass(overlay.classList, "fade-in", "fade-out");
  toggleClass(headerMenu.classList, "fade-in", "fade-out");
});
