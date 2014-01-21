(function() {
  var get_window_height, get_window_width;

  get_window_width = function() {
    return window.document.body.offsetWidth;
  };

  get_window_height = function() {
    return window.document.body.offsetHeight;
  };

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
