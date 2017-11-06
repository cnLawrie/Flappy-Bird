class Scene{
    constructor(game){
        this.game=game
        this.elements=[]        
    }

    //draw images in elements
    draw(){
        for(var i=0;i<this.elements.length;i++){
            var e=this.elements[i]
            e.draw()
        }
    }

    //add image in array of elements
    addElement(img){
        img.scene=this
        this.elements.push(img)
    }

    update(){
        for(var i=0;i<this.elements.length;i++){
            var e=this.elements[i]
            e.update()
        }
    }
    
}

