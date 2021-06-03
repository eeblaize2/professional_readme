//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let md = `![${license}](./images/${license}.png)`;
    return md;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
function renderLicenseLink(license) {

    let md = "";
    switch (license) {
        case "MIT":
            md += "(https://mit-license.org/)";
            break;
        case "APACHE_2.0":
            md += "(https://www.apache.org/licenses/LICENSE-2.0.html)";
            break;
        case "GPL_3.0":
            md += "(https://www.gnu.org/licenses/gpl-3.0.en.html)";
            break;
        case "BSD_3":
            md += "(https://opensource.org/licenses/BSD-3-Clause)";
    }
    return md;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") return "";
    return (`[${license}]` + renderLicenseLink(license));
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
 - [Installation](#installation) 
 - [Usage](#usage) 
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
${data.github}
[Github Profile](https://github.com/${data.github})
${data.email}
`;
}

module.exports = generateMarkdown;
