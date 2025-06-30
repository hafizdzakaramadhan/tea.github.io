let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-menu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open")
};

//menu ditutup saat klik di luar menu
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove("open");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    menu.classList.remove("bx-x");
  }
});

//AOS & GSAP

AOS.init();

gsap.from(".header-title h3", {
    opacity: 0,
    y: -20,
    delay: 1.5,
    duration: 0.5,
})

gsap.from(".header-title h1", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
})

gsap.from(".header-btn", {
    opacity: 0,
    y: 20,
    delay: 1.5,
    duration: 0.5,
})

//ANIMATION ON SCROll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } 
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe (el));

//shadow navbar

window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset >= 30){
        navbar.classList.add("shadow-navbar");
    }else{
        navbar.classList.remove("shadow-navbar");
    }
})