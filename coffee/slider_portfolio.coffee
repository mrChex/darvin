get_window_width =-> window.document.body.offsetWidth

$ ->
	current_slide = 0

	resize =->
		$(".screen2, .screen3, .screen4, .screen5").css 'margin-top', "-#{$('.screen1').height()}px"
		return resize
	$( window ).resize resize()

	slide_next =->
		if current_slide == 3 then return window.location = "contacts.html"
#		if current_slide == 2 then $("#next_slide").css('display', 'none') else $("#next_slide").css 'display', 'block'
		current_slide++
		$("div.screen#{current_slide}").animate {'left': -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		$("div.screen#{current_slide+1}").animate {'right': 0}
		$("div.screen#{current_slide+1}>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000

		# animate screen3
		if current_slide is 2
			setTimeout ->
				$("div.screen#{current_slide+1} .block1, div.screen#{current_slide+1} .block3").animate {'top': 0}
				$("div.screen#{current_slide+1} .block2").animate {'bottom': 0}
			, 150

	slide_back = ->
		if current_slide == 0 then return
		$("#next_slide").css 'display', 'block'
		console.log 'slide_back', current_slide
		$("div.screen#{current_slide}").css('opacity', 1).animate {'left': 0}
		$("div.screen#{current_slide+1}").animate {'right': -100}
		current_slide--

	$(document).keydown (e)->
		if e.which == 39 then return slide_next()
		if e.which == 37 then return slide_back()


	$("#next_slide").on 'click', slide_next


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