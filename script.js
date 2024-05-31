document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value of the date input
    let dob = new Date(document.getElementById('dob').value);
    
    // Check if the date is valid
    if (isNaN(dob.getTime())) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    // Calculate the age
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDifference = today.getMonth() - dob.getMonth();

    // Adjust age if the current month is before the birth month or it's the birth month but the day hasn't occurred yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
});