$(document).ready(function(){
  contagem_iniciada_horas_express_projects = false;
  function iniciar_contagem_horas_express_projects() {
    if (!contagem_iniciada_horas_express_projects) {
      for (var i = 0; i <= 140; i++) {
        (function(i) {
          setTimeout(function(){
            $(".projects p span").html(i);
          },i*10)
        })(i);
      };
    };
    contagem_iniciada_horas_express_projects = true;
  }

  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-12").position().top-1) && (scroll < $("#pagina-13").position().top)) {
      $(".express-projects .projects h1").fadeIn();
      $(".express-projects .projects p").delay(500).fadeIn();
      $(".express-projects .caixas").delay(500).fadeIn(2000);

      setTimeout(function() {
        iniciar_contagem_horas_express_projects();
      }, 1000);
    };
  });
})