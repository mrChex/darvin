(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var current_slide, resize, slide_back, slide_next;
    current_slide = 0;
    resize = function() {
      $(".screen2, .screen3").css('margin-top', "-" + ($('.screen1').height()) + "px");
      return resize;
    };
    $(window).resize(resize());
    $("div.screen2 ul.poligons_container>li").on('click', function(e) {
      var page, triangle_settings;
      $("div.screen2 ul.poligons_container>li").removeClass('selected');
      $(e.currentTarget).addClass('selected');
      page = $(e.currentTarget).data('page');
      triangle_settings = {
        1: "-420px",
        2: "-310px",
        3: "-190px",
        4: "-70px",
        5: "50px",
        6: "170px",
        7: "290px",
        8: "410px"
      };
      $("div.screen2 .description_container>.triangle").css('left', triangle_settings[page]);
      $("div.screen2 .description_container>.descriptions_text div[data-page]").css('display', 'none');
      $("div.screen2 .description_container>.descriptions_text div[data-page=" + page + "]").css({
        display: 'block',
        opacity: 0
      });
      return $("div.screen2 .description_container>.descriptions_text div[data-page=" + page + "]").animate({
        opacity: 1
      });
    });
    slide_next = function() {
      if (current_slide === 2) {
        return window.location = "team.html";
      }
      current_slide++;
      console.log('slide', current_slide, $("div.screen" + current_slide));
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
      return $("div.screen" + (current_slide + 1) + ">*").css('opacity', 0).animate({
        'opacity': 1
      }, {
        duration: 1000
      });
    };
    slide_back = function() {
      if (current_slide === 0) {
        return;
      }
      $("#next_slide").css('display', 'block');
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
