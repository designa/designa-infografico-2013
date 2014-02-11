$(document).ready(function(){
	$(window).on("scroll", function() {
    var scroll = $(document).scrollTop();
    if (scroll > 0) {
      $(".voltar-ao-topo").fadeIn();
    }
    else {
    	$(".voltar-ao-topo").fadeOut();	
    }
  });

	var total_de_paginas = $(document).find("[id^=pagina]:last").attr("id").split("-")[1];
	for (var i = 1; i <= total_de_paginas; i++) {
		$('a[href^=#pagina-' + i + ']').on('click',function (e) {
			e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = '';
	    });
		});		
	};
});