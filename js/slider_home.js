(function() {
  var current_slide, get_window_width, home_screen1, home_screen2, home_screen3, home_screen3_blocks, home_screen3_blocks_0, home_screen3_blocks_1, home_screen3_blocks_2, home_screen4, home_screen_2_blockquote, home_screen_2_line, home_screen_2_theorytext;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  home_screen1 = home_screen2 = home_screen3 = home_screen4 = false;

  home_screen_2_theorytext = home_screen_2_line = home_screen_2_blockquote = false;

  home_screen3_blocks = home_screen3_blocks_0 = home_screen3_blocks_1 = home_screen3_blocks_2 = false;

  current_slide = 1;

  $(function() {
    var next_slide, resize, screen1_hide, screen2_hide, screen2_show, screen3_hide, screen3_show, screen4_show, slider, slider_back;
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
      } else if (screenI >= 4) {
        window.location = "development.html";
      }
      return true;
    };
    next_slide = function() {
      console.log('next slide');
      current_slide++;
      return slider(current_slide);
    };
    slider_back = function() {
      if (current_slide === 0) {
        return;
      }
      current_slide--;
      $("#next_slide").css('opacity', 1);
      $("div.screen" + current_slide).css('opacity', 1).animate({
        'left': 0
      }, {
        complete: function() {
          if (current_slide === 2) {
            home_screen_2_theorytext.animate({
              opacity: 1,
              left: 0
            });
            home_screen_2_blockquote.animate({
              opacity: 1,
              right: 0
            });
            home_screen_2_line.animate({
              opacity: 1
            });
          }
          if (current_slide === 3) {
            home_screen3_blocks_0.css('top', -200);
            home_screen3_blocks_1.css('bottom', -200);
            home_screen3_blocks_2.css('top', -200);
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
        }
      });
      $("div.screen" + (current_slide + 1)).animate({
        'right': -100
      });
      return true;
    };
    $("#next_slide").bind('mousedown', function() {
      return next_slide();
    });
    return $(document).keydown(function(e) {
      if (e.which === 39) {
        return next_slide();
      }
      if (e.which === 37) {
        return slider_back();
      }
    });
  });

  $(function() {
    var container_width, i, loop_container, loop_inside, loop_inside_endscroll, loop_inside_width, loop_target, target_clone_count, target_width, _i,
      _this = this;
    loop_container = $('.infinite_loop_container');
    loop_inside = $('.infinite_loop_inside');
    loop_target = $('.infinite_loop_target');
    console.log('inited', loop_container, loop_inside, loop_target);
    container_width = loop_container.width();
    target_width = loop_target.width();
    target_clone_count = Math.round(container_width / target_width) + 2;
    console.log('container width', container_width, 'target width', target_width, 'clone', target_clone_count);
    loop_inside_width = (target_clone_count + 1) * target_width;
    loop_inside_endscroll = target_width * 2;
    console.log(loop_inside_endscroll);
    loop_inside.css('width', loop_inside_width);
    for (i = _i = 1; 1 <= target_clone_count ? _i <= target_clone_count : _i >= target_clone_count; i = 1 <= target_clone_count ? ++_i : --_i) {
      loop_inside.append(loop_target.clone().addClass("clone_" + i));
    }
    loop_container.scrollLeft(target_width);
    return loop_container.bind('scroll', function(e) {
      var scroll_left;
      scroll_left = loop_container.scrollLeft();
      if (scroll_left === 0) {
        loop_container.scrollLeft(target_width);
      }
      if (scroll_left >= loop_inside_endscroll) {
        return loop_container.scrollLeft(scroll_left - target_width);
      }
    });
  });

}).call(this);
