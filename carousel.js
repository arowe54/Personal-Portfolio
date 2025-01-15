// Select carousel elements
const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector("#nextBtn");
const prevButton = document.querySelector("#prevBtn");

// Create an array of items dynamically based on existing content
const items = Array.from(carousel.children);

// Store the indices of the visible items (3 at a time)
let visibleStartIndex = 0;

// Function to render carousel items
function renderCarousel() {
  const visibleItems = items.slice(visibleStartIndex, visibleStartIndex + 3);
  if (visibleItems.length < 3) {
    visibleItems.push(
      ...items.slice(0, 3 - visibleItems.length) // Add items from the start if not enough items
    );
  }

  carousel.innerHTML = ""; // Clear current view
  visibleItems.forEach(item => {
    carousel.appendChild(item); // Add visible items to the view
  });
}

// Function to handle the "Next" button click
nextButton.addEventListener("click", () => {
  visibleStartIndex = (visibleStartIndex + 1) % items.length; // Increment index with wrap-around
  renderCarousel();
});

// Function to handle the "Prev" button click
prevButton.addEventListener("click", () => {
  visibleStartIndex =
    (visibleStartIndex - 1 + items.length) % items.length; // Decrement index with wrap-around
  renderCarousel();
});

// Initial rendering of the carousel
renderCarousel();
