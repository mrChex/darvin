(function() {
  $(function() {
    $("footer .open").on('click', function() {
      return $("footer .slide_container").css({
        display: 'block'
      }).animate({
        opacity: 1
      });
    });
    return $("footer .close").on('click', function() {
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
  });

}).call(this);
