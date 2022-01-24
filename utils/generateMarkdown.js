// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // NEED TO ADD LICENSE BADGE 

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#contribution)
  * [Test Instructions](#test)
  * [License](#license)
  * [Questions](#questions)
  

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## Questions
  * If you'd like to learn more about this application, check out my [GitHub profile](https://github.com/${data.github})
  
  * If you have any questions, please email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
