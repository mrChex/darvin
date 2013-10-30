(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var current_slide, resize;
    current_slide = 0;
    resize = function() {
      $(".screen2, .screen3, .screen4, .screen5").css('margin-top', "-" + ($('.screen1').height()) + "px");
      return resize;
    };
    $(window).resize(resize());
    return $("#next_slide").on('click', function() {
      current_slide++;
      if (current_slide === 4) {
        $(this).css('display', 'none');
      }
      console.log('slide', current_slide, $("div.screen" + current_slide));
      $("div.screen" + current_slide).animate({
        'left': -(get_window_width())
      }, {
        complete: function() {
          return $(this).css('opacity', 0);
        }
      });
      if (current_slide === 2) {
        current_slide = 3;
      }
      $("div.screen" + (current_slide + 1)).animate({
        'right': 0
      });
      return console.log('slide', current_slide, $("div.screen" + current_slide));
    });
  });

}).call(this);
