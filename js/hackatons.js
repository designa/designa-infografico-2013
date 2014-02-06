$(document).ready(function(){
  contagem_iniciada_horas_hackaton = false;
  function iniciar_contagem_horas_hackaton() {
    if (!contagem_iniciada_horas_hackaton) {
      for (var i = 0; i <= 16; i++) {
        (function(i) {
          setTimeout(function(){
            $(".horas-iron-man").html(i);
          },i*50)
        })(i);
      };
    };
    contagem_iniciada_horas_hackaton = true;
  }

  $(window).on("scroll", function() {
    var body_height = $("body").height();
    var scroll = $(document).scrollTop();
    var scroll_responsive = (100*scroll/body_height)
    if (scroll_responsive >= 35 && scroll_responsive <= 37) {
      $(".maratona img, .maratona .pontilhado-esquerda, .maratona .pontilhado-direita").fadeIn();
      $(".hackatons h1").delay(1000).fadeIn();
      $(".hackatons .seta").delay(1500).fadeIn();

      setTimeout(function() {
        iniciar_contagem_horas_hackaton();
      }, 2000);

      $(".hackatons .tempo-suficiente").delay(2500).fadeIn();
    };

    if (scroll_responsive >= 38 && scroll_responsive <= 39) {
      $(".hackatons .fundo img, .hackatons .esteira, .hackatons .base, .hackatons .garra-esquerda, .hackatons .garra-direita").delay(1000).fadeIn();
    };
  });
})