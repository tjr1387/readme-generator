# Semi-Pro README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Using NodeJS and its 'Inquirer' package, this app runs through a series of questions prompting the user to fill out each section of a professional README file, complete with a license badge (if a license is used) and a functional Table of Contents. After the questions are done, a 'README.md' is generated based on the user's answers. *special note* This README was generated using my app, which is shown in my video -- I did add a bit to it afterward (video link / screenshots / other small commentary)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)

## Installation

Need both NodeJS (preferably with Git Bash if using Windows) and its 'Inquirer' package (npm i inquirer@8.2.4)

## Usage

You will want to pull this repo down so you can run the file in your command line. Once in the project directory in your terminal, run 'node index.js' to begin the questions. You will be asked for your GitHub username, email, as well as to fill out each of the README's sections (Description, Installation, Usage, Credits, Questions, Contribution instructions, Testing and a license). Once done, a README (in markdown) reflecting your answers will be generated, complete with a license badge/link and a functional Table of Contents. If you want to have the README generated in a different folder, you can change its generation location (and name) inside the first argument of the 'writeToFile' invocation, in 'index.js'. There are defaults to every question if you leave them blank, except for your GitHub username. If you leave that out, then you're in need of more help than I can provide!

Link to video: https://drive.google.com/file/d/1Ui7JnxMK4tqygwt_J86o2xpUZ0on4dp5/view

Screenshot(s):
![Finished inquirer question set](./assets/mockups/inquirer-complete-terminal.png?raw=true "Example of a finished inquirer set")
![All defaults different license](./assets/mockups/all-defaults-difft-license.png?raw=true "All defaults chosen with a different license than my README")

## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file

## Questions

If you have any questions, you can check out my GitHub here: https://github.com/tjr1387  

Additionally, you can email me at .... JUST KIDDING! I don't want anyone to see it! (this was my default in the demo so I'm going to leave it here!)

## How to Contribute

N/A

## Tests

N/A

## Comments/Flaws

In my assets folder I left a bunch of test READMEs as well as a palette for when I was first creating it; figured there was no reason to remove them. I really didn't know what else to use as screenshots seeing as the product is the README itself and here you are reading it! I was also torn on whether to add 'package-lock.json' to .gitignore - the googling I did seemed pretty ambivalent, leaning towards _not_ ignoring it. Shame on me if I'm wrong! The last thing is that the video I did is pretty long and hacky, so please, speed it up (lol)

## License

Covered under the MIT license.
