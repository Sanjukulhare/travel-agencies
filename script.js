document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const service = document.getElementById('service').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const guests = document.getElementById('guests').value;

    // Check if all fields are filled
    if (startDate && endDate && guests) {
        // Show booking summary
        const summaryDetails = document.getElementById('summary-details');
        summaryDetails.innerHTML = `
            <p><strong>Service:</strong> ${service.charAt(0).toUpperCase() + service.slice(1)}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Guests:</strong> ${guests}</p>
        `;
        document.getElementById('booking-summary').classList.remove('hidden');
        document.getElementById('booking-form').classList.add('hidden');
    } else {
        alert('Please fill in all the fields.');
    }
});

document.getElementById('confirm-booking').addEventListener('click', function() {
    alert('Booking Confirmed! We will send you a confirmation email.');
    window.location.reload();
});
