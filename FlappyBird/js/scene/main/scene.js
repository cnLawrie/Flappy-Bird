const config = {
	player_speed: 5,
	bullet_speed: 5,
	background_speed: 1,
}

class SceneMain extends Scene {

	constructor(game) {
		super(game)
        $(window).unbind()
		
		// game.registerAction('k',function(){
		//     var scene=SceneMain(game)
		//     game.scene=scene
		// }
		this.setup()
		this.setupInputs()
	}

	setup() {
		this.bg1 = new MyImage(this.game, 'background')
		this.bg2 = new MyImage(this.game, 'background',this.bg1.texture.width - 5)
		this.land1 = new MyImage(this.game, 'land',0,520)
		this.land2 = new MyImage(this.game, 'land',this.land1.texture.width,520)
		this.bird = new Bird(this.game)
		this.pipe = new pipe(this.game)

		this.addElement(this.bg1)
		this.addElement(this.bg2)
		this.addElement(this.pipe)
		this.addElement(this.bird)
		this.addElement(this.land1)
		this.addElement(this.land2)
		
		$('.whole').hide()
		$('.component').hide()
		this.bindAll('#whole-speed','change',function(event){
			var input = event.value.newValue
			fps=input
			$(event.target).parent().find('.speed').text(input)
		})

		this.bindAll('.auto-slider', 'change', function (event) {
			var target=event.target
			var targetVal = target.value
			eval(target.dataset.speed + '=' + targetVal)
			$(target).parent().find('.speed').text(targetVal)
		})
	}

	start(){
		
	}

	bindAll(selector,eventName,callback) {
		$(selector).slider({
			formatter: function (value) {
				return 'Current value: ' + value;
			}
		}).on(eventName, function (event) {
			callback(event)
		})
	}

	setupInputs() {
		$(window).click( () => {
            this.bird.y -= 5
            this.bird.speed = -10
        })
	}

	update() {
		super.update()
		this.backgroundScroll(this.bg1,this.bg2)
		this.landScroll(this.land1, this.land2)

		for(var i = 0; i < 10; i++){
			var pipes = this.pipe.textures
			if(pipes[i].x < 140 && pipes[i].x + pipes[i].w > 100){
				if(rectIntersect(pipes[i],this.bird)){
					$('#start_button').show()
					this.scene = new SceneEnd(this.game)
					this.game.scene = this.scene
				}
			}
        }
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