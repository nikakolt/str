document.addEventListener("DOMContentLoaded", function() {

  const images = [
    "mo1.png",
    "mo2.png",
    "mo3.png",
    "mo4.png",
    "mo5.png",
    "mo6.png",
    "mo7.png",
    "mo8.png",
    "mo9.png",
    "mo10.png"
  ];

  const container = document.getElementById("container");
  let currentImageIndex = 0;
  let lastX = 0;
  let lastY = 0;
  let distanceThreshold = 180;

  window.addEventListener("mousemove", (e) => {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > distanceThreshold) {
      createTrail(e.clientX, e.clientY);
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });

  function createTrail(x, y) {
    const img = document.createElement("img");
    img.classList.add("image-trail");
    img.src = images[currentImageIndex];
    container.appendChild(img);

    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Начальные параметры
    gsap.set(img, {
      x: x - 120, // центрируем относительно курсора (ширина 240/2)
      y: y - 90,  // центрируем относительно курсора (высота 180/2)
      scale: 0,
      opacity: 0,
      rotation: gsap.utils.random(-20, 20)
    });

    // Анимация появления
    gsap.to(img, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Анимация исчезновения и удаления
    gsap.to(img, {
      scale: 0.2,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.in",
      onComplete: () => {
        img.remove();
      }
    });
  }

});