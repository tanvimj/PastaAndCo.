const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Improved scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = [
    { id: "latestInTown", animated: false },
    { id: "latestSubtitle", animated: false },
    { id: "foodContainer", animated: false },
    { id: "videoContainer", animated: false },
  ];

  function isElementInViewport(el, threshold = 0.3) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
  }

  function checkScroll() {
    elementsToAnimate.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element || item.animated) return;

      if (isElementInViewport(element)) {
        element.classList.add("animate");
        item.animated = true;
        console.log(`Animated: ${item.id}`);
      }
    });
  }

  // Throttle scroll events for better performance
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Listen for scroll events
  window.addEventListener("scroll", requestTick);

  // Check on page load
  checkScroll();
});

// Order button functionality
document.querySelector(".orderNow").addEventListener("click", function () {
  alert("Order functionality would be implemented here!");
});

document.querySelector(".ordernow").addEventListener("click", function () {
  window.location.href = "../LoginPage/index.html"; // Change to your file path
});

