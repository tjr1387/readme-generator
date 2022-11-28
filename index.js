// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// The set of questions for inquirer to run
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions, if applicable.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide information regarding the usage of this project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for contribution.',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide instructions for testing, if you want',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Please pick a license to use.',
        name: 'license',
        choices: [
          'MIT',
          'Apache',
          'GPL',
          'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// Function which will plop in the user's reponses into a big string, intended to become the README
function generateReadmeBody(responseObject) {
    return ``
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// inquirer
//   .prompt(questions)
//   .then((response) => {
//     console.log(response);
//   }
// );