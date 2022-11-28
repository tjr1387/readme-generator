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
    return `# ${responseObject.title}

## Description

${responseObject.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)

## Installation

${responseObject.installation}

## Usage

${responseObject.usage}

## Credits

...maybe you?

## Questions

If you have any questions, you can check out my GitHub here: https://github.com/${responseObject.username}  \n
Additionally, you can email me at ${responseObject.email}

## How to Contribute

${responseObject.contribute}

## Tests

${responseObject.testing}

## License

Covered under the ${responseObject.license} license.`
}

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
        const madeReadMe = generateReadmeBody(response);
        writeToFile('./assets/testReadmes/SecondREADME.md', madeReadMe);
    });
}

// Function call to initialize app
init();
