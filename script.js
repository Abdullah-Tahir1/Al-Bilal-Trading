const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 100); // Delay in milliseconds
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1, // Trigger when at least 10% of the target is visible
  }
);

// Selecting elements by the data-section attribute if needed
const hiddenElements = document.querySelectorAll(".section.hidden");
hiddenElements.forEach((el) => observer.observe(el));
