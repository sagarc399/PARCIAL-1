document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
  
    emailInput.addEventListener('input', function() {
      const emailValue = this.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(emailValue)) {
        this.setCustomValidity('Por favor, introduce un correo electrónico válido.');
      } else {
        this.setCustomValidity('');
      }
    });
  });
  