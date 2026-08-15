// HAMBURGER SPAN SHOWS NAVIGATION LINKS WHEN CLICKED
const hamburger =
document.querySelector(".hamburger");

const navlinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    
    hamburger.classList.toggle("active");

    navlinks.classList.toggle("active");
});

// HEADER SHRINK WHEN SCROLLING

const header =
document.querySelector("header");

window.addEventListener("scroll", function() {
    if (window.scrollY >50) {
        header.classList.add("shrink");
    }else{
        header.classList.remove("shrink");
    }
});

// ACTIVE NAVIGATION LINKS  WHEN CLICKED 
const sections =
document.querySelectorAll("sections");

const navLinks =
document.querySelectorAll(".nav-links a");

const Header =
document.querySelector("header");

window.addEventListener("scroll", () => {
    let current = "";

    const headerHeight = header.offsetHeight;

    sections.forEach( section => {
        const sectionTop = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(Link => {
        Link.classList.remove("active");

        if (Link.getAttribute("href") === "#" + 
        current){
            Link.classList.add("active");
        }
    });
});

