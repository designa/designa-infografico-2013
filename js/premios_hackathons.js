$(document).ready(function(){
  $(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-7").position().top-1) && (scroll < $("#pagina-8").position().top)) {
      $(".premios-hackathons .premios h1, .premios-hackathons .premios .estrela img").fadeIn();
      $(".premios-hackathons .youtube .imagem-youtube img").delay(1000).fadeIn();

      
      var mensagens_youtube = [["1º lugar"], ["Youtube Developer Day 2013"], ["Best product idea and design"]];
      var elementos_youtube = [$(".primeiro-lugar"), $(".youtube-developer"), $(".best-product")];
      var tempo_youtube = 2000;

      for (var i = 0; i <= mensagens_youtube.length; i++) {
        (function(mensagem, elemento, tempo_youtube){
          setTimeout(function() {
            escrever(mensagem, elemento);
          }, tempo_youtube);
        })(mensagens_youtube[i], elementos_youtube[i], tempo_youtube);
        tempo_youtube += (i+1)*1000;
      };

      $(".premios-hackathons .youtube .medalha img").delay(6000).fadeIn();
      $(".premios-hackathons .divisoria").delay(7000).fadeIn();
      $(".premios-hackathons .chrome .imagem-chrome img").delay(8000).fadeIn();

      var mensagens_chrome = [["2º lugar"], ["Google Chrome Apps Hackathon 2013"], ["Com a participação de Deivid Marques e Albert De La Fuente"]];
      var elementos_chrome = [$(".segundo-lugar"), $(".chrome-apps"), $(".participacao")];
      var tempo_chrome = 9000;

      for (var i = 0; i <= mensagens_chrome.length; i++) {
        (function(mensagem, elemento, tempo_chrome){
          setTimeout(function() {
            escrever(mensagem, elemento);
          }, tempo_chrome);
        })(mensagens_chrome[i], elementos_chrome[i], tempo_chrome);
        tempo_chrome += (i+1)*1000;
      };

      $(".premios-hackathons .explicacao-hackathon").delay(13000).fadeIn();      
    };
  });

  function escrever(mensagem, elemento){
    elemento.typed({
      strings: mensagem,
      typeSpeed: 30,
      backDelay: 500,
      loop: false,
      loopCount: false,
    });
  };
 
})