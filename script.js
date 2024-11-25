const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');
    const skillBoxes = document.querySelectorAll('.skill-box');
    const portfolioSection = document.querySelector('.portfolio-section');

    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing after it has been shown
            }
        });
    }, observerOptions);

    // Observe each box
    boxes.forEach(box => {
        observer.observe(box);
    });

    skillBoxes.forEach(skillBox => {
        observer.observe(skillBox);
    })
    // Observe the portfolio section 
    observer.observe(portfolioSection);
});

// Function to check if an element is in the viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to add the visible class to elements
const handleScrollAnimation = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimation);

// Initial check
handleScrollAnimation();