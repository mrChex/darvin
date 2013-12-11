(function() {
  $(function() {
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
    $(".homepage,.developmentpage,.strategypage,.teampage,.portfoliopage,.contactspage").height($(document).height() - 110);
    return $(window).trigger("resize");
  });

}).call(this);
