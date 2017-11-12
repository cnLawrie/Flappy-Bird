var _main = function () {
	fps = 50
	var images = {
		background: 'img/background.png',
		land: 'img/land.png',
		bird0: 'img/bird0_0.png',
		bird1: 'img/bird0_1.png',
		bird2: 'img/bird0_2.png', 
		pipe0: 'img/pipe_down.png',
		pipe1: 'img/pipe_up.png',
		tutorial: 'img/tutorial.png',
		text_ready: 'img/text_ready.png',
		text_game_over: 'img/text_game_over.png',
		score_panel: 'img/score_panel.png',
		button_play: 'img/button_play.png',
		title: 'img/title.png',
		medal_0: 'img/medals_0.png',
		medal_1: 'img/medals_1.png',
		medal_2: 'img/medals_2.png',
		medal_3: 'img/medals_3.png',
		score_0: 'img/font_048.png',
		score_1: 'img/font_049.png',
		score_2: 'img/font_050.png',
		score_3: 'img/font_051.png',
		score_4: 'img/font_052.png',
		score_5: 'img/font_053.png',
		score_6: 'img/font_054.png',
		score_7: 'img/font_055.png',
		score_8: 'img/font_056.png',
		score_9: 'img/font_057.png',
		number_score_0: 'img/number_score_00.png',
		number_score_1: 'img/number_score_01.png',
		number_score_2: 'img/number_score_02.png',
		number_score_3: 'img/number_score_03.png',
		number_score_4: 'img/number_score_04.png',
		number_score_5: 'img/number_score_05.png',
		number_score_6: 'img/number_score_06.png',
		number_score_7: 'img/number_score_07.png',
		number_score_8: 'img/number_score_08.png',
		number_score_9: 'img/number_score_09.png',
	}

	var game = new GameFrame(images, function (g) {
		var scene=new SceneTitle(game)

		g.runWithScene(scene)
	})
}

_main()