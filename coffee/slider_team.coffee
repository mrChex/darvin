get_window_width =-> window.document.body.offsetWidth

$ ->
	current_slide = 0

	resize =->
		$(".screen2, .screen3, .screen4, .screen5").css 'margin-top', "-#{$('.screen1').height()}px"
		return resize
	$( window ).resize resize()

	slide_next =->
		if current_slide == 4 then return
		current_slide++
		if current_slide == 4 then $("#next_slide").css 'display', 'none'
		console.log 'slide', current_slide, $("div.screen#{current_slide}")
		$("div.screen#{current_slide}").animate {'left': -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		$("div.screen#{current_slide+1}").animate {'right': 0}
		$("div.screen#{current_slide+1}>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000

	slide_back =->
		if current_slide == 0 then return
		$("#next_slide").css 'display', 'block'
		$("div.screen#{current_slide}").css('opacity', 1).animate {'left': 0}
		$("div.screen#{current_slide+1}").animate {'right': -100}
		current_slide--

	$(document).keydown (e)->
		if e.which == 39 then return slide_next()
		if e.which == 37 then return slide_back()

	$("#next_slide").on 'click', slide_next