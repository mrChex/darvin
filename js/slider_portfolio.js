(function() {
  var get_window_height, get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  get_window_height = function() {
    return window.document.body.offsetHeight;
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

  $(function() {
    var container_width, i, loop_container, loop_inside, loop_inside_endscroll, loop_inside_width, loop_target, screen_height, target_clone_count, target_width, _i,
      _this = this;
    loop_container = $('.infinite_loop_container');
    loop_inside = $('.infinite_loop_inside');
    loop_target = $('.infinite_loop_target');
    screen_height = get_window_height() - 110;
    loop_container.height(screen_height + 10);
    loop_inside.height(screen_height);
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
