const {Circle, Triangle, Square} = require("./shapes")


test("test circle class", ()=> {
    const expectedTag = `<circle r="80" cx="150" cy="100" fill="green" />`
   
    const newCircle = new Circle("green").render()

    expect(newCircle).toEqual(expectedTag)
})

test("test square class", ()=> {
    const expectedTag = `<rect width="120" height="120" x="90" y="40" fill="blue" />`
   
    const newSquare = new Square("blue").render()

    expect(newSquare).toEqual(expectedTag)
})

test("test triangle class", ()=> {
    const expectedTag = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
   
    const newTriangle = new Triangle("red").render()

    expect(newTriangle).toEqual(expectedTag)
})