function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const messageElement = document.getElementById('message');

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '../main/test site.html'; // Redirect on successful login
            } else {
                messageElement.textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageElement.textContent = 'An error occurred.';
        });
}