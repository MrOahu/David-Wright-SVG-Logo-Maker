const {Circle, Triangle, Square} = require("./shapes")


test("test circle class", ()=> {
    const expectedTag = `<circle r="80" cx="150" cy="100" fill="green" />`
   
    const newCircle = new Circle("green").render()

    expect(newCircle).toEqual(expectedTag)
})