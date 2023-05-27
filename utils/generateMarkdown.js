// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, please contact me at ${data.email} or follow me at 
  [GitHub Profile](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
