// Set current year in footer
document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});

// Bootstrap custom validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();