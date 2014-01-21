get_window_width =-> window.document.body.offsetWidth
get_window_height =-> window.document.body.offsetHeight

$ ->
	loop_container = $('.infinite_loop_container')
	loop_inside = $('.infinite_loop_inside')
	loop_target = $('.infinite_loop_target')


	console.log 'inited', loop_container, loop_inside, loop_target

	container_width = loop_container.width()
	target_width = loop_target.width()
	target_clone_count = Math.round(container_width/target_width)+2

	console.log 'container width', container_width, 'target width', target_width, 'clone', target_clone_count

	loop_inside_width = (target_clone_count+1)*target_width  # plus one original target el
	loop_inside_endscroll = target_width * 2
	console.log loop_inside_endscroll
	loop_inside.css 'width', loop_inside_width

	for i in [1..target_clone_count]
		loop_inside.append loop_target.clone().addClass("clone_#{i}")
#			.css('background', "##{i}#{i}#{i}")  # for debug

	loop_container.scrollLeft target_width  # define start scroll position
	loop_container.bind 'scroll', (e)=>
		scroll_left = loop_container.scrollLeft()
		if scroll_left is 0 then loop_container.scrollLeft target_width
		if scroll_left >= loop_inside_endscroll then loop_container.scrollLeft (scroll_left-target_width)