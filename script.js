// Importar EmailJS
import emailjs from '@emailjs/browser';

// Indicador de scroll
function updateScrollIndicator() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-indicator').style.width = `${scrolled}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

// Animaciones de entrada
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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

// Efecto de parallax suave
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.parallax').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
