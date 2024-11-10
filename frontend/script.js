// Set points - replace these values as needed
let currentPoints = 50;  // Example current points
const maxPoints = 100;

// Set initial points message
document.getElementById("current-points").textContent = currentPoints;

// Calculate the fill width as a percentage
const fillPercentage = (currentPoints / maxPoints) * 100;

// Animate the fill bar
window.addEventListener('load', () => {
    const fill = document.getElementById("fill");
    fill.style.width = `${fillPercentage}%`;
});
