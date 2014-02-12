$(document).ready(function(){
  contagem_iniciada_anos = false;
  ja_foi_escrito = false;
  tem_bonecos_azuis = false;
  tem_bonecos_brancos = false;

  $(window).on("scroll",function(){
    var scroll = $(document).scrollTop();
    
    if ((scroll >= $("#pagina-8").position().top-1) && (scroll < $("#pagina-9").position().top)) {
      $(".designa-cresceu .designa-team").fadeIn();
      $(".designa-cresceu .pontilhado-esquerda, .designa-cresceu .pontilhado-direita").delay(1000).fadeIn();
      $(".designa-cresceu .quanto-cresceu .porcentagem").delay(3500).fadeIn();
      $(".designa-cresceu .media-de-idade, .designa-cresceu .media-de-idade .media").delay(4500).fadeIn();
      $(".designa-cresceu .media-de-idade .numero, .designa-cresceu .media-de-idade .anos").delay(5000).fadeIn();

      setTimeout(iniciar_contagem_anos, 5000);

      $(".designa-cresceu .media-de-idade .boneco").delay(5500).fadeIn();
      $(".designa-cresceu .pontilhado-v").delay(7000).fadeIn();
      $(".designa-cresceu .pontilhado-h").delay(7500).fadeIn();
      $(".designa-cresceu .fim-pontilhado").delay(7500).fadeIn();
      
      setTimeout(preencher_bonecos_azuis, 8000);
      setTimeout(preencher_bonecos_brancos, 8500);

      $(".designa-cresceu .veteranos-e-novos, .designa-cresceu .veteranos").delay(8000).fadeIn();

      $(".designa-cresceu .grafico img").delay(8500).fadeIn();

      $(".designa-cresceu .novos, .linhas .primeira-linha, .linhas .primeira-ligacao").delay(9000).fadeIn();
      $(".linhas .primeira-ligacao .porcentagem, .linhas .primeira-ligacao .apple, .linhas .primeira-ligacao .circulo").delay(11000).fadeIn();

      $(".linhas .segunda-linha, .linhas .segunda-ligacao").delay(11500).fadeIn();
      $(".linhas .segunda-ligacao .porcentagem, .linhas .segunda-ligacao .circulo").delay(13500).fadeIn();

      $(".linhas .terceira-linha").delay(14000).fadeIn();
      $(".linhas .terceira-linha .porcentagem, .linhas .terceira-linha .windows, .linhas .terceira-linha .circulo").delay(15500).fadeIn();

      $(".legenda .apple").delay(15500).fadeIn();
      $(".legenda .linux").delay(16000).fadeIn();
      $(".legenda .windows").delay(16500).fadeIn();

      var mensagens = [["equipe designa"], ["cresceu"]];
      var elementos = [$(".quanto-cresceu .equipe-designa"), $(".quanto-cresceu .cresceu")];
      var tempo = 2000;

      if(!ja_foi_escrito) {
        for (var i = 0; i <= mensagens.length; i++) {
          (function(mensagem, elemento, tempo){
            setTimeout(function() {
              escrever(mensagem, elemento);
            }, tempo);
          })(mensagens[i], elementos[i], tempo);
          tempo += (i+1)*1000;
        };  
        ja_foi_escrito = true;
      }  
      
    };
    
    function iniciar_contagem_anos() {
      if (!contagem_iniciada_anos) {
        for (var i = 0; i <= 27; i++) {
          (function(i) {
            setTimeout(function(){
              $(".media-de-idade .numero").html(i);
            },i*100)
          })(i);
        };
      };
      contagem_iniciada_anos = true;
    }    

    function escrever(mensagem, elemento){
      elemento.typed({
        strings: mensagem,
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        loopCount: false,
      });
    };

    function preencher_bonecos_azuis() {
      if (!tem_bonecos_azuis) {
        for (var i = 0; i <= 4; i++) {
          (function(i) {
            setTimeout(function(){
              $(".bonecos").append('<div class="sombra"><img src="img/cliente_azul.png" class="cliente-azul"><span></span></div>');
            },i*100)
          })(i);
        };
      };
      tem_bonecos_azuis = true;
    }

    function preencher_bonecos_brancos() {
      if (!tem_bonecos_brancos) {
        for (var i = 0; i <= 5; i++) {
          (function(i) {
            setTimeout(function(){
              $(".bonecos").append('<div class="sombra"><img src="img/cliente_branco.png" class="cliente-branco"><span></span></div>');    
            },i*100)
          })(i);
        };
      };
      tem_bonecos_brancos = true;
    }
  })
})