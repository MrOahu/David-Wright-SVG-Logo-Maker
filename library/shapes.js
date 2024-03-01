class Circle{
constructor(){
    this.color = ""
}

setColor(chosenColor){
    this.color = chosenColor
}

render (){
    return `<circle r="80" cx="50" cy="50" fill="${this.color}" />`
}
}

// new Circle().setColor("burgundy").render()  We create new circle instance, set color to burgundy, and then render tag with burgundy fill