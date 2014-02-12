$(document).ready(function(){
  contagem_iniciada_latas = false;
  iniciada_preencher_latas = false;

  $(window).on("scroll",function(){
    var scroll = $(document).scrollTop();
    
    if ((scroll >= $("#pagina-9").position().top-1) && (scroll < $("#pagina-10").position().top)) {

      $(function(){
        $(".equipe-consumiu").typed({
          strings: ["nossa equipe consumiu"],
          typeSpeed: 30,
          backDelay: 500,
          loop: false,
          loopCount: false,
        });
      });

      $(".quanto-consumiu .cafe .quantidade").delay(2000).fadeIn();
      $(".quanto-consumiu .cafe .litros-de-cafe").delay(2500).fadeIn();
      $(".quanto-consumiu .cafe .seta-direita").delay(3000).fadeIn();
      $(".quanto-consumiu .arnaldo .cada-um-consumiu").delay(3500).fadeIn();
      $(".quanto-consumiu .arnaldo .por-dia").delay(4000).fadeIn();
      $(".quanto-consumiu .arnaldo .pode-isso").delay(5000).fadeIn();
      $(".quanto-consumiu .arnaldo .boneco-cafe").delay(5500).fadeIn();
      $(".quanto-consumiu .cafe .seta-baixo").delay(6500).fadeIn();
      $(".quanto-consumiu .refrigerante .equivalente-a").delay(7000).fadeIn();
      $(".quanto-consumiu .refrigerante .texto-latas").delay(7500).fadeIn();

      setTimeout(iniciar_contagem_latas, 8000);
      setTimeout(preencher_latas, 8000);

      function iniciar_contagem_latas() {
        if (!contagem_iniciada_latas) {
          for (var i = 0; i <= 1932; i++) {
            (function(i) {
              setTimeout(function(){
                $(".qtd-latas").html(i);
              },i*1)
            })(i);
          };
        };
        contagem_iniciada_latas = true;
      }

      function preencher_latas() {
        if (!iniciada_preencher_latas) {
          for (var i = 0; i <= 27; i++) {
            (function(i) {
              setTimeout(function(){
                $(".refrigerante .latas").append('<img src="img/lata.png">');
              },i*80)
            })(i);
          };
        };
        iniciada_preencher_latas = true;
      }  
    }  
  })
})