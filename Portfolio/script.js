// Smooth scroll for NavBar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// view Projects button click handler

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Email link click handler

const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {
    emailLink.addEventListener("click", function () {
        alert("Opening your email application 📧");
    });
}

// show social icons once when the page loads

const contactSection = document.getElementById("contact");
const socialIcons = document.querySelectorAll(".icon-circle");

let iconsAnimated = false;

function showIconsOnScroll() {

  if (iconsAnimated) return;

  const sectionTop = contactSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {

    socialIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transition = "0.6s ease";
        icon.style.opacity = "1";
        icon.style.transform = "translateY(0)";
      }, index * 200);
    });

    iconsAnimated = true;
  }
}

window.addEventListener("scroll", showIconsOnScroll);

// NavBar scroll effect

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

//scroll reveal animation

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
    const windowHeight= window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "0.6s ease";
        }
    });
}    

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);