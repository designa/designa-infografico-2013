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
    var body_height = $("body").height();
    var scroll = $(document).scrollTop();
    var scroll_responsive = (100*scroll/body_height)
    if (scroll_responsive >= 5.5 && scroll_responsive <= 7) {
      iniciar_contagem_clientes();
    }
  });
})