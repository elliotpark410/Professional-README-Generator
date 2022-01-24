// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require(".utils\generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the project description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation-instructions',
  },
  {
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage-information',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution-guidelines',
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test-instructions',
  },
  {
    type: 'checkbox',
    message: 'Which license would you like to add?',
    name: 'license',
    choices: ['MIT License', 'Apache License', 'GNU General Public License'],
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github-username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md successfully generated");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README-generated.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
