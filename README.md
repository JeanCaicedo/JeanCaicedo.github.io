# Portafolio — Jean Caicedo

Sitio web personal de portafolio desarrollado para mostrar mi perfil como desarrollador Full Stack: formación, habilidades, proyectos y una vía directa de contacto. El sitio está desplegado en GitHub Pages en [jeancaicedo.github.io](https://jeancaicedo.github.io/).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-0F6FFF?style=for-the-badge&logo=minutemailer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white)

## Secciones

- Sobre mí
- Educación y certificaciones (Platzi, Udemy, formación universitaria)
- Habilidades y tecnologías
- Proyectos destacados
- Formulario de contacto integrado con EmailJS

## Stack

- **HTML5** y **CSS3** como base de la estructura y estilos.
- **Tailwind CSS** para estilos utility-first, con `tailwind.config.js` personalizado.
- **JavaScript** vanilla para interactividad y lógica del sitio.
- **Framer Motion** para animaciones fluidas en la interfaz.
- **EmailJS** (`@emailjs/browser`) para el envío del formulario de contacto sin backend propio.
- Modo oscuro, diseño responsive y fondo en video (`images/fondo.mp4`) a pantalla completa.

## Deploy

Sitio en vivo: <https://jeancaicedo.github.io/>

Despliegue automático desde la rama `main` mediante GitHub Pages.

## Desarrollo local

```bash
git clone https://github.com/JeanCaicedo/JeanCaicedo.github.io.git
cd JeanCaicedo.github.io
npm install
# Abrir index.html directamente en el navegador
# o servirlo con Live Server / cualquier servidor estático.
```

> Nota: las claves de EmailJS se leen desde metaetiquetas en `index.html`
> (`emailjs-public-key`, `emailjs-service-id`, `emailjs-template-id`).

## Estructura del proyecto

```
JeanCaicedo.github.io/
├── images/             # Recursos gráficos (icono, fondo.mp4, capturas)
├── styles/             # Hojas de estilo (main.css)
├── index.html          # Página principal
├── script.js           # Lógica e interacciones
├── style.css           # Estilos adicionales
├── tailwind.config.js  # Configuración de Tailwind
├── package.json        # Dependencias (Tailwind, Framer Motion, EmailJS)
└── README.md
```

## Contacto

- **Email:** juliojeancarlos780@gmail.com
- **GitHub:** [JeanCaicedo](https://github.com/JeanCaicedo)
- **LinkedIn:** [jeanncaicedo](https://www.linkedin.com/in/jeanncaicedo/)

## Autor

Jean Caicedo — [@JeanCaicedo](https://github.com/JeanCaicedo)
LinkedIn: [jeanncaicedo](https://www.linkedin.com/in/jeanncaicedo/)
