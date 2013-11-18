(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var current_slide, resize, slide_back, slide_next;
    current_slide = 0;
    resize = function() {
      $(".screen2, .screen3, .screen4, .screen5").css('margin-top', "-" + ($('.screen1').height()) + "px");
      return resize;
    };
    $(window).resize(resize());
    slide_next = function() {
      if (current_slide === 3) {
        return window.location = "contacts.html";
      }
      current_slide++;
      $("div.screen" + current_slide).animate({
        'left': -(get_window_width())
      }, {
        complete: function() {
          return $(this).css('opacity', 0);
        }
      });
      $("div.screen" + (current_slide + 1)).animate({
        'right': 0
      });
      $("div.screen" + (current_slide + 1) + ">*").css('opacity', 0).animate({
        'opacity': 1
      }, {
        duration: 1000
      });
      if (current_slide === 2) {
        return setTimeout(function() {
          $("div.screen" + (current_slide + 1) + " .block1, div.screen" + (current_slide + 1) + " .block3").animate({
            'top': 0
          });
          return $("div.screen" + (current_slide + 1) + " .block2").animate({
            'bottom': 0
          });
        }, 150);
      }
    };
    slide_back = function() {
      if (current_slide === 0) {
        return;
      }
      $("#next_slide").css('display', 'block');
      console.log('slide_back', current_slide);
      $("div.screen" + current_slide).css('opacity', 1).animate({
        'left': 0
      });
      $("div.screen" + (current_slide + 1)).animate({
        'right': -100
      });
      return current_slide--;
    };
    $(document).keydown(function(e) {
      if (e.which === 39) {
        return slide_next();
      }
      if (e.which === 37) {
        return slide_back();
      }
    });
    return $("#next_slide").on('click', slide_next);
  });

}).call(this);
