document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Form Fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        let valid = true;

        // Name Validation
        if (name.value.trim() === "") {
            showError(name, "Name is required");
            valid = false;
        } else {
            hideError(name);
        }

        // Email Validation
        if (!isValidEmail(email.value)) {
            showError(email, "Enter a valid email");
            valid = false;
        } else {
            hideError(email);
        }

        // Password Validation (Minimum 6 characters)
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters");
            valid = false;
        } else {
            hideError(password);
        }

        // If valid, simulate successful registration
        if (valid) {
            alert("Registration successful!");
            form.reset();
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to show error message
    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    // Function to hide error message
    function hideError(input) {
        const errorMessage = input.nextElementSibling;
        errorMessage.style.display = "none";
    }
});
