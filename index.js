const inquirer = require("inquirer")


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

        
    })
}
//look docs on svg for circle and triangle

startApp()