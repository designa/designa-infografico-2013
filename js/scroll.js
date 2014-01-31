$(document).ready(function(){
	$(window).on("scroll", function() {
    var body_height = $("body").height();
    var scroll = $(document).scrollTop();
    var scroll_responsive = (100*scroll/body_height)
    if (scroll_responsive >= 5) {
      $(".voltar-ao-topo").fadeIn();
    }
    else {
    	$(".voltar-ao-topo").fadeOut();	
    }
  });

	for (var i = 1; i <= 4; i++) {
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