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

