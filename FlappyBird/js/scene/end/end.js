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

        var num = window.score % 10
        var num2 = Math.floor(window.score / 10)
        this.score = new MyImage(this.game, `number_score_${num}`, 265, 235)
        if(window.score >= 10){
            log(num2)
            this.score2Digit = new MyImage(this.game, `number_score_${num2}`, 255, 235)
        }
        var bestNum = num
        var bestNum2 = num2
        if(window.best == null) {
            window.best = window.score
        } else {
            window.best = window.score > window.best ? window.score : window.best
            bestNum = window.best % 10
            bestNum2 = Math.floor(window.best / 10)
        }

        this.bestScore = new MyImage(this.game, `number_score_${bestNum}`, 265, 275)
        if(window.best >= 10){
            this.bestScore2Digit = new MyImage(this.game, `number_score_${bestNum2}`, 255, 275)
        }

        var medalName = ''
        if(window.score < 10){
            medalName = 'medal_3'
        } else if (window.score < 20) {
            medalName = 'medal_2'
        } else if(window.score < 50) {
            medalName = 'medal_1'
        } else {
            medalName = 'medal_0'
        }
        this.medal = new MyImage(this.game, medalName, 110, 244)

        this.number_scores = []
		for(var i = 0; i < 10; i++){
			var name = `number_score_${i}`
			var img = this.game.textureByName(name)
            this.number_scores.push(img)
        }

		this.addElement(this.bg)
		this.addElement(this.bird)
		this.addElement(this.land1)
		this.addElement(this.land2)
        this.addElement(this.text_game_over)
        this.addElement(this.score_panel)
        this.addElement(this.medal)
        this.addElement(this.score)
        if(this.score2Digit) {
            this.addElement(this.score2Digit)
        }
        this.addElement(this.bestScore)
        if(this.bestScore2Digit) {
            this.addElement(this.bestScore2Digit)
        }
        this.setupInputs()
        
        

        $('.whole').hide()
		$('.component').hide()
		
	}

	setupInputs() {

        $('#start_button').click(() => {
            var scene = new SceneMain(this.game)
            this.game.scene = scene
        })
        // window.removeEventListener('click', shift)
	}

	update() {
		super.update()
		
	}

}






