// Efecto de resplandor suave que sigue al cursor
const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});
