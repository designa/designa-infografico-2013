$(document).ready(function(){
  contagem_iniciada_horas_eventos_e_cursos = false;
  function iniciar_contagem_horas_eventos_e_cursos() {
    if (!contagem_iniciada_horas_eventos_e_cursos) {
      for (var i = 0; i <= 3200; i++) {
        (function(i) {
          setTimeout(function(){
            $(".horas-gastas-texto .horas span").html(i);
          },i*1)
        })(i);
      };
    };
    contagem_iniciada_horas_eventos_e_cursos = true;
  }

  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-11").position().top-1) && (scroll < $("#pagina-12").position().top)) {
      $(".eventos-e-cursos .aprendizado img").fadeIn();
      $(".eventos-e-cursos .aprendizado .pontilhado-esquerda, .eventos-e-cursos .aprendizado .pontilhado-direita").delay(500).fadeIn();
      $(".eventos-e-cursos .horas-gastas-texto .horas").delay(1000).fadeIn();

      setTimeout(function() {
        iniciar_contagem_horas_eventos_e_cursos();
      }, 1500);

      $(".eventos-e-cursos .horas-gastas-texto .labs").delay(5000).fadeIn();
      $(".eventos-e-cursos .horas-gastas-texto .equivalem-a-aproximadamente .equivalem").delay(6000).fadeIn();
      $(".eventos-e-cursos .horas-gastas-texto .equivalem-a-aproximadamente .nove-cursos").delay(7000).fadeIn();
      $(".eventos-e-cursos .horas-gastas-texto .pos-graduacao p").delay(8000).fadeIn();
      $(".eventos-e-cursos .horas-gastas-imagem").delay(9000).fadeIn();
      
    };
  });
})