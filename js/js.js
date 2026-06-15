document.addEventListener("DOMContentLoaded", function() {


function updateButtonsForMobile() {
  // Проверяем ширину экрана (мобильные устройства до 768px)
  const isMobile = window.innerWidth <= 768;
  
  // Находим все кнопки с классом nav-button
  const buttons = document.querySelectorAll('.masterclass-card .nav-button');
  
  buttons.forEach(button => {
    if (isMobile) {
      // На мобилке ведем на zapis.html
      button.href = './zapis.html';
    } else {
      // На десктопе оставляем原来的 ссылки
      const parentCard = button.closest('.masterclass-card');
      if (parentCard.id === 'lin') {
        button.href = './masterclass-linogravura.html';
      } else if (parentCard.id === 'shel') {
        button.href = './masterclass-shelkografiya.html';
      } else if (parentCard.id === 'dia') {
        button.href = './masterclass-diatipiya.html';
      }
    }
  });
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', updateButtonsForMobile);

// Запускаем при изменении размера окна (если пользователь повернул телефон)
window.addEventListener('resize', updateButtonsForMobile);


});