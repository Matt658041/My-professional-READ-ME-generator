// node modules and required links
const fs = require(`fs`)
const util = require(`util`)
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown")
// the promisify value is a better way to use a promise instead of the (err,value)
const writeFileAsync = util.promisify(fs.writeFile);


//These questions are used to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the project used for?"
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
            message: "Who are the contributors of this projects?"
        },
       
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 
/// This is the function that uses the new util.promisify Node method and the try method 
async function init () {
    try {
        // prompt questions and create responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // this will write the read me file to the distribution folder
        await writeFileAsync(`./dist/README.md`, generateContent);
        console.log(`Successfully wrote to README.md`);
    } catch (err) {
        console.log(err);
    }
}

init()