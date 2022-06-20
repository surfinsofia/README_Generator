// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateMarkdown(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateMarkdown(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  return `
  ## Title
  ${answers.Title}
  
  ## Description
  ${answers.Description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## Questions
  https://github.com/${answers.Questions}
  
  https://www.linkedin.com/in/${answers.LinkedIn}
  
  Reach me with questions by email:
  ${answers.Email}
  
  `;
}


module.exports = {generateMarkdown};
