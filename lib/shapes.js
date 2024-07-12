class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<rect x="100" y="60" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Triangle, Square};