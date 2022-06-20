// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateMarkdown } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const init = () => {

    inquirer.prompt([
        {
            name: "Title",
            message: "What is the title of your project?",
            type: "input",
        },

        {
            name: "Description",
            message: "Briefly Describe your project",
            type: "input",
        },

        {
            name: "Installation",
            message: "What instructions should be followed for this project?",
            type: "input",
        },

        {
            name: "Usage",
            message: "What is the usage of this project?",
            type: "input",

        },

        {
            type: 'list',
            message: 'What is the License for this project?',
            name: 'License',
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
                "None"],
        },

        {
            type: 'input',
            message: 'How can users contribute to this project?',
            name: "Contributing",

        },

        {
            type:"input",
            name: "Tests",
            message: "Give test instructions",
        },

        {
            type: 'input',
            message: 'Enter your github username',
            name: 'Questions',

        },

        {
            type: 'input',
            name: 'LinkedIn',
            message: 'Enter your LinkedIn username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        },





    ])
        .then(answers => {
            writeToFile(answers)
            console.log('Success! Your README file has been created!')
        });
}


// TODO: Create a function to write README file

const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile(answers) {
    writeFileAsync('README.md', generateMarkdown(answers))
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
