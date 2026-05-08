// Welcome Button Message
function showMessage() {
    alert("Welcome to Royal Stay Hotel Booking!");
}

// Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let room = document.getElementById("roomType").value;

    document.getElementById("confirmation").innerHTML =
        "Thank you, " + name +
        "! Your booking for " + room +
        " has been submitted successfully.";

    document.getElementById("bookingForm").reset();
});