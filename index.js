const fs=require('fs');
const path=require('path');
const inquirer=require('inquirer');
const genMD=require('./utils/generateMarkdown');

const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your GitHub username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?',
    },
    {
        type:'input',
        name:'title',
        message:'What is the name of your project?',
    },
    {
        type:'input',
        name:'description',
        message:'Please type a brief description of your project.',
    },
    {
        type:'input',
        name:'usage',
        message:'What should a user know before using your repo?',
    },
    {
        type:'input',
        name:'contribute',
        message:'What should a user now about contributing to your repo?',
    },
    {
        type:'list',
        name:'license',
        message:'What kind of license will your project be under?',
        choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },
    {
        type:'input',
        name:'install',
        message:'What command will be run to install dependencies?',
    },
    {
        type:'input',
        name:'test',
        message:'What command will be run to execute tests?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
