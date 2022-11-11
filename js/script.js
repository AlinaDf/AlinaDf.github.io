$(document).ready(function() {
    $('.intro').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
    });

    $(window).load(function() {
        var images = $('img');
          images.each(function(i) {
            $(this).width($(this).width() / 2);
          });
      });
});