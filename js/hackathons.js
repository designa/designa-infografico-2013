$(document).ready(function(){
  contagem_iniciada_horas_hackathon = false;
  function iniciar_contagem_horas_hackathon() {
    if (!contagem_iniciada_horas_hackathon) {
      for (var i = 0; i <= 16; i++) {
        (function(i) {
          setTimeout(function(){
            $(".horas-iron-man").html(i);
          },i*50)
        })(i);
      };
    };
    contagem_iniciada_horas_hackathon = true;
  }

  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-6").position().top-1) && (scroll < $("#pagina-7").position().top)) {
      $(".maratona img, .maratona .pontilhado-esquerda, .maratona .pontilhado-direita").fadeIn();
      $(".hackathons h1").delay(1000).fadeIn();
      $(".hackathons .seta").delay(1500).fadeIn();

      setTimeout(function() {
        iniciar_contagem_horas_hackathon();
      }, 2000);

      $(".hackathons .tempo-suficiente").delay(2500).fadeIn();
      $(".hackathons .fundo img, .hackathons .esteira, .hackathons .base, .hackathons .garra-esquerda, .hackathons .garra-direita").delay(3000).fadeIn();
    };
  });
})