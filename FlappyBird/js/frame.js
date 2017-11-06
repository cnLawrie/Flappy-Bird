class GameFrame {
    constructor(images, runCallBack) {
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.images = images
        this.runCallBack = runCallBack
        this.canvas = document.getElementById("canvasDiv")
        this.context = this.canvas.getContext('2d')

        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', event => {
            this.keydowns[event.key] = false
        })
        
        this.init()
    }

    init() {
        var loads = []
        //预先载入所有图片
        var names = Object.keys(this.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = this.images[name]
            let img = new Image()
            img.src = path
            img.onload =  () => {
                this.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    this.__start()
                }
            }
        }
    }

    drawImage(Img) {
        this.context.drawImage(Img.texture, Img.x, Img.y)
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    runloop() {
        //events
        var actions = Object.keys(this.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (this.keydowns[key]) {
                //如果按键key被按下
                this.actions[key]()
            }
        }
        //update
        this.update()
        //clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        //draw
        this.draw()

        setTimeout( () => {
            this.runloop()
        }, 1000 / fps)
    }

    textureByName(name) {
        var img = this.images[name]
        // var image = {
        //     image: img,
        //     width: img.width,
        //     height: img.height,
        // }
        return img
    }

    runWithScene(scene) {
        this.scene = scene
        //开始运行程序

        setTimeout(() => {
            this.runloop()
        }, 1000 / fps)
    }

    __start () {
        this.runCallBack(this)
    }

}