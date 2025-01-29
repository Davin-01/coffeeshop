function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    const success = Math.random() > 0.5; // Randomly simulate success or failure

    if (success) {
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
}