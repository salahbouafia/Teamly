function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const messageElement = document.getElementById('message');

    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
        .then(response => response.json())
        .then(data => {
            messageElement.textContent = data.message;
            if (data.success) {
                window.location.href = 'login.html'; // Redirect on successful signup
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageElement.textContent = 'An error occurred.';
        });
}