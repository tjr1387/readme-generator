// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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
        default: 'Untitled Project'
    },
    {
        type: 'input',
        message: 'Please give a description for your project.',
        name: 'description',
        default: 'None given at this point.'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions, if applicable.',
        name: 'installation',
        default: 'None given at this point.'
    },
    {
        type: 'input',
        message: 'Please provide information regarding the usage of this project.',
        name: 'usage',
        default: 'None given at this point.'
    },
    {
        type: 'input',
        message: 'Please provide guidelines for contribution.',
        name: 'contribute',
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'Provide instructions for testing, if you want',
        name: 'testing',
        default: 'N/A'
    },
    {
        type: 'list',
        message: 'Please pick a license to use.',
        name: 'license',
        choices: [
          'MIT',
          'Apache',
          'GPLv2',
          'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: `.... JUST KIDDING! I don't want anyone to see it!`
    }
];

// Function which will will create/write the generated README to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// Function which initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const madeReadMe = generateMarkdown(response);
            writeToFile('./assets/testReadmes/SeventhREADME.md', madeReadMe);
        });
}


// Function call to initialize app
init();
