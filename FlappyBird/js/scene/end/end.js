class SceneEnd extends Scene{
	
    constructor(game){
        super(game)
        this.setup()
    }

    setup() {
		this.bg = new MyImage(this.game, 'background')
		this.land1 = new MyImage(this.game, 'land',0,520)
		this.land2 = new MyImage(this.game, 'land',this.land1.texture.width,520)
        this.bird = new Bird(this.game)
        this.text_game_over = new MyImage(this.game, 'text_game_over', 100, 120)
        this.score_panel = new MyImage(this.game, 'score_panel', 80, 200)
		// this.game.registerAction('f', function () {
		//   ball.fire()
		// })

		this.addElement(this.bg)
		this.addElement(this.bird)
		this.addElement(this.land1)
		this.addElement(this.land2)
        this.addElement(this.text_game_over)
        this.addElement(this.score_panel)
        this.setupInputs()
		

        $('.whole').hide()
		$('.component').hide()
		
	}

	setupInputs() {

        $('#start_button').click(() => {
            this.scene = new SceneTitle(this.game)
            this.game.scene = this.scene
            $('#start_button').show()
        })
        // window.removeEventListener('click', shift)
	}

	update() {
		super.update()
		
	}

}






