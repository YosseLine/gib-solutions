$(document).ready(function(){
  /*Función scroll*/
  function scrollNav() {
 $('#navbar a').click(function(){
   $('html, body').stop().animate({
       scrollTop: $( $(this).attr('href') ).offset().top - 100
   }, 800);
   return false;
 });
}
scrollNav();
});
