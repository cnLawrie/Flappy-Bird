class MyImage{
    constructor(game,name,x,y){
        this.game=game
        this.texture=game.textureByName(name)
        this.x = x||0
        this.y = y||0
        this.w = this.texture.width
        this.h = this.texture.height
    }
    
    update(){}

    draw(){
        this.game.drawImage(this)
    }
}








