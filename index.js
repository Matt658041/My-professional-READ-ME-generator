// node modules and required links
const fs = require(`fs`)
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown")
const path = require('path')

//These questions are used to populate the README.md with an array of questions
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log(`You need to enter a project description!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
            
        },
        {
            type: "input",
            name: "usage",
            message: "What is the project used for?",
            
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?",
            
        },
       
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? ",
            
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
           
        }
    ]);
}  
/// This is where you will it will write to the file and prompt the questions
function writeToFile(fileName, data) {
    console.log(data)
     fs.writeFileSync(path.join(process.cwd(), fileName), data,(err) => {
         if (err) throw err;

     });
}
//prompting the questions
function init() {
    promptUser().then(inquirerResponses =>{
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    })
}

init()