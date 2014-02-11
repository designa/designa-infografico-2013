$(document).ready(function(){
	$(window).on("scroll",function(){
    var scroll = $(document).scrollTop();
    if ((scroll >= $("#pagina-4").position().top-1) && (scroll < $("#pagina-5").position().top)) {
     	$(function(){

				$(".qts-projetos p").typed({
					strings: ["quantos projetos?"],
					typeSpeed: 30,
					backDelay: 500,
					loop: false,
					loopCount: false,
				});
			});
			$(".prancheta").delay(1000).fadeIn();
			$(".projetos-no-ano, .explicacao-repositorio").delay(2000).fadeIn();
			$(".repositorios-publicos").delay(2500).fadeIn();
			$(".github img").delay(3500).fadeIn();
			$(".github figcaption").delay(4500).fadeIn();
			$(".do-github").delay(5000).fadeIn();
			$(".conexao-repositorio").delay(7000).fadeIn();
			$(".para-o-bitbucket-h").delay(7500).fadeIn();
			$(".para-o-bitbucket-v").delay(9000).fadeIn();
			$(".bitbucket img").delay(10500).fadeIn();
			$(".bitbucket figcaption").delay(11000).fadeIn();
			$(".pontilhado-privado").delay(11500).fadeIn();
			$(".repositorios-privados").delay(12500).fadeIn();
    };
  })
})