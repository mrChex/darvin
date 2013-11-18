$ ->
	$("footer .open").on 'click', -> $("footer .slide_container").css(display: 'block').animate opacity: 1
	$("footer .close").on 'click', -> $("footer .slide_container").animate {opacity: 0}, complete: -> $(@).css display: 'none'

	next_slide_i = 1
	n = $("#next_slide")
#	setInterval ->
#		n.removeClass "next_slide_#{next_slide_i}"
##		n.css 'background', "url(images/next_slide_#{next_slide_i}.png) no-repeat"
#		next_slide_i += 1
#		if next_slide_i >= 7 then next_slide_i = 1
#		n.addClass "next_slide_#{next_slide_i}"
#	, 500