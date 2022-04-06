// node modules 
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { title } = require("process");

//inquirer to generate questions
inquirer.prompt (
    [
        {
            type:'input',
            message: "What is the project title?",
            name: `title`,
            //validate property to check that the user provided a value
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}},
        },
        {
            type:'input',
            message: "How do you install your application?",
            name: `installation`,  
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}},
        },
        {
            type:'input',
            message: "instructions to follow",
            name: `instructions`,  
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}},  
        },
        {
            type:'input',
            message: "any credits?",
            name: `installation`,  
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}},    
        },
        {
            type:'input',
            message: "how do you use your app?",
            name: `usage`,  
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}}, 
        },
        {
            //list of licenses
            type:'list',
            message: "What license did you use?",
            name: `license`, 
            choices:[`The MIT License`, `The GPL License`, `Apache License`, `GNU License`, `N/A`], 
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}}, 
        },
        {
            type: `input`,
            message: `Github username:`,
            name: `git`,
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}}, 
        },
        {
            type: `input`,
            message: `Github username:`,
            name: `git`,
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}}, 
        }, 
        {
            type: `input`,
            message: `E-mail:`,
            name: `email`,
            validate: (value) => {if (value) {return true} else {return `I need a value to continue`}},    
        }

    ]
)

