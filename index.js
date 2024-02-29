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
        // question for text you'd like
        {
            type:"input",
            name:"chosenText",
            message:"Please choose a text for your logo."
        }


        // question for text color you'd like
        {
            type: "input",
            name: "textColor",
            message: "Please select a color for your logo text."

        }

    ])
}
//look docs on svg for circle and triangle

startApp()