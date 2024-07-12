const inquirer = require('inquirer');
const Shape = require('./lib/shapes.js');
const fs = require('fs');

const q1 = {type: 'input', message: "Please, enter the initials for your logo (maximum 3):", name: 'text'};
const q2 = {type: 'input', message: "Enter text color (either by name or code):", name: 'color'};
const q3 = {type: 'list', message: "Select a shape out of the following options:", choices: ['circle', 'triangle', 'square'], name: 'shape'};
const q4 = {type: 'input', message: "Enter shape color (either by name or code):", name: 'shapeColor'};

const questions = [q1, q2, q3, q4];

function renderSVG(response) {
  var shape;
  if (response.shape == "circle") {
    shape = new Shape.Circle(response.shapeColor, response.shape);
  } else if (response.shape == "triangle") {
    shape = new Shape.Triangle(response.shapeColor, response.shape);
  } else {
    shape = new Shape.Square(response.shapeColor, response.shape);
  }
   
   var svg = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

    <text x="150" y="125" font-size="45" text-anchor="middle" fill="${response.color}">${response.text}</text>

</svg>`;
    return svg;
};

inquirer.prompt(questions).then((response) => fs.writeFile(`./examples/${response.text} logo.svg`, renderSVG(response), () => {console.log("Logo created")}));

module.exports = {renderSVG};