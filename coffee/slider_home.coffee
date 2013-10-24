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

	$("#next_slide").bind 'mousedown', ->
		slider(++current_slide)
		if current_slide is 4 then $(@).css "display", 'none'

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
window.slider = slider
