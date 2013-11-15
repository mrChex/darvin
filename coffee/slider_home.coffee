get_window_width =-> window.document.body.offsetWidth

home_screen1 = home_screen2 = home_screen3 = home_screen4 = no
home_screen_2_theorytext = home_screen_2_line = home_screen_2_blockquote = no
home_screen3_blocks = home_screen3_blocks_0 = home_screen3_blocks_1 = home_screen3_blocks_2 = no

current_slide = 1
$ ->
	home_screen1 = $("#home_screen1")
	home_screen2 = $("#home_screen2")
	home_screen_2_theorytext = home_screen2.find('div.theorytext')
	home_screen_2_line = home_screen2.find('div.line')
	home_screen_2_blockquote = home_screen2.find('blockquote')

	home_screen3 = $("#home_screen3")
	home_screen3_blocks = home_screen3.find(".block_container")
	home_screen3_blocks_0 = $ home_screen3_blocks[0]
	home_screen3_blocks_1 = $ home_screen3_blocks[1]
	home_screen3_blocks_2 = $ home_screen3_blocks[2]

	home_screen4 = $("#home_screen4")

	resize = ->
		screen_height = home_screen1.height()
		$(".screen2, .screen3, .screen4").css 'margin-top', "-#{screen_height}px"
		return resize
	$( window ).resize resize()

	screen1_hide =->
		home_screen1.animate {left: -(get_window_width())},
			duration: 800
			complete: -> home_screen1.css 'opacity', 0

	screen2_show =->
		home_screen2.animate {right:0}, duration: 450, complete: ->
			home_screen_2_theorytext.animate opacity: 1, right: 0
			home_screen_2_blockquote.animate opacity: 1, left: 0
			home_screen_2_line.animate opacity: 1

	screen2_hide = (callback)->
		home_screen_2_theorytext.animate opacity: 0, left: -300
		home_screen_2_blockquote.animate opacity: 0, right: -300
		home_screen_2_line.animate {opacity: 0}, complete: ->
			callback?()
			home_screen2.animate {left:-(get_window_width())}, duration: 800, complete: ->
				home_screen2.css 'opacity', 0


	screen3_show =->
		home_screen3_blocks_0.css 'top', -200
		home_screen3_blocks_1.css 'bottom', -200
		home_screen3_blocks_2.css 'top', -200
		home_screen3.animate {right:0}, duration: 450, complete: ->
			home_screen3_blocks_0.animate top: 0, opacity: 1
			home_screen3_blocks_1.animate bottom: 0, opacity: 1
			home_screen3_blocks_2.animate top: 0, opacity: 1

	screen3_hide = (callback)->
		home_screen3_blocks_0.animate top: -200, opacity: 0
		home_screen3_blocks_1.animate bottom: -200, opacity: 0
		home_screen3_blocks_2.animate {top: -200, opacity: 0}, complete: ->
			callback?()
			home_screen3.animate {left:-(get_window_width())}, duration: 800, complete: ->
				home_screen3.css 'opacity', 0

	screen4_show =->
		home_screen4.animate {right: 0}, duration: 450, complete: ->
			console.log 'complete 4'






	slider = (screenI)->
		if screenI is 2
			screen1_hide()
			screen2_show()
		else if screenI is 3
			screen2_hide -> screen3_show()
		else if screenI is 4
			screen3_hide -> screen4_show()

		return yes

	next_slide =->
		console.log 'next slide'
		if current_slide == 4 then return $("#next_slide").css 'opacity', 0
		current_slide++
		slider(current_slide)
		if current_slide == 4 then return $("#next_slide").css 'opacity', 0

	slider_back =->
		if current_slide == 0 then return
		current_slide--
		$("#next_slide").css 'opacity', 1
		$("div.screen#{current_slide}").css('opacity', 1).animate {'left': 0}, complete: ->
			if current_slide == 2
				home_screen_2_theorytext.animate opacity: 1, left: 0
				home_screen_2_blockquote.animate opacity: 1, right: 0
				home_screen_2_line.animate opacity: 1
			if current_slide == 3
				home_screen3_blocks_0.css 'top', -200
				home_screen3_blocks_1.css 'bottom', -200
				home_screen3_blocks_2.css 'top', -200

				home_screen3_blocks_0.animate top: 0, opacity: 1
				home_screen3_blocks_1.animate bottom: 0, opacity: 1
				home_screen3_blocks_2.animate top: 0, opacity: 1

		$("div.screen#{current_slide+1}").animate {'right': -100}
	#	$("div.screen#{current_slide+1}>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000

		return yes

	$("#next_slide").bind 'mousedown', -> next_slide()

	$(document).keydown (e)->
		if e.which == 39 then return next_slide()
		if e.which == 37 then return slider_back()



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
