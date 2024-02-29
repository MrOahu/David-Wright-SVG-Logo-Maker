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
            name: "shapeColor",
            message: "Please choose a color for you logo shape."
        },
        // question for text you'd like
        

        // question for text color you'd like

    ])
}


startApp()