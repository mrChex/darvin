$ ->
	$("footer .open").on 'click', -> $("footer .slide_container").css(display: 'block').animate opacity: 1
	$("footer .close").on 'click', -> $("footer .slide_container").animate {opacity: 0}, complete: -> $(@).css display: 'none'

#	resize =->
#		$(".homepage,.developmentpage,.strategypage,.teampage,.portfoliopage,.contactspage").height($(document).height()-110)
#		$("footer").css 'top', $(document).height()-69
#	resize()
#	$(window).trigger("resize")
#	$(window).on "resize", resize