
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle links
    const toggleLinks = document.querySelectorAll('.message a');

    // Add click event listeners to toggle between forms
    toggleLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const forms = document.querySelectorAll('.form-box form');
            forms.forEach(form => {
                form.style.display = form.style.display === 'none' ? 'block' : 'none';
            });
        });
    });

    // Add basic validation to login form
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', event => {
        const username = loginForm.querySelector('input[name="username"]').value.trim();
        const password = loginForm.querySelector('input[name="password"]').value.trim();

        if (!username || !password) {
            event.preventDefault();
            alert('Please fill in both username and password.');
        }
    });

    // Add basic validation to register form
    const registerForm = document.querySelector('.register-form');
    registerForm.addEventListener('submit', event => {
        const username = registerForm.querySelector('input[name="username"]').value.trim();
        const email = registerForm.querySelector('input[name="email"]').value.trim();
        const password = registerForm.querySelector('input[name="password"]').value.trim();

        if (!username || !email || !password) {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});
