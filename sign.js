document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        // Here you would typically handle form submission (e.g., send data to server)
        alert("Account created successfully!");
        // Reset the form
         // Redirect to a new webpage (replace 'success.html' with your desired URL)
         window.location.href = 'success.html'; 
        this.reset();
    }
});
