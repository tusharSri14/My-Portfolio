// Typed effect
const typedText = ["Linux","Cloud Engineer","DevOps Enthusiast"];
let typedIndex = 0, charIndex = 0, currentText = "", isDeleting = false;
const typedElement = document.getElementById("typed");

function type() {
  if (!typedElement) return;
  currentText = typedText[typedIndex];
  if (isDeleting) charIndex--; else charIndex++;
  typedElement.innerText = currentText.slice(0,charIndex);
  if(!isDeleting && charIndex === currentText.length) { isDeleting=true; setTimeout(type,1000); return;}
  if(isDeleting && charIndex === 0){ isDeleting=false; typedIndex=(typedIndex+1)%typedText.length; }
  setTimeout(type,isDeleting?50:150);
}
type();

// Skills animation
const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const progress = entry.target.querySelector(".skill-progress");
      const width = progress.style.width;
      progress.style.width = "0";
      setTimeout(()=>{ progress.style.width = width; },100);
    }
  });
}, { threshold:0.5 });
skillCards.forEach(card => skillObserver.observe(card));

// Dark/Light toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.innerText = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Contact form with EmailJS
const contactForm = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm('service_yxguual', 'template_i66uezm', this)
    .then(() => {
      formMsg.innerText = "Your message has been sent!";
      contactForm.reset();
    })
    .catch(() => {
      formMsg.innerText = "Failed to send message. Please try again.";
    });
});

// Initialize AOS
AOS.init({ duration:1000, once:true });
