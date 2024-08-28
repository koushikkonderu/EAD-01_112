console.log("hey iam")
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }
    
    console.log('Username:', username);
    console.log('Password:', password);
    



