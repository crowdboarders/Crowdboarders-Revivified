$(document).ready(function(){
  $(".navbar-responsive").click(function() {
     if ($(".navbar-responsive > ul").css("display") == "none") {
      $(".navbar-responsive > ul").css("display","block");
     }
     else {
      $(".navbar-responsive > ul").css("display","none");
     }
  });
  $("#cogs").click(function(){
     if ($("#cogs > ul").css("display") == "none") {
      $("#cogs > ul").css("display","block");
     }
     else {
      $("#cogs > ul").css("display","none");
     }
  });


  $("div.href-div").click(function () {
      window.location.href = 'myareas.html'; 
  });

});