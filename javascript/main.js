// menu humburger
const menu = document.querySelector("#menu");
const link = document.querySelector(".navlink");


menu.addEventListener("click",()=>{
    link.classList.toggle("active");
});

// remove li ketika di click
document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");
    link.classList.remove("active");
  })
);

// remove ul
const x = document.querySelector("#x");
x.addEventListener("click",()=>{
    link.classList.toggle("active");
});

// stiky windows
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
  
    navbar.classList.toggle("fixed", window.scrollY) > 0;
  });
  
  // scroll to top
const backTop = document.querySelector("#top");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

backTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});