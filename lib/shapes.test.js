const Shapes = require('./shapes.js');

describe('Circle', () => {
  describe('render', () => {
    it('should render properties of chosen shape and color', () => {
      const render = `<circle cx="150" cy="100" r="80" fill="blue" />`;
      const circle = new Shapes.Circle("blue", "circle");
      expect(circle.render()).toEqual(render);
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    it('should render properties of chosen shape and color', () => {
      const render = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
      const triangle = new Shapes.Triangle("blue", "triangle");
      expect(triangle.render()).toEqual(render);
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    it('should render properties of chosen shape and color', () => {
      const render = `<rect x="100" y="60" width="100" height="100" fill="blue" />`;
      const square = new Shapes.Square("blue", "square");
      expect(square.render()).toEqual(render);
    });
  });
});