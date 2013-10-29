(function() {
  var get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  $(function() {
    var resize,
      _this = this;
    resize = function() {
      $(".screen2").css('margin-top', "-" + ($('.screen1').height()) + "px");
      return resize;
    };
    $(window).resize(resize());
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
    return $("#next_slide").one('click', function(e) {
      $(e.target).css({
        display: 'none'
      });
      $("#development_screen1").animate({
        left: -(get_window_width())
      }, {
        complete: function() {
          return $(this).css('opacity', 0);
        }
      });
      return $("#development_screen2").animate({
        right: 0
      });
    });
  });

}).call(this);
