// Show popup to choose Mentor or Mentee
document.getElementById('popup').style.display = 'flex';

document.getElementById('mentor-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('interests-section').style.display = 'block'; 
});

document.getElementById('mentee-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('interests-section').style.display = 'block'; 
});

// interest submission
document.getElementById('submit-interests-btn').addEventListener('click', function() {
    const selectedInterests = [];
    const checkboxes = document.querySelectorAll('.interest-options input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        selectedInterests.push(checkbox.value);
    });

    if (selectedInterests.length > 0) {
        document.getElementById('matches-section').style.display = 'block';
    } else {
        alert("Please select at least one interest.");
    }
});

const progressBarFill = document.getElementById('progress-bar-fill');

let progress = sessionStorage.getItem('progress') ? parseInt(sessionStorage.getItem('progress')) : 0;

const bookingList = document.getElementById('booking-list');

let storedBookings = sessionStorage.getItem('bookings') ? JSON.parse(sessionStorage.getItem('bookings')) : [];

function updateProgress(event) {
    if (progress < 100) {
        progress += 20; 
        progressBarFill.style.width = progress + '%';
        sessionStorage.setItem('progress', progress); 
        
        const bookedPerson = event.target.closest('.match-card').querySelector('p').innerText;
        
        if (!storedBookings.includes(bookedPerson)) {
            storedBookings.push(bookedPerson);
            sessionStorage.setItem('bookings', JSON.stringify(storedBookings)); 
        }

        displayBookings();
    }
}

function displayBookings() {
    bookingList.innerHTML = ''; 

    storedBookings.forEach(function(bookedPerson) {
        const listItem = document.createElement('li');
        listItem.textContent = bookedPerson;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            storedBookings = storedBookings.filter(item => item !== bookedPerson);
            sessionStorage.setItem('bookings', JSON.stringify(storedBookings)); 
            displayBookings();
        };

        listItem.appendChild(removeButton);

        bookingList.appendChild(listItem);
    });
}

document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', updateProgress);
});

window.onload = function() {
    progressBarFill.style.width = progress + '%';
    displayBookings(); 
};

