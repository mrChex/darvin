$ ->
	$("footer .open").on 'click', -> $("footer .slide_container").css(display: 'block').animate opacity: 1
	$("footer .close").on 'click', -> $("footer .slide_container").animate {opacity: 0}, complete: -> $(@).css display: 'none'

	$(".homepage,.developmentpage,.strategypage,.teampage,.portfoliopage,.contactspage").height($(document).height()-110)
	$(window).trigger("resize")