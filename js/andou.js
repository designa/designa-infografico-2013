$(document).ready(function(){
  $(window).on("scroll",function(){
    var scroll = $(document).scrollTop();
    
    if ((scroll >= $("#pagina-10").position().top-1) && (scroll < $("#pagina-11").position().top)) {
      $(".andamos .andamos-texto .andamos-aproximadamente").fadeIn();

      setTimeout(escrever, 1000);

      $(".andamos .andamos-texto .ir-e-voltar").delay(1500).fadeIn();

      $(".andamos .andamos-imagem .pontilhado, .andamos .andamos-imagem .fim-pontilhado, .andamos .andamos-imagem img").delay(2000).fadeIn();
      $(".mesma-coisa .mesma-coisa-texto").delay(3000).fadeIn();
      $(".mesma-coisa .mesma-coisa-imagem .mapa, .mesma-coisa .mesma-coisa-imagem .pontilhado").delay(3500).fadeIn();
      $(".mesma-coisa .mesma-coisa-imagem .oiapoque-a-chui").delay(4000).fadeIn();
      $(".mesma-coisa .mesma-coisa-imagem .carro-menor").delay(4500).fadeIn();

      function escrever(){
        $(".qtd-andamos").typed({
          strings: ["50.000 km"],
          typeSpeed: 30,
          backDelay: 500,
          loop: false,
          loopCount: false,
        })
      }
    }
  })
})