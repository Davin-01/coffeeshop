// Example for handling login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    alert(`Logged in with email: ${email}`);
    // You can redirect to home or dashboard page after successful login
    window.location.href = "index.html"; // Redirect to home page
});

// Example for handling register form submission
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    alert(`Registered with name: ${name}, email: ${email}`);
    // You can redirect to login page after successful registration
    window.location.href = "login.html"; // Redirect to login page
});
