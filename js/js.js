document.addEventListener("DOMContentLoaded", function() {


function updateButtonsForMobile() {

  const isMobile = window.innerWidth <= 768;
  

  const buttons = document.querySelectorAll('.masterclass-card .nav-button');
  
  buttons.forEach(button => {
    if (isMobile) {

      button.href = './zapis.html';
    } else {

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


document.addEventListener('DOMContentLoaded', updateButtonsForMobile);

window.addEventListener('resize', updateButtonsForMobile);


});