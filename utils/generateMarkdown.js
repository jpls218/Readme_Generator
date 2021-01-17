// My function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license;
  if (license === "APACHE 2.0") badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  if (license === "MIT") badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  if (license === "BSD 3") badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  if (license === "GPL 3.0") badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  if (license === "NONE") badge = "";
  return badge;
}

// My function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = license;
  if (license === "APACHE 2.0") link = "(https://opensource.org/licenses/Apache-2.0)";
  if (license === "MIT") link = "(https://opensource.org/licenses/MIT)";
  if (license === "BSD 3") link = "(https://opensource.org/licenses/BSD-3-Clause)";
  if (license === "GPL 3.0") link = "(https://www.gnu.org/licenses/gpl-3.0)";
  if (license === "NONE") link = "";
  return link;
}

// My function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") return ""
  const badgeAndLink = renderLicenseBadge(license) + renderLicenseLink(license);
  console.log(badgeAndLink);
  return `##License
  
  License of the project is ${badgeAndLink}`
  
}

// My function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const bAndL = renderLicenseSection(license);
  return `# ${data.title}
  # Readme Generator

  ## Description
  ​
  ${data.description}
  ​
  ## Table of Contents 
  ​
  * [Installation](#installation)
  ​
  * [Usage](#usage)
  ​
  * [License](#license)
  ​
  * [Contributing](#contributing)
  ​
  * [Tests](#tests)
  ​
  * [Questions](#questions)
  ​
  ## Installation
  ​
  To install necessary dependencies, run the following command:
  ​
  ${data.installation}

  ## Usage
  ​
  Use ${data.usage} to pull down this repository
  ​
  ${bAndL}
    
  ## Contributing
  ​
  ${data.contributing}
  ​
  ## Tests
  ​
  To run tests, run the following command:​

  ${data.test}

  ## Questions
  ​
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}
// Allows my generateMarkdown file to be exported
module.exports = generateMarkdown;
