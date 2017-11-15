class pipe{
    constructor(game){
        this.game = game
        this.setup()
    }

    setup(){
        this.pipes = []
        for(var i = 0; i < 2; i++){
            var name = `pipe${i}`
            var img = this.game.textureByName(name)
            this.pipes.push(img)
        }
        this.textures = []
        for(var i = 0; i < 5; i++){
            var downY = -200 * Math.random()
            var upY = downY + 420
            this.textures.push({'texture':this.pipes[0], y:downY, w:48, h:310})
            this.textures.push({'texture':this.pipes[1],y:upY, w:48, h:310}) 

        }
        this.speed = 3
        for(var i = 0; i < 5; i ++){
            this.textures[2 * i].x = (i + 2) * 180
            this.textures[2 * i + 1].x = (i + 2) * 180
        }
        
    }

    draw(){
        for(var i = 0; i < 10; i++){            
            this.game.drawImage(this.textures[i])
        }
    }

    update(){
        
        for(var i = 0; i < 10; i++){
            this.textures[i].x -= this.speed
            if(this.textures[i].x < -180){
                this.textures[i].x = 180 * 4
            }
        }
    }

}