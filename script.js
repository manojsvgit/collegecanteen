// Smooth scrolling when clicking on a category
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const targetID = this.getAttribute("href").substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetID); // Find the target section

    // Check if the target section exists
    if (targetSection) {
      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the top of the viewport
        inline: "nearest" // Adjust the horizontal alignment
      });
    } else {
      console.warn(`Target section with ID "${targetID}" not found.`);
    }
  });
});


// Intersection Observer to detect active section
const sections = document.querySelectorAll("section");
const categoryBtns = document.querySelectorAll(".category-btn");

const observerOptions = {
  threshold: 0.5, // 50% of the section must be visible to trigger
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const sectionID = entry.target.getAttribute("id");
    const relatedButton = document.querySelector(`a[href="#${sectionID}"]`);

    if (entry.isIntersecting) {
      relatedButton.classList.add("active");
    } else {
      relatedButton.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
