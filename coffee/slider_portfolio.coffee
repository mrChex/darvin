get_window_width =-> window.document.body.offsetWidth

$ ->
	current_slide = 0

	resize =->
		$(".screen2, .screen3, .screen4, .screen5").css 'margin-top', "-#{$('.screen1').height()}px"
		return resize
	$( window ).resize resize()

	$("#next_slide").on 'click', ->
		current_slide++
		if current_slide == 4 then $(@).css 'display', 'none'
		$("div.screen#{current_slide}").animate {'left': -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		if current_slide == 2 then current_slide = 3  # hack. screen3 reserved
		$("div.screen#{current_slide+1}").animate {'right': 0}
		$("div.screen#{current_slide+1}>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000