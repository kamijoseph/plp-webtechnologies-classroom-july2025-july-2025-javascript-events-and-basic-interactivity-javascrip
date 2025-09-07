// === Part 1: Event Handling ===
// Button click shows a message
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("messageOutput").textContent = "Button clicked!";
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// === Part 2: Interactive Elements ===
// Counter game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("countDisplay").textContent = count;
});

// FAQ collapsible
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});


// === Part 3: Form Validation ===
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation (non-empty, letters only)
  const name = document.getElementById("name").value.trim();
  if (!/^[a-zA-Z ]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Please enter a valid name.";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars, at least one number)
  const password = document.getElementById("password").value;
  if (!/^(?=.*\d).{6,}$/.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters and include a number.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});

