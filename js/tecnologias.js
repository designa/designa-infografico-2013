$(document).ready(function(){
  $(window).on("scroll",function(){
    var scroll = $(document).scrollTop();
    
    if ((scroll >= $("#pagina-5").position().top-1) && (scroll < $("#pagina-6").position().top)) {
      $(".tecnologias-header h1").fadeIn();
      $(".tecnologias-header .divisoria").css("display", "inline-block");

      setTimeout(digitar, 500);

      $(".sistemas-web h2").delay(4000).fadeIn();
      $(".sistemas-web p").delay(4500).fadeIn();
      $(".grafico").delay(5000).fadeIn();
      $(".pizza").delay(5500).fadeIn();
      $(".sistemas-desktop h2").delay(5500).fadeIn();
      $(".sistemas-desktop p").delay(6000).fadeIn();
      $(".pontilhado-web").delay(7000).fadeIn();
      $(".pontilhado-web .fim-pontilhado").delay(8500).fadeIn();

      $(".ruby").delay(9000).fadeIn();
      $(".jscript").delay(10000).fadeIn();
      $(".css3").delay(10500).fadeIn();
      $(".html5").delay(11000).fadeIn();
      $(".mysql").delay(11500).fadeIn();
      $(".postgre").delay(12000).fadeIn();

      $(".pontilhado-desktop").delay(12500).fadeIn();
      $(".pontilhado-desktop .fim-pontilhado").delay(14000).fadeIn();
      $(".delphi").delay(14500).fadeIn();
      $(".firebird").delay(15000).fadeIn();

      $(document).mouseover(function(evt){
          var target = $(evt.target);
          if (target.hasClass("fundo-grafico") || target.hasClass("segundo-circulo")) {
              $(".web").show();
              $(".desktop").hide();
          }
          else if (target.hasClass("pizza")){
              $(".desktop").show();
              $(".web").hide();
          }
          else {
              $(".web").hide();
              $(".desktop").hide();
          }
      })

      function digitar() {
        $(".desenvolver").typed({
          strings: ["para desenvolver os projetos, fazemos uso das seguintes tecnologias"],
          typeSpeed: 1,
          backDelay: 500,
          loop: false,
          loopCount: false,
        });
      }
    };
  })
})