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
		this.tutorial = new MyImage(this.game, 'tutorial', 140, 260)
		this.text_ready = new MyImage(this.game, 'text_ready',100, 120)
		this.bird = new Bird(this.game)
		this.bird.speed = 1
		this.started = false
		
		this.addElement(this.bg1)
		this.addElement(this.bg2)
		this.addElement(this.bird)
		this.addElement(this.land1)
        this.addElement(this.land2)
        this.addElement(this.tutorial)
        this.addElement(this.text_ready)
		

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
		
		$('#start_button').hide()		
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
		$('#canvasDiv').unbind()
		var elems = this.elements
		elems.splice(elems.indexOf(this.bird),1)
		elems.splice(elems.indexOf(this.tutorial),1)
		elems.splice(elems.indexOf(this.text_ready),1)
		elems.splice(elems.indexOf(this.land1),1)
		elems.splice(elems.indexOf(this.land2),1)
		
		this.bird = new Bird(this.game)
		this.pipe = new pipe(this.game)
		this.addElement(this.bird)
		this.addElement(this.pipe)
		this.addElement(this.land1)
		this.addElement(this.land2)

		$('#canvasDiv').click( () => {
            this.bird.y -= 5
            this.bird.speed = -10
        })
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
		$('#canvasDiv').click(() => {
			this.started = true
			this.start()
		})
	}

	update() {
		super.update()
		this.backgroundScroll(this.bg1,this.bg2)
		this.landScroll(this.land1, this.land2)

		if(!this.started){
			return 
		}

		for(var i = 0; i < 10; i++){
			var pipes = this.pipe.textures
			if(pipes[i].x < 140 && pipes[i].x + pipes[i].w > 100){
				if(rectIntersect(pipes[i],this.bird)){
					$('#start_button').show()
					var scene = new SceneEnd(this.game)
					this.game.scene = scene
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