// Simple Vue testimonial component for homepage
window.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('vue-testimonial')) return;
  var testimonialApp = new Vue({
    el: '#vue-testimonial',
    data: {
      testimonial: 'Splash made my child love swimming! The coaches are amazing and the classes are fun.',
      author: 'Priya S.'
    },
    template: `<div class='testimonial-box'>
    <p class='testimonial-text'>"{{ testimonial }}"</p>
    <p class='testimonial-author'>— {{ author }}</p>
  </div>`
  });
});