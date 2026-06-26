# Portafolio — Jean Caicedo

Sitio web personal que presenta mi perfil en tres frentes — **desarrollo de software**, **soporte TI** y **roles administrativos** — con un cambio de enfoque interactivo, mis proyectos y una vía directa de contacto. Desplegado en GitHub Pages: [jeancaicedo.github.io](https://jeancaicedo.github.io/).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=githubpages&logoColor=white)

## Características

- **Perfil triple interactivo**: un selector cambia el rol (Desarrollo / Soporte TI / Oficina) y el mensaje se adapta a cada uno.
- **Diseño en una sola página** con índice lateral de secciones, barra de progreso de scroll y animaciones de aparición.
- **Fondo en video** a pantalla completa con superposición para legibilidad.
- **Catálogo de proyectos** filtrable por tipo (full-stack, backend/API, frontend, escritorio, bases de datos), enlazado a cada repositorio.
- **Edad calculada automáticamente** a partir de la fecha de nacimiento (se actualiza sola cada año).
- **Descarga de CV** en PDF y datos de contacto directos.
- Optimizado para compartir: metadatos **Open Graph / Twitter** con imagen de previsualización.
- Accesibilidad: respeta `prefers-reduced-motion` y oculta el video para quien desactiva animaciones.

## Secciones

- Inicio (presentación y selector de perfil)
- Sobre mí
- Perfil (lo que aporto en cada rol)
- Stack y herramientas
- Proyectos
- Contacto

## Stack

- **HTML5** y **CSS3** (CSS Grid, variables, animaciones y media queries) sin frameworks.
- **JavaScript vanilla** para el selector de rol, el filtro de proyectos, el índice de secciones (`IntersectionObserver`) y el cálculo automático de la edad.
- Tipografías de **Google Fonts** (Space Grotesk, Inter, JetBrains Mono).
- Sitio **single-file**: todo el HTML, CSS y JS viven en `index.html`.

## Deploy

Sitio en vivo: <https://jeancaicedo.github.io/>

Despliegue automático desde la rama `main` mediante GitHub Pages.

## Desarrollo local

```bash
git clone https://github.com/JeanCaicedo/JeanCaicedo.github.io.git
cd JeanCaicedo.github.io
# Abrir index.html directamente en el navegador,
# o servirlo con Live Server / cualquier servidor estático.
```

No requiere build ni dependencias: es HTML, CSS y JavaScript puro.

## Estructura del proyecto

```
JeanCaicedo.github.io/
├── images/             # Recursos: icono.png, og.png (preview), fondo.mp4
├── index.html          # Sitio completo (HTML + CSS + JS)
├── Curriculum.pdf      # CV descargable
└── README.md
```
