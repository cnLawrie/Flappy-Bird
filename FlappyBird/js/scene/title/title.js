class SceneTitle extends Scene{
	
    constructor(game){
        super(game)
        this.setup()
    }

    setup() {
		this.bg1 = new MyImage(this.game, 'background')
		this.bg2 = new MyImage(this.game, 'background',this.bg1.texture.width - 5)
		this.land1 = new MyImage(this.game, 'land',0,520)
		this.land2 = new MyImage(this.game, 'land',this.land1.texture.width,520)
		this.bird = new Bird(this.game)
		this.bird.x = 180
		this.bird.speed = 1
		this.title = new MyImage(this.game, 'title', 120, 160)
		// this.game.registerAction('f', function () {
		//   ball.fire()
		// })

		this.addElement(this.bg1)
		this.addElement(this.bg2)
		this.addElement(this.bird)
		this.addElement(this.land1)
		this.addElement(this.land2)
		this.addElement(this.title)
		this.setupInputs()
		
		this.bird.update = () => {
            var bird = this.bird
            bird.animCount--
            if(bird.animCount == 0){
                bird.texture = bird.anim[(++bird.animIndex) % bird.anim.length]
                bird.animCount = 5
                bird.speed = bird.y < 220 ? bird.speed = -bird.speed : bird.speed
                bird.speed = bird.y > 280 ? bird.speed = -bird.speed : bird.speed
            }
            bird.y -= bird.speed
        }


        $('.whole').hide()
		$('.component').hide()
		
	}

	setupInputs() {
        
        $('#start_button').click(() => {
			var scene = new SceneMain(this.game)
			this.game.scene = scene
			$('#start_button').hide()
        })
        // window.removeEventListener('click', shift)
	}

	update() {
		super.update()
		this.backgroundScroll(this.bg1,this.bg2)
		this.landScroll(this.land1, this.land2)
	}

	landScroll(land1,land2){
		land1.x -= config.background_speed
		land2.x -= config.background_speed
		if(land2.x-70 == 0){
			land1.x = 0
			land2.x = land1.texture.width
		}
	}

	backgroundScroll(bg1, bg2) {
		bg1.x -= config.background_speed
		bg2.x -= config.background_speed
	
		if (bg1.x == -bg1.texture.width + 10) {
			bg1.x = 0
			bg2.x = bg1.texture.width - 8
		}
    }

}

