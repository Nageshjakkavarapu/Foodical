// Mock user data for demo purposes
let users = [];

// Show Signup Form
function showSignup() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

// Show Login Form
function showLogin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

// Signup Function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Add user to users array (mocking database)
  users.push({ email, password });
  alert("Signup successful! Please login.");
  showLogin();
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Validate user credentials
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    window.location.href = 'home.html';  // Redirect to home page
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function () {
      // Toggle the type attribute between password and text
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);

      // Toggle the icon
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });

