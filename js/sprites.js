const gravity = 0.6

class Sprite {
    constructor({ position, velocity, dimensions }){
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height
    }
    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        //passar isso daqui para uma função separada para deixar o código mais limpo
        if (Math.ceil(this.position.y + this.height >= canvas.height)) {
            this.onGround = true
        }else{
            this.onGround = false
        }

        //passar isso daqui para uma função separada para deixar o código mais limpo
        if (this.position.y + this.height > canvas.height) {
            this.position.y = canvas.height-this.height
            this.velocity.y = 0
        } else {
            if(!this.onGround){
                this.velocity.y += gravity
            }
            
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()
    }

    jump() {
        //deixar isso daqui mais limpo
        if(!this.onGround) return
        this.velocity.y -= 16
    }

}

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        dimensions
    }) {
        super({
            position,
            velocity,
            dimensions
        })
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

        this.lastKeyPressed
        this.onGround
    }

}

const player = new Fighter({
    position: {
        x: 100,
        y: 100
    },
    velocity:{
        x: 0,
        y: 0
    },
    dimensions: {
        width: 50,
        height: 150
    }
})

const player2 = new Fighter({
    position: {
        x: 500,
        y: 20
    },
    velocity:{
        x: 0,
        y: 10
    },
    dimensions: {
        width: 50,
        height: 200
    }
})