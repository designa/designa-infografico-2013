$(document).ready(function(){
  contagem_iniciada_horas = false;
  function iniciar_contagem_horas() {
    if (!contagem_iniciada_horas) {
      for (var i = 0; i <= 16640; i++) {
        (function(i) {
          setTimeout(function(){
            $(".contagem-horas").html(i);
          },i*1)
        })(i);
      };
    };
    contagem_iniciada_horas = true;
  }

  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-3").position().top-1) && (scroll < $("#pagina-4").position().top)) {
      iniciar_contagem_horas();
    };
  });
})