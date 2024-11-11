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

// Get the progress bar element
const progressBarFill = document.getElementById('progress-bar-fill');

// Retrieve the stored progress value from sessionStorage
let progress = sessionStorage.getItem('progress') ? parseInt(sessionStorage.getItem('progress')) : 0;

// Reference the booking list (make sure this element exists in your HTML)
const bookingList = document.getElementById('booking-list');

// Retrieve stored bookings from sessionStorage
let storedBookings = sessionStorage.getItem('bookings') ? JSON.parse(sessionStorage.getItem('bookings')) : [];

// Function to update the progress bar and store the progress in sessionStorage
function updateProgress(event) {
    if (progress < 100) {
        progress += 20; // Adjust increment as needed
        progressBarFill.style.width = progress + '%';
        sessionStorage.setItem('progress', progress); // Save progress to sessionStorage

        // Get the name of the booked person from the button's parent card
        const bookedPerson = event.target.closest('.match-card').querySelector('p').innerText;
        
        // Add the booked person to the stored bookings array
        if (!storedBookings.includes(bookedPerson)) {
            storedBookings.push(bookedPerson);
            sessionStorage.setItem('bookings', JSON.stringify(storedBookings)); // Store the updated bookings in sessionStorage
        }

        // Update the booking list display
        displayBookings();
    }
}

// Function to display bookings from sessionStorage
function displayBookings() {
    bookingList.innerHTML = ''; // Clear the existing list

    // Render each booking from the stored bookings array
    storedBookings.forEach(function(bookedPerson) {
        const listItem = document.createElement('li');
        listItem.textContent = bookedPerson;

        // Create a remove button for each booking
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            // Remove the booking from the stored bookings array
            storedBookings = storedBookings.filter(item => item !== bookedPerson);
            sessionStorage.setItem('bookings', JSON.stringify(storedBookings)); // Update sessionStorage

            // Update the booking list display
            displayBookings();
        };

        // Add the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the new booking to the list
        bookingList.appendChild(listItem);
    });
}

// Attach the event listener to each "Book" button
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', updateProgress);
});

// Set the progress bar to the stored value on page load
window.onload = function() {
    progressBarFill.style.width = progress + '%';
    displayBookings(); // Display any stored bookings when the page loads
};

