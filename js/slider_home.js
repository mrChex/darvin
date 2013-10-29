(function() {
  var current_slide, get_window_width, home_screen1, home_screen2, home_screen3, home_screen3_blocks, home_screen3_blocks_0, home_screen3_blocks_1, home_screen3_blocks_2, home_screen4, home_screen_2_blockquote, home_screen_2_line, home_screen_2_theorytext, screen1_hide, screen2_hide, screen2_show, screen3_hide, screen3_show, screen4_show, slider;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  home_screen1 = home_screen2 = home_screen3 = home_screen4 = false;

  home_screen_2_theorytext = home_screen_2_line = home_screen_2_blockquote = false;

  home_screen3_blocks = home_screen3_blocks_0 = home_screen3_blocks_1 = home_screen3_blocks_2 = false;

  current_slide = 1;

  $(function() {
    var resize;
    home_screen1 = $("#home_screen1");
    home_screen2 = $("#home_screen2");
    home_screen_2_theorytext = home_screen2.find('div.theorytext');
    home_screen_2_line = home_screen2.find('div.line');
    home_screen_2_blockquote = home_screen2.find('blockquote');
    home_screen3 = $("#home_screen3");
    home_screen3_blocks = home_screen3.find(".block_container");
    home_screen3_blocks_0 = $(home_screen3_blocks[0]);
    home_screen3_blocks_1 = $(home_screen3_blocks[1]);
    home_screen3_blocks_2 = $(home_screen3_blocks[2]);
    home_screen4 = $("#home_screen4");
    resize = function() {
      var screen_height;
      screen_height = home_screen1.height();
      $(".screen2, .screen3, .screen4").css('margin-top', "-" + screen_height + "px");
      return resize;
    };
    $(window).resize(resize());
    return $("#next_slide").bind('mousedown', function() {
      slider(++current_slide);
      if (current_slide === 4) {
        return $(this).css("display", 'none');
      }
    });
  });

  screen1_hide = function() {
    return home_screen1.animate({
      left: -(get_window_width())
    }, {
      duration: 800,
      complete: function() {
        return home_screen1.css('opacity', 0);
      }
    });
  };

  screen2_show = function() {
    return home_screen2.animate({
      right: 0
    }, {
      duration: 450,
      complete: function() {
        home_screen_2_theorytext.animate({
          opacity: 1,
          right: 0
        });
        home_screen_2_blockquote.animate({
          opacity: 1,
          left: 0
        });
        return home_screen_2_line.animate({
          opacity: 1
        });
      }
    });
  };

  screen2_hide = function(callback) {
    home_screen_2_theorytext.animate({
      opacity: 0,
      left: -300
    });
    home_screen_2_blockquote.animate({
      opacity: 0,
      right: -300
    });
    return home_screen_2_line.animate({
      opacity: 0
    }, {
      complete: function() {
        if (typeof callback === "function") {
          callback();
        }
        return home_screen2.animate({
          left: -(get_window_width())
        }, {
          duration: 800,
          complete: function() {
            return home_screen2.css('opacity', 0);
          }
        });
      }
    });
  };

  screen3_show = function() {
    home_screen3_blocks_0.css('top', -200);
    home_screen3_blocks_1.css('bottom', -200);
    home_screen3_blocks_2.css('top', -200);
    return home_screen3.animate({
      right: 0
    }, {
      duration: 450,
      complete: function() {
        home_screen3_blocks_0.animate({
          top: 0,
          opacity: 1
        });
        home_screen3_blocks_1.animate({
          bottom: 0,
          opacity: 1
        });
        return home_screen3_blocks_2.animate({
          top: 0,
          opacity: 1
        });
      }
    });
  };

  screen3_hide = function(callback) {
    home_screen3_blocks_0.animate({
      top: -200,
      opacity: 0
    });
    home_screen3_blocks_1.animate({
      bottom: -200,
      opacity: 0
    });
    return home_screen3_blocks_2.animate({
      top: -200,
      opacity: 0
    }, {
      complete: function() {
        if (typeof callback === "function") {
          callback();
        }
        return home_screen3.animate({
          left: -(get_window_width())
        }, {
          duration: 800,
          complete: function() {
            return home_screen3.css('opacity', 0);
          }
        });
      }
    });
  };

  screen4_show = function() {
    return home_screen4.animate({
      right: 0
    }, {
      duration: 450,
      complete: function() {
        return console.log('complete 4');
      }
    });
  };

  slider = function(screenI) {
    if (screenI === 2) {
      screen1_hide();
      screen2_show();
    } else if (screenI === 3) {
      screen2_hide(function() {
        return screen3_show();
      });
    } else if (screenI === 4) {
      screen3_hide(function() {
        return screen4_show();
      });
    }
    return true;
  };

  window.slider = slider;

}).call(this);
