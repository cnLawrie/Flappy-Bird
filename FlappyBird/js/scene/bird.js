class Bird extends MyImage{
    constructor(game){
        super(game, 'bird0', 100, 250)
        this.setup()       
    }
    
    setup(){
        this.anim = []
        this.w = 38
        this.h = 38
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
        this.rotation = 0
    }

    jump() {
        this.y -= 5
        this.speed = -10
        this.rotation = -20
    }

    update(){
        if(this.y >= 580){
            return
        }
        this.animCount--
        //flap the wing
        if(this.animCount == 0){
            this.texture = this.anim[(++this.animIndex) % this.anim.length]
            this.animCount = 5
        }

        if(this.animCount % 2 == 0){
            this.y += this.speed
            this.speed += this.gravity
            //update rotation
            if(this.rotation <= 90){
                this.rotation += 3
            }
        }     
    }

    draw(){
        var ctx = this.game.context
        //rotate
        ctx.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        ctx.translate(this.x + w2, this.y + h2)
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.translate(-w2, -h2)
        ctx.drawImage(this.texture, 0, 0)
        ctx.restore()
    }
}