function toggleAvailability(mentorId) {
    const availabilityDiv = document.getElementById(`availability-${mentorId}`);
    availabilityDiv.style.display = (availabilityDiv.style.display === 'block') ? 'none' : 'block';
}

function bookSlot(mentorId, time) {
    alert(`You have booked a session with ${mentorId} at ${time}.`);
    // Here you can add logic to mark the slot as booked
}

function sendMessage() {
    const message = document.getElementById('chatInput').value;
    if (message) {
        const chatOutput = document.getElementById('chatOutput');
        chatOutput.innerHTML += `<p>${message}</p>`;
        document.getElementById('chatInput').value = ''; // Clear input
    } else {
        alert('Please type a message before sending.');
    }
}
// Modify booking function to add the session to the student's dashboard
function bookSlot(slotElement) {
    if (slotElement.innerText.includes("Available")) {
        slotElement.innerText = slotElement.innerText.replace("Available", "Booked");

        const sessionList = document.getElementById('sessionList');
        if (sessionList.innerText.includes("No upcoming sessions")) {
            sessionList.innerHTML = '';
        }

        const session = document.createElement('li');
        session.innerText = `Mentorship with ${slotElement.closest('.mentor-profile').querySelector('h3').innerText} at ${slotElement.innerText}`;
        sessionList.appendChild(session);

        alert("You have successfully booked this slot!");
    } else {
        alert("This slot is already booked.");
    }
}

// Open and close modal
function openModal() {
    document.getElementById('feedbackModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('feedbackModal').style.display = 'none';
}

// Submit feedback
function submitFeedback() {
    const feedback = document.getElementById('feedbackText').value;
    if (feedback.trim()) {
        alert("Thank you for your feedback!");
        closeModal();
    } else {
        alert("Please provide feedback before submitting.");
    }
}
