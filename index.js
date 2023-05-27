const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

     //TITLE
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    //description
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
    },

    //INSTALLATION
    {
        type:'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',

    },

    //USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    
    //LICENSE
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License',
        licenseEl:[
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    },

    //Contributing
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who are the contributors to your project?',
        
    },

    //Test

    {
        type:'input',
        name: 'test',
        message: 'What command do you use to run your test?',
        default: 'npm test'
    },

     //Questions - github and ema
     {
        type:'input',
        name: 'github',
        message: 'What is your GitHub username?'
     },
     {
        type:'input',
        name: 'email',
        message: 'What is your email address?'
     }


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });

}

// function call to initialize program
init();
