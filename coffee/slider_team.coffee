get_window_width =-> window.document.body.offsetWidth

$ ->
	current_slide = 0

	$("#next_slide").on 'click', ->
		current_slide++
		if current_slide == 4 then $(@).css 'display', 'none'
		console.log 'slide', current_slide, $("div.screen#{current_slide}")
		$("div.screen#{current_slide}").animate {'left': -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		$("div.screen#{current_slide+1}").animate {'right': 0}