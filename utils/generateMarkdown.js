// Function that returns a license badge&link based on which license is passed in, or an empty string if none passed in
function renderLicenseBadge(license) {
    let licBadge = '';
    switch(license) {
        case 'MIT':
            licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'Apache':
            licBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'GPLv2':
            licBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
            break;
        default:
            break;       
    }
    return licBadge
}

// Function which gives text to the license section at the bottom (separate from the badge/link at the top)
function renderLicenseSection(license) {
    if (license === 'None') {
        return `No license chosen.`
    } else {
        return `Covered under the ${license} license.`
    }
}

// Function which will plop in the user's reponses into a big string, intended to become the README
function generateMarkdown(responseObject) {
    return `# ${responseObject.title}
${renderLicenseBadge(responseObject.license)}

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

${responseObject.credits}

## Questions

If you have any questions, you can check out my GitHub here: https://github.com/${responseObject.username}  \n
Additionally, you can email me at ${responseObject.email}

## How to Contribute

${responseObject.contribute}

## Tests

${responseObject.testing}

## License

${renderLicenseSection(responseObject.license)}
`
}

module.exports = generateMarkdown;
