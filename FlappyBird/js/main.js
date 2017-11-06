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
	}

	var game = new GameFrame(images, function (g) {
		var scene=new SceneTitle(game)

		g.runWithScene(scene)
	})
}

_main()