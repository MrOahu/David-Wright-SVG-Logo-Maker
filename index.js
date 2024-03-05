const inquirer = require("inquirer")
const {Circle, Square, Triangle} = require("./library/shapes")
const fs = require("fs")
function startApp(){
    inquirer.prompt([
        {
            type:"list",
            name:"chosenShape",
            message:"Please choose a shape for your new logo.",
            choices:["circle", "square", "triangle"]
        },
        {
            type:"input",
            name:"shapeColor",
            message: "Please choose a color for your logo shape."
        },
        {
            type:"input",
            name:"chosenText",
            message:"Please choose a text for your logo."
        },
        {
            type:"input",
            name:"textColor",
            message:"Please select a color for your logo text."

        }

    ]).then(function(response) {
        console.log(response)
        var selectedShape;
        if (response.chosenShape === "circle"){
            selectedShape = new Circle(response.shapeColor)
        }
        else if (response.chosenShape === "square"){
                selectedShape = new Square(response.shapeColor)
        }
        else if (response.chosenShape === "triangle"){
                 selectedShape = new Triangle(response.shapeColor)
        }

        //const newShape = selectedShape.setColor(response.shapeColor)

        let newLogo = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        ${selectedShape.render()}
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.chosenText}</text>
    
       </svg>`

       fs.writeFileSync("logo.svg", newLogo)
}).then(function (data){
    console.log("new svg logo created")
})

}
//look docs on svg for circle and triangle

startApp()