const index = require('../index.js');

describe('Logo Render', () => {
    describe('renderSVG', () => {
      it('should render final build of the SVG logo', () => {
        const render = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="orange" />

    <text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">SVG</text>

</svg>`;
        const response = {
        color: "blue",
        shapeColor: "orange",
        shape: "circle",
        text: "SVG"
        };
        expect(index.renderSVG(response)).toEqual(render);
      });
    });
  });