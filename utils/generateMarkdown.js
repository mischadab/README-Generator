// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license !== 'None') {
		return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
	}
	return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license !== 'None') {
		return `\n* [License](#license)`;
	}
	return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License`;
  renderLicenseLink(license)
  renderLicenseBadge(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
	return `# ${answer.title}
  ${renderLicenseBadge(answer.license)}

  ## Table of Contents

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(answer.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)



  ## Description
  ${answer.description}
  

  ## Installation
  \`\`\`
  ${answer.installation}
  \`\`\`


  ## Usage
  ${answer.usage}


  ${renderLicenseSection(answer.license)}


  ## Contributing
  ${answer.contributions}

  
  ## Tests
  \`\`\`
  ${answer.test}
  \`\`\`
 

  ## Questions
  If you have any questions about this repo, contact me at ${answer.email}
  See my other projects at ${answer.github} on github.
`;
}

module.exports = generateMarkdown;
