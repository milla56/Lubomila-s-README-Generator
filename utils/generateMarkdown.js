// function that runs license badge 
function licenseBadge (license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

  ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Questions](#questions)

 

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This app is using ${licenseBadge(data.license)}.

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}


  ## Questions
  If you have any questions, please contact me at ${data.email} or follow me at 
  [GitHub Profile](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
