(function() {
  $(function() {
    var n, next_slide_i;
    $("footer .open").on('click', function() {
      return $("footer .slide_container").css({
        display: 'block'
      }).animate({
        opacity: 1
      });
    });
    $("footer .close").on('click', function() {
      return $("footer .slide_container").animate({
        opacity: 0
      }, {
        complete: function() {
          return $(this).css({
            display: 'none'
          });
        }
      });
    });
    next_slide_i = 1;
    return n = $("#next_slide");
  });

}).call(this);
