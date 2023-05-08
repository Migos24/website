var dropdowns = document.querySelectorAll('ul li ul');

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('mouseover', function() {
    this.style.display = 'block';
  });
  
  dropdown.addEventListener('mouseout', function() {
    this.style.display = 'none';
  });
});
