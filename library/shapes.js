class Circle{
constructor(color){
    this.color = color
}

setColor(chosenColor){
    this.color = chosenColor
}

render (){
    return `<circle r="80" cx="150" cy="100" fill="${this.color}" />`
}
}

// new Circle().setColor("burgundy").render()  We create new circle instance, set color to burgundy, and then render tag with burgundy fill

class Square{
    constructor(color){
        this.color = color
    }
    
    setColor(chosenColor){
        this.color = chosenColor
    }
    
    render (){
        return `<rect width="120" height="120" x="90" y="40" fill="${this.color}" />`
    }
}

class Triangle{
    constructor(color){
        this.color = color
    }
    
    setColor(chosenColor){
        this.color = chosenColor
    }
    
    render (){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle}