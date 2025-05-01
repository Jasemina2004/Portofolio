
  // script.js

// Smooth scroll to "about" when clicking the Know more button
document.querySelector('.cta-btn--hero').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Simple form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    if (!name.value || !email.value || !message.value) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Optional: add more email format validation here
    alert('Thank you for your message, ' + name.value + '!');
    this.reset();
  });
  
  // Fade-in elements on scroll
  const hiddenElements = document.querySelectorAll('.load-hidden');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('load-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  hiddenElements.forEach(el => observer.observe(el));
  const words = [
    'junior IT Specialist',
    'junior Web Designer',
    'student',
    'tech enthusiast',
    'bug tester',
    'data analyst'
  ];
  
  let currentWordIndex = 0;
  const rotatingText = document.getElementById('rotating-text');
  
  setInterval(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    rotatingText.textContent = words[currentWordIndex];
  }, 2500); // Ndrysho çdo 2.5 sekonda
    