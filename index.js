const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

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
        default: "npm install",

    },

    // USAGE
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
        choices:[
            'None',
            'Apache_2.0', //Apache License 2.0'
            'GPLv3', //GNU General Public License v3.0
            'MIT', //MIT License
            'BSD_2--Clause', //BSD 2-Clause "Simplified" License
            'BSD_3--Clause', //BSD 3-Clause "New" or "Revised" License
            'Boost_1.0', //Boost Software License 1.0
            'CC0_1.0', //Creative Commons Zero v1.0 Universal
            'EPL_1.0', //Eclipse Public License 2.0
            'AGPL_v3', //GNU Affero General Public License v3.0
            'GPL_v2', //GNU General Public License v2.0
            'LGPL_v3', //GNU Lesser General Public License v3.0
            'MPL_2.0', //Mozilla Public License 2.0
            'Unlicense', //The Unlicense
        ],
        default: "MIT",
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
        writeToFile("./generateReadme/README.md", markdown);
    }).catch((error) =>{
        console.log(error)
    });
    

}

// function call to initialize program
init();
