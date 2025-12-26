// === Loading Screen ===
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);
});

// === Smooth scrolling for navigation links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// === Apparition en douceur au scroll ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .hero-content, .product-details, .service-card, .contact-card, .hero-scroll").forEach(el => {
  observer.observe(el);
});

// === Boutons qui pulse au survol ===
document.querySelectorAll("button, .btn-contact").forEach(btn => {
  btn.addEventListener("mouseover", () => btn.classList.add("pulse"));
  btn.addEventListener("mouseout", () => btn.classList.remove("pulse"));
});
// === Navbar scroll effect ===
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // Add scrolled class when not at top
  if (currentScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  
  lastScrollY = currentScrollY;
});


// === Effet cartes 3D au survol ===
document.querySelectorAll(".card, .service-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `rotateY(${(x - rect.width/2)/10}deg) rotateX(${-(y - rect.height/2)/10}deg) scale(1.05)`;
    card.style.transition = "transform 0.1s";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    card.style.transition = "transform 0.5s";
  });
});

// === Données Produits ===
const productsData = {
  composants: {
    title: "🧩 Composants électroniques",
    description: "Nous proposons une large gamme de composants pour vos projets.",
    images: [
      { src: "https://images.unsplash.com/photo-1587202372775-98927f27b4ba?auto=format&fit=crop&w=600&q=80", text: "Cartes électroniques haute performance" },
      { src: "https://images.unsplash.com/photo-1581091870622-9c58c181fbbd?auto=format&fit=crop&w=600&q=80", text: "Capteurs de précision" }
    ]
  },
  robots: {
    title: "🤖 Equipements de votre choix",
    description: "Toute sorte d'imprimante, de projecteurs et autre equipements dont vous avez besoin dans votre bureau.",
    images: [
      { src: "https://images.unsplash.com/photo-1581090700227-4c4d3f0d7d83?auto=format&fit=crop&w=600&q=80", text: "" },
      { src: "https://images.unsplash.com/photo-1594007654729-e0c7a0c3e1f3?auto=format&fit=crop&w=600&q=80", text:"" }

    ]
  },
ordinateurs: {
  title: "💻 Ordinateurs",
  description: "Découvrez nos ordinateurs performants pour tous vos besoins professionnels et personnels.",
  images: [
    { src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", text:"" },
    { src: "https://images.unsplash.com/photo-1587202372775-3d63b9e6f4e0?auto=format&fit=crop&w=600&q=80" ,text:"" },
    { src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80" ,text:"" },
    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80" ,text:"" }
  ]
}


};


// === Affichage des produits dynamiques ===
function showProduct(type) {
  const details = document.getElementById("product-details");
  const product = productsData[type];

  details.innerHTML = `
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <div class="product-gallery">
      ${product.images.map(img => `
        <div class="fade-in">
          <img src="${img.src}" alt="${img.text}">
          <p>${img.text}</p>
        </div>
      `).join("")}
    </div>
  `;
}

// === Animation Hero texte ===
const heroText = document.querySelector(".hero-content h2");
const heroP = document.querySelector(".hero-content p");
const heroBtn = document.querySelector(".hero-content .btn");

// Initial state
heroText.style.opacity = "0";
heroText.style.transform = "translateY(50px)";
heroP.style.opacity = "0";
heroP.style.transform = "translateY(50px)";
heroBtn.style.opacity = "0";
heroBtn.style.transform = "translateY(50px)";

setTimeout(() => {
  heroText.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
  heroText.style.opacity = "1";
  heroText.style.transform = "translateY(0)";
}, 500);

setTimeout(() => {
  heroP.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
  heroP.style.opacity = "1";
  heroP.style.transform = "translateY(0)";
}, 1200);

setTimeout(() => {
  heroBtn.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
  heroBtn.style.opacity = "1";
  heroBtn.style.transform = "translateY(0)";
}, 1900);

// === Hero scroll indicator click ===
const heroScroll = document.querySelector(".hero-scroll");
if (heroScroll) {
  heroScroll.addEventListener("click", () => {
    document.querySelector("#products").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}



// === Testimonials Carousel ===
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const navDots = document.querySelectorAll('.nav-dot');

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
  navDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

navDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}, 5000);

// === Newsletter Form ===
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  
  // Simulate form submission
  setTimeout(() => {
    newsletterSuccess.style.display = 'flex';
    newsletterForm.style.display = 'none';
    
    // Reset form after 5 seconds
    setTimeout(() => {
      newsletterSuccess.style.display = 'none';
      newsletterForm.style.display = 'block';
      document.getElementById('newsletterEmail').value = '';
    }, 5000);
  }, 1000);
});

// === Back to Top Button ===
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// === Mobile Menu Toggle ===
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileMenuToggle.querySelector('i');
  icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.className = 'fas fa-bars';
  }
});

// === Particles and Bubbles Animation ===
class ParticleSystem {
  constructor(canvasId, particleCount = 50, color = "#00aaff") {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.particleCount = particleCount;
    this.color = color;
    this.particles = [];
    this.resize();
    this.init();
    this.animate();
    
    window.addEventListener("resize", () => this.resize());
  }
  
  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }
  
  init() {
    this.particles = [];
    for(let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.update(this.canvas.width, this.canvas.height);
      p.draw(this.ctx, this.color);
    });
    requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.opacity = Math.random() * 0.5 + 0.3;
  }
  
  update(width, height) {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > width) this.speedX *= -1;
    if(this.y < 0 || this.y > height) this.speedY *= -1;
  }
  
  draw(ctx, color) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Initialize particle systems for different sections
const heroParticles = new ParticleSystem("particles", 100, "#0f3460");
const productsBubbles = new ParticleSystem("bubblesProducts", 60, "rgba(255, 255, 255, 0.3)");
const servicesBubbles = new ParticleSystem("bubblesServices", 60, "rgba(255, 255, 255, 0.3)");
const testimonialsBubbles = new ParticleSystem("bubblesTestimonials", 60, "rgba(255, 255, 255, 0.3)");
