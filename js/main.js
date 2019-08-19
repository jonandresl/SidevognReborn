
(function ($) {
	"use strict";
	var nav = $('#navbarMain');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  });

  $(window).resize(function() {
    if ($(window).width() < 1200) {
          nav.addClass('navbar-reduce');
          nav.removeClass('navbar-trans');
          $('#logowhite').hide();
          $('#logogreen').show();
    }
  });

  $(document).ready(function() {
    if ($(window).width() < 1200) {
          nav.addClass('navbar-reduce');
          nav.removeClass('navbar-trans');
          $('#logowhite').hide();
          $('#logogreen').show();
    }
  });

  $(window).scroll(function() {
      var top = nav.height();
      if ($(window).width() > 1200) {
        if ($(window).scrollTop() >= top) {
            nav.addClass('navbar-reduce');
            nav.removeClass('navbar-trans');
            $('#logowhite').hide();
            $('#logogreen').show();

        } else {
            nav.addClass('navbar-trans');
            nav.removeClass('navbar-reduce');
            $('#logogreen').hide();
            $('#logowhite').show();
        }
      }
  });

  $('body').scrollspy({
    target: nav,
    offset: navHeight + 50
  });

})(jQuery);
