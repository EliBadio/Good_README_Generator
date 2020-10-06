const inquirer = require('inquirer');
const fs = require('fs');

function promptInput() {
  return inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a brief description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter the steps required to install this project',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide a brief instruction on how to use this application',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please select license accordingly',
    name: 'license',
    choices: ['APACHE 2.0', 'BSD 2', 'BSD 3', 'GVL-GPL 3.0', 'MIT', 'None'],
  },
  {
    type: 'input',
    message: 'Please enter all the contributors of this application',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'Provide brief instructions on how to test this project.',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Provide contact inforamtion for any further questions.',
    name: 'questions',
  },
  {
    type: 'input',
    message: 'Provide a github username.',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Provide your email address.',
    name: 'email',
  },

  ])

}

promptInput().then(answers => {
  // consolge.log(answers);
  const readMe =generateREADME(answers);
  fs.writeFile('README.md', readMe, err => {
    if(err) {
        throw err;
    }
    console.log('ReadMe file generated');
  });
});
// Readme Template
function generateREADME(answers) {
  
    return ` 
# ${answers.title}
${getBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation 
${answers.installation}
    
## Usage 
${answers.usage}
    
## License
${answers.license}
    
## Contributing
${answers.contributors}
    
## Test
${answers.test}
    
## Questions
${answers.questions}

Contact me: 
Github:[${answers.username}](https://github.com/${answers.username})

Email:[${answers.email}](${answers.email})
`;
 // Get License Badge design to display on top based on form selection
 function getBadge(license) {
    switch (license) {
      case 'APACHE 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 2':
        return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      case 'BSD 3':
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      case 'GVL-GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      default:
        return '';
    }
  }
}