$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
  $('.carousel').carousel();

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 200){
      if(!flag){
        $("#navbar").css({"background-color": "rgb(255,255,255)"});
        flag = true;
      }
    } else{
      if(flag){
        $("#navbar").css({"background-color": "rgba(255,255,255,0.8)"});
        flag = false;
      }
    }
  });

// Redireccionando desde diferentes vistas.
  $("#about-gs").click(
    function () {
      location.href = '../index.html#about-gib-solutions'
    }
  );

  $("#about-us-gs").click(
    function () {
      location.href = '../index.html#about-us'
    }
  );

  $("#objectives-gs").click(
    function () {
      location.href = '../index.html#our-objectives'
    }
  );

  $("#clients-gs").click(
    function () {
      location.href = '../index.html#our-clients'
    }
  );

  $("#contact-us-gs").click(
    function () {
      location.href = '../index.html#contact-us'
    }
  );
});
