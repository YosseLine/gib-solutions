$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
  $('.carousel').carousel();

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 200){
      if(!flag){
        $("#navbar").css({"background-color": "rgb(231,231,231)"});
        flag = true;
      }
    } else{
      if(flag){
        $("#navbar").css({"background-color": "rgba(231,231,231,0.5)"});
        flag = false;
      }
    }
  });
});
