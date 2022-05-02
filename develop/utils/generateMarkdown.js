const fs = require('fs');
const data = require('../index.js');

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let licenseChoice = `${data.license}`;
    let licenseLink = '';
    let licenseName = '';

    if (licenseChoice === 'MIT') {
        licenseLink = 'https://choosealicense.com/licenses/mit/';
        licenseName = 'MIT';
    };
    if (licenseChoice === 'Apache_2.0') {
        licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
        licenseName = 'Apache 2.0';
    };
    if (licenseChoice === 'Boost_1.0') {
        licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
        licenseName = 'Boost 1.0';
    };
    if (licenseChoice === 'MPL_2.0') {
        licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
        licenseName = 'Mozilla 2.0';
    };
    
    return `

# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
    
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

### Installation:
${data.installation}

### Usage:
${data.usage}

### Credits:
${data.credits}

### License:
${licenseName}

For more information go to: 
- [${licenseName} Link](${licenseLink})

### Contribution:
${data.contribution}

### Test:
${data.test}

### Questions:
If you have questions regarding the project, contact me through:
- Github: [${data.userName}](https://github.com/${data.userName})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;