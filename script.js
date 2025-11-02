// Navigation Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Smooth Scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic Projects (example, can be replaced with API later)
const projects = [
  { title: "Portfolio Website", description: "Modern personal portfolio with HTML, CSS, JS." },
  { title: "IoT Smart Home", description: "LPG gas leak detection using ESP32 & sensors." },
  { title: "Blog Platform", description: "Dynamic blog site using Node.js & PostgreSQL." }
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(p => {
  const div = document.createElement('div');
  div.classList.add('project-card');
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
  projectsContainer.appendChild(div);
});

// Contact Form Submission (can be connected to backend)
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Example: send via fetch to backend API
  fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => formStatus.innerText = "Message sent successfully!")
  .catch(err => formStatus.innerText = "Failed to send message.");
  
  form.reset();
});
