// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project.' 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install npm packages?',
        default: "npm install"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for using this repository?' 
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How does one contribute to this repository?' 
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run tests for this repository?',
        default: "npm test"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license wll you use for this repository?',
        choices: ['MIT', "BSD 3", "Apache", "GPLv2", "None"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?' 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // return writeFileSync .. join paths
    return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    // begin asking the user questions
    inquirer.prompt(questions)
    // collect answers
    .then((answers) => {
        // push answers into
        writeToFile("README.md", generateMarkdown(answers))
    }
    )
}

// Function call to initialize app
init();

