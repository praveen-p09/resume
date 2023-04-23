let burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightnav = document.querySelector('.rightnav');

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".navbar ul li a");
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
burger.addEventListener('click', () => {
  rightnav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})

setInterval(updateTime, 1000);

function updateTime() {
  time.innerHTML = new Date();
}


window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

reveal();

const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);


const btn = document.querySelector(".btn");


btn.onclick = function (e) {


  let ripple = document.createElement("span");


  ripple.classList.add("ripple");


  this.appendChild(ripple);


  let x = e.clientX - e.target.offsetLeft;

  let y = e.clientY - e.target.offsetTop;


  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;


  setTimeout(() => {
    ripple.remove();
  }, 300);

};