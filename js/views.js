$(document).ready(function(){
  // Redireccionando desde diferentes vistas.

   $("#about-us-gs").click(
     function () {
       $('html, body').stop().animate({
           scrollTop: $(window.location.href = '../index.html#about-us').attr('id').offset().top - 100
       }, 800);
   });

   $("#objectives-gs").click(
     function () {
       window.location.href = '../index.html#our-objectives';
   });

   $("#clients-gs").click(
     function () {
       window.location.href = '../index.html#our-clients';
   });

   $("#contact-us-gs").click(
     function () {
       window.location.href = '../index.html#contact-us';
   });
});
