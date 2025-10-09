// ================================
// ⌨️ TYPING EFFECT (Hero Section)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const titles = [
      "Aspiring DevOps Engineer ⚙️",
      "Cloud Enthusiast ☁️",
      "Automation Lover 🤖",
      "Lifelong Learner 📘"
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let isDeleting = false;

    function typeEffect() {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        typingElement.textContent = currentTitle.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
        }
      } else {
        typingElement.textContent = currentTitle.substring(0, charIndex++);
        if (charIndex === currentTitle.length + 2) {
          isDeleting = true;
        }
      }
      const delay = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeEffect, delay);
    }

    typeEffect();
  }
});

// ================================
// 🌙 THEME TOGGLE
// ================================
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const icon = toggleBtn.querySelector("i");
  if (document.body.classList.contains("light")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});

// ================================
// 🎞️ SCROLL REVEAL ANIMATION
// ================================
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((sec) => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================================
// 🖼️ CERTIFICATE MODAL
// ================================
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

// Function to open modal with smooth fade-in
function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
  setTimeout(() => modal.classList.add("active"), 10);
}

// Function to close modal smoothly
function closeModal() {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    modalImg.src = "";
  }, 300); // matches CSS animation duration
}

// Close modal on clicking background
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});
