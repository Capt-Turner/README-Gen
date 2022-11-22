function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

function renderLicenseLink(license) {
  if(license !== "None"){
    return `\n* [License](#license)\n`;
  }
  return "";
};

function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License

This project is licensed under ${license} license.`;
  }
 return "";
}; 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

*[Installation](#install)
*[Usage](#usage)
${renderLicenseLink(data.licence)}
*[Testing](#testing)
*[Contributing](#contributing)
*[Contact](#contact)

## Installation

Before running, besure to install the necessary dependencies with the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.licence)}

## Testing

To execute testing scripts, run the following command:

\`\`\`
${data.test}
\`\`\`

## Contributing

${data.contribute}

## Contact

If you have any questions/concerns or wish to discuss this repo, you can contact me at ${data.email}.

You can also find more of my projects at [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
