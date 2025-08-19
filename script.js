function updateScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    indicator.style.width = `${scrolled}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    mobileMenuButton?.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.add('translate-y-0', 'opacity-100', 'visible');
            mobileMenuButton.innerHTML = `
                <svg class="w-6 h-6 text-text-dark dark:text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
        } else {
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
            mobileMenuButton.innerHTML = `
                <svg class="w-6 h-6 text-text-dark dark:text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        }
    });

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate-fade-in');
        if (entry.target.id === 'habilidades') {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.width = bar.style.width || '100%';
                }, index * 100);
            });
        }
        observer.unobserve(entry.target);
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => observer.observe(section));

const contactForm = document.getElementById('contact-form');
const metaPublicKey = document.querySelector('meta[name="emailjs-public-key"]')?.getAttribute('content');
const metaServiceId = document.querySelector('meta[name="emailjs-service-id"]')?.getAttribute('content');
const metaTemplateId = document.querySelector('meta[name="emailjs-template-id"]')?.getAttribute('content');

if (window.emailjs && typeof emailjs.init === 'function' && metaPublicKey) {
    try { emailjs.init(metaPublicKey); } catch (_) {}
}

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!window.emailjs || !metaServiceId || !metaTemplateId) {
        alert('Configuración de EmailJS incompleta.');
        return;
    }
    try {
        await emailjs.sendForm(metaServiceId, metaTemplateId, form);
        alert('¡Mensaje enviado con éxito!');
        form.reset();
    } catch (error) {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
});

document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
    document.querySelectorAll('.parallax').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    document.querySelectorAll('[class*="animate-float"]').forEach((element, index) => {
        const multiplier = (index + 1) * 0.001;
        element.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const img = entry.target;
                if (img.dataset.src) img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            });
        });
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
});
