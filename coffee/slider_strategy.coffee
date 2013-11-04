get_window_width =-> window.document.body.offsetWidth

$ ->
	current_slide = 0

	resize =->
		$(".screen2, .screen3").css 'margin-top', "-#{$('.screen1').height()}px"
		return resize
	$( window ).resize resize()

	$("div.screen2 ul.poligons_container>li").on 'click', (e)->
		$("div.screen2 ul.poligons_container>li").removeClass 'selected'
		$(e.currentTarget).addClass 'selected'
		page = $(e.currentTarget).data 'page'
		triangle_settings =
			1: "-420px"
			2: "-310px"
			3: "-190px"
			4: "-70px"
			5: "50px"
			6: "170px"
			7: "290px"
			8: "410px"

		$("div.screen2 .description_container>.triangle").css 'left', triangle_settings[page]
		$("div.screen2 .description_container>.descriptions_text div[data-page]").css 'display', 'none'
		$("div.screen2 .description_container>.descriptions_text div[data-page=#{page}]").css {display: 'block', opacity: 0}
		$("div.screen2 .description_container>.descriptions_text div[data-page=#{page}]").animate opacity: 1

	$("#next_slide").on 'click', ->
		current_slide++
		if current_slide == 2 then $(@).css 'display', 'none'
		console.log 'slide', current_slide, $("div.screen#{current_slide}")
		$("div.screen#{current_slide}").animate {'left': -(get_window_width())}, complete: -> $(@).css 'opacity', 0
		$("div.screen#{current_slide+1}").animate {'right': 0}
		$("div.screen#{current_slide+1}>*").css('opacity', 0).animate {'opacity': 1}, duration: 1000
