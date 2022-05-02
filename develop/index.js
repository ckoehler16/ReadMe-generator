// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input to create README
const questions = [{
   type: 'input',
   name: 'title',
   message: 'What is the title of your project? (Required)',
      validate: titleInput => {
         if (titleInput) {
         return true;
         } else {
         console.log('Please enter a project title!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'description',
   message: 'Describe your project. (Required)',
      validate: descriptionInput => {
         if (descriptionInput) {
         return true;
         } else {
         console.log('Please enter a project description!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'installation',
   message: 'What are the steps needed to install the project? (Required)',
      validate: installationInput => {
         if (installationInput) {
         return true;
         } else {
         console.log('Please enter your instructions for installation!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'usage',
   message: 'Give instructions and examples for how to use. (Required)',
      validate: usageInput => {
         if (usageInput) {
         return true;
         } else {
         console.log('Please enter instructions for how to use!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'credits',
   message: 'List any collaborators and/or link any tutorials that you used or type none.',
      validate: creditsInput => {
         if (creditsInput) {
         return true;
         } else {
         console.log('Please enter any credits or type none!');
         return false;
         }
      }
   },
   {
   type: 'list',
   name: 'license',
   message: 'Choose a license for the project (Required)',
   choices: ['MIT', 'Boost_1.0', 'MPL_2.0', 'Apache_2.0'],
      validate: licenseInput => {
         if (licenseInput) {
         return true;
         } else {
         console.log('Please choose a license!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'contribution',
   message: 'How can others contribute to your project? (Required)',
      validate: contributionInput => {
         if (contributionInput) {
         return true;
         } else {
         console.log('Please enter how to contribute!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'test',
   message: 'Provide an example of how to run the application. (Required)',
      validate: testInput => {
         if (testInput) {
         return true;
         } else {
         console.log('Please enter an example!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'userName',
   message: 'What is your GitHub username? (Required)',
      validate: questionsInput => {
         if (questionsInput) {
         return true;
         } else {
         console.log('Please enter your username!');
         return false;
         }
      }
   },
   {
   type: 'input',
   name: 'email',
   message: 'What is your email address? (Required)',
      validate: emailInput => {
         if (emailInput) {
         return true;
         } else {
         console.log('Please enter your email address!');
         return false;
         }
      }
},
];



// function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('Information created a README!')
   })
};

// created function to initialize app
function init() {
   inquirer.prompt(questions)
      .then(function(data) {
         console.log(data);
         writeToFile('README.md', generateMarkdown(data));
      });
}

// calling function to initialize app
init();