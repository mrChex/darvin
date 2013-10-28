(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var current_slide;
    current_slide = 0;
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
      return $("div.screen" + (current_slide + 1)).animate({
        'right': 0
      });
    });
  });

}).call(this);
