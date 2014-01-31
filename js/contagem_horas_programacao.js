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
    var body_height = $("body").height();
    var scroll = $(document).scrollTop();
    var scroll_responsive = (100*scroll/body_height)
    if (scroll_responsive >= 9 && scroll_responsive <= 10) {
      iniciar_contagem_horas();
    };
  });
})