// node modules and required links
const inquirer = require(`inquirer`);
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require(`utils/generate-site`);


//inquirer to generate questions
const promptUser = () => {
return inquirer.prompt (
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

    ]);
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });