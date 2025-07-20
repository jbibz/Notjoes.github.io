// === Mobile Nav Toggle ===
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// === Theme Switcher ===
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// === Contact Form Validation ===
const contactForm = document.getElementById('contact-form');

const isEmailValid = email => /\S+@\S+\.\S+/.test(email);

const showError = (input, message) => {
  const group = input.parentElement;
  group.querySelector('.error-message').textContent = message;
  input.classList.add('error');
};

const clearError = input => {
  const group = input.parentElement;
  group.querySelector('.error-message').textContent = '';
  input.classList.remove('error');
};

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  let hasError = false;

  // Inputs
  const nameInput    = contactForm.elements['name'];
  const emailInput   = contactForm.elements['email'];
  const messageInput = contactForm.elements['message'];

  // Clear previous
  [nameInput, emailInput, messageInput].forEach(clearError);

  // Validate
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    hasError = true;
  }
  if (!isEmailValid(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
    hasError = true;
  }
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message cannot be empty');
    hasError = true;
  }

  if (!hasError) {
    alert('Thank you! Your message has been sent. 📬');
    contactForm.reset();
  }
});
