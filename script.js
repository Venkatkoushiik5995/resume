// JavaScript for Interactivity and Animations

// Highlighting text when a button is clicked
document.getElementById("highlightBtn").addEventListener("click", function () {
    const text = document.querySelector("main p");
    text.style.backgroundColor = "#ff0";
    text.style.color = "#000";
    text.style.padding = "10px";
    text.style.borderRadius = "5px";
});

// Adding an animation effect to the header when a button is clicked
document.getElementById("animateBtn").addEventListener("click", function () {
    const header = document.querySelector("header h1");
    header.style.transition = "transform 0.5s ease-in-out, color 0.5s";
    header.style.transform = "scale(1.2)";
    header.style.color = "#ff5733";

    // Reset animation after 1 second
    setTimeout(() => {
        header.style.transform = "scale(1)";
        header.style.color = "#fff";
    }, 1000);
});

// Add mouse hover effect to navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ff5733";
        link.style.transition = "color 0.3s";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#fff";
    });
});

const fadeInElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
});