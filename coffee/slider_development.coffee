get_window_width =-> window.document.body.offsetWidth

$ ->
	resize =->
		$(".screen2").css 'margin-top', "-#{$('.screen1').height()}px"
		return resize
	$( window ).resize resize()
	current_slide = 0
	$("#developmentpage .menu_container .menu>div[data-type=item]").on 'click', (e)=>
		if e.target.className is 'inside' then target = $(e.target = $(e.target).parent())
		else target = $(e.target)
		value = target.data 'value'
		selected = $("#developmentpage .menu_container .menu>div.selected")
		selected.removeClass 'selected'
		selected_value = selected.data 'value'
		target.addClass 'selected'

		$("#developmentpage .screen1 .shape>.inside.#{selected_value}").animate {opacity: 0}, queue: false, complete:->
			$(@).css 'display', 'none'
			$("#developmentpage .screen1 .shape>.inside.#{value}").css {display: "block", opacity: 0}
			$("#developmentpage .screen1 .shape>.inside.#{value}").animate {opacity: 1}

	slide_next =->
		if current_slide == 1 then return
		current_slide++
		$("#next_slide").css display: 'none'
		$("#development_screen1").animate {left: -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		$("#development_screen2").animate {right: 0}
		$("#development_screen2>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000

	slide_back =->
		if current_slide == 0 then return
		current_slide--
		$("#next_slide").css display: 'block'
		$("#development_screen1").css('opacity', 1).animate {left: 0}
		$("#development_screen2").animate {right: -100}

	$("#next_slide").one 'click', slide_next
	$(document).keydown (e)->
		if e.which == 39 then return slide_next()
		if e.which == 37 then return slide_back()
