document.addEventListener('mousemove', (e) => {
  const overlay = document.querySelector('.overlay');
  const { clientX: x, clientY: y } = e;

  overlay.style.background = `
    radial-gradient(circle at ${x}px ${y}px, rgba(0,255,234,0.2), transparent),
    linear-gradient(45deg, rgba(0,255,234,0.2), rgba(255,2,102,0.2))
  `;
});
