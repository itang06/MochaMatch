// Show popup to choose Mentor or Mentee
document.getElementById('popup').style.display = 'flex';

document.getElementById('mentor-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Close the popup
    document.getElementById('interests-section').style.display = 'block'; // Show the interests section
    // You can handle Mentor-specific behavior here
});

document.getElementById('mentee-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Close the popup
    document.getElementById('interests-section').style.display = 'block'; // Show the interests section
    // You can handle Mentee-specific behavior here
});

// Handle interest submission
document.getElementById('submit-interests-btn').addEventListener('click', function() {
    const selectedInterests = [];
    const checkboxes = document.querySelectorAll('.interest-options input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        selectedInterests.push(checkbox.value);
    });

    // If there are selected interests, show the matches section
    if (selectedInterests.length > 0) {
        document.getElementById('matches-section').style.display = 'block';
    } else {
        alert("Please select at least one interest.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressHead = document.getElementById('progress-head');

    function updateProgress() {
        if (progress < 100) {
            progress += 20; // Increment progress by 20% with each booking
            progressBarFill.style.width = progress + '%';

            // Increase the size of the logo as progress increases
            const newSize = 40 + (progress * 0.3); // Adjust the scaling factor
            progressHead.style.width = `${newSize}px`;
            progressHead.style.height = `${newSize}px`;
        }
    }

    // Attach event listener to each "Book" button
    document.querySelectorAll('.book-button').forEach(button => {
        button.addEventListener('click', updateProgress);
    });
});


// Wait for the DOM to load to ensure the button is available
document.addEventListener('DOMContentLoaded', () => {
    // Select the book button
    const bookButton = document.querySelector('.book-button');
  
    // Add a click event listener to the book button
    bookButton.addEventListener('click', () => {
      startClinkingAnimation();
    });
  });