class Bird extends MyImage{
    constructor(game){
        super(game, 'bird0', 100, 250)
        this.setup()       
    }
    
    setup(){
        this.anim = []
        this.w = 40
        this.h = 40
        for(var i = 0; i < 3; i++){
            var name = `bird${i}`
            var img = this.game.textureByName(name)
            this.anim.push(img)
        }
        this.texture = this.anim[0]
        this.animIndex = 0
        this.animCount = 4
        this.gravity = 2
        this.speed = 2
    }

    update(){
        if(this.y >= 580){
            return
        }
        this.animCount--
        if(this.animCount == 0){
            this.texture = this.anim[(++this.animIndex) % this.anim.length]
            this.animCount = 5
        }
        if(this.animCount % 2 == 0){
            this.y += this.speed
            this.speed += this.gravity
        }     
    }
}