// Importar EmailJS
import emailjs from '@emailjs/browser';

// Indicador de scroll
function updateScrollIndicator() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-indicator').style.width = `${scrolled}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileMenuButton?.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.add('translate-y-0', 'opacity-100', 'visible');
            // Cambiar icono a X
            mobileMenuButton.innerHTML = `
                <svg class="w-6 h-6 text-text-dark dark:text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
        } else {
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
            // Cambiar icono a hamburguesa
            mobileMenuButton.innerHTML = `
                <svg class="w-6 h-6 text-text-dark dark:text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        }
    });

    // Cerrar menu al hacer click en un enlace
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
            mobileMenuButton.innerHTML = `
                <svg class="w-6 h-6 text-text-dark dark:text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animaciones de entrada mejoradas
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animar barras de progreso de habilidades
            if (entry.target.id === 'habilidades') {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.width || '100%';
                    }, index * 100);
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const formData = new FormData(contactForm);
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            Object.fromEntries(formData),
            'YOUR_PUBLIC_KEY'
        );
        
        alert('¡Mensaje enviado con éxito!');
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
});

// Carrusel de proyectos
class ProjectCarousel {
    constructor(element) {
        this.container = element;
        this.slides = [...element.children];
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.update();
    }
    
    createControls() {
        const controls = document.createElement('div');
        controls.className = 'flex justify-center gap-4 mt-4';
        
        const prevButton = document.createElement('button');
        prevButton.className = 'btn-primary';
        prevButton.textContent = 'Anterior';
        prevButton.onclick = () => this.prev();
        
        const nextButton = document.createElement('button');
        nextButton.className = 'btn-primary';
        nextButton.textContent = 'Siguiente';
        nextButton.onclick = () => this.next();
        
        controls.appendChild(prevButton);
        controls.appendChild(nextButton);
        
        this.container.parentNode.appendChild(controls);
    }
    
    update() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - this.currentIndex)}%)`;
            slide.style.opacity = index === this.currentIndex ? '1' : '0.5';
        });
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.update();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.update();
    }
}

// Inicializar carrusel si existe
const projectsContainer = document.querySelector('.projects-container');
if (projectsContainer) {
    new ProjectCarousel(projectsContainer);
}

// Efecto de parallax suave mejorado
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
    
    document.querySelectorAll('.parallax').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Efecto parallax para elementos decorativos
    document.querySelectorAll('[class*="animate-float"]').forEach((element, index) => {
        const multiplier = (index + 1) * 0.001;
        element.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
    });
});

// Mejoras de rendimiento
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imágenes
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
