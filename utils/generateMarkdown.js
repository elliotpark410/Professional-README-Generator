// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license[0] === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license[0] === 'Apache_2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license[0] === 'GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}



  ## Description
  ${data.description}



  ## Table of Contents
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Contribution Guidelines](#contribution)
  * [Test Instructions](#test)
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
  * If you'd like to learn more about this application, check out my Github profile: [https://github.com/${data.github}](https://github.com/${data.github})
  
  * If you have any questions, please don't hesitate to email me at ${data.email}.


`;
}

module.exports = generateMarkdown;
