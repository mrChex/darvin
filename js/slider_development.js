(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var current_slide, resize, slide_back, slide_next,
      _this = this;
    resize = function() {
      $(".screen2").css('margin-top', "-" + ($('.screen1').height()) + "px");
      return resize;
    };
    $(window).resize(resize());
    current_slide = 0;
    $("#developmentpage .menu_container .menu>div[data-type=item]").on('click', function(e) {
      var selected, selected_value, target, value;
      if (e.target.className === 'inside') {
        target = $(e.target = $(e.target).parent());
      } else {
        target = $(e.target);
      }
      value = target.data('value');
      selected = $("#developmentpage .menu_container .menu>div.selected");
      selected.removeClass('selected');
      selected_value = selected.data('value');
      target.addClass('selected');
      return $("#developmentpage .screen1 .shape>.inside." + selected_value).animate({
        opacity: 0
      }, {
        queue: false,
        complete: function() {
          $(this).css('display', 'none');
          $("#developmentpage .screen1 .shape>.inside." + value).css({
            display: "block",
            opacity: 0
          });
          return $("#developmentpage .screen1 .shape>.inside." + value).animate({
            opacity: 1
          });
        }
      });
    });
    slide_next = function() {
      if (current_slide === 1) {
        return;
      }
      current_slide++;
      $("#next_slide").css({
        display: 'none'
      });
      $("#development_screen1").animate({
        left: -(get_window_width())
      }, {
        complete: function() {
          return $(this).css('opacity', 0);
        }
      });
      $("#development_screen2").animate({
        right: 0
      });
      return $("#development_screen2>*").css('opacity', 0).animate({
        'opacity': 1
      }, {
        duration: 1000
      });
    };
    slide_back = function() {
      if (current_slide === 0) {
        return;
      }
      current_slide--;
      $("#next_slide").css({
        display: 'block'
      });
      $("#development_screen1").css('opacity', 1).animate({
        left: 0
      });
      return $("#development_screen2").animate({
        right: -100
      });
    };
    $("#next_slide").one('click', slide_next);
    return $(document).keydown(function(e) {
      if (e.which === 39) {
        return slide_next();
      }
      if (e.which === 37) {
        return slide_back();
      }
    });
  });

}).call(this);
