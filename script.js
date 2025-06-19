// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
})

// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const mainNav = document.getElementById("mainNav")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  mainNav.classList.toggle("active")
})

// Close mobile nav when clicking on a link
const navLinks = document.querySelectorAll(".main-nav a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    mainNav.classList.remove("active")
  })
})

// Image Carousel Functionality
let currentSlide = 0
const images = document.querySelectorAll(".carousel-image")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

function showSlide(index) {
  // Hide all images
  images.forEach((img) => img.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Show current image and dot
  images[index].classList.add("active")
  dots[index].classList.add("active")
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length
  showSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length
  showSlide(currentSlide)
}

// Event listeners for carousel
nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index
    showSlide(currentSlide)
  })
})

// Auto-play carousel (optional)
// setInterval(nextSlide, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "#ffffff"
    header.style.backdropFilter = "none"
  }
})

// Intersection Observer for additional animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for custom animations
document.querySelectorAll(".experience-item").forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(20px)"
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(item)
})

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'), 10);
      currentIndex = index;
      showSlide(index);
    });
  });

  showSlide(currentIndex);
});
