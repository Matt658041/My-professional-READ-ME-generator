// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 
 let licenceInfo = "";
 $template += `# ${response.name}\n\n`;
 if (response.licence === "MIT") {
   $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
   licenceInfo = '(https://opensource.org/licenses/MIT)\n\nYou have the freedom to do as you like with this permissive software, as long as an original copy and license notice is included. I cannon be held liable for this software.\n\n';
 } else if (response.licence === "Apache") {
   $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
   licenceInfo = '(http://www.apache.org/licenses/LICENSE-2.0.html)\n\nYou have the freedom to do as you like with this permissive software. This license also contains a patent license from the contributors of the code.\n\n';
 } else if (response.licence === "GPLv3") {
   $template += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
   licenceInfo = '(http://www.gnu.org/licenses/gpl-3.0.html)\n\nYou have the freedom to run, study, share, and modify this permissive software. Anyone who acquires this software must make it available to anyone else under the same licensing agreement.\n\n';
 };   

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;