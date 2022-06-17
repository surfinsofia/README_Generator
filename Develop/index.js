// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');
const {generateMarkdown} = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const init = () => {

    inquirer.prompt([
        {
        name: "Title",
        message: "What is the title of your project?",
        type:"input",
    },
        {
            type: 'list', 
            message: 'this the message', 
            name: 'the name',
            choices: ["one", "two"]
        }
    ])
    .then(answers => {
        writeToFile(answers)
        console.log('Success!')
    });}


// TODO: Create a function to write README file

const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile(answers)  {
    writeFileAsync('README.md', generateMarkdown(answers))
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
