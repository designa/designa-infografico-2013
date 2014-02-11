$(document).ready(function(){
  contagem_iniciada_clientes = false;
  function iniciar_contagem_clientes() {
    if (!contagem_iniciada_clientes) {
      for (var i = 0; i <= 25; i++) {
        (function(i) {
          setTimeout(function(){
            $(".contagem-clientes").html(i);
            $(".clientes").append('<img src="img/cliente.png" class="boneco-clientes">');
          },i*100)
        })(i);
      };
    };
    contagem_iniciada_clientes = true;
  }

  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-2").position().top-1) && (scroll < $("#pagina-3").position().top)) {
      iniciar_contagem_clientes();
    }
  });
})