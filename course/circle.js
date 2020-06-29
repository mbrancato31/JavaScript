const _radius = new WeakMap();
export class Circle { // export is for es6 module web browser
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('circle with radius ' + _radius.get(this));
    }
}

// module.exports = Circle; commonjs to work delete export on line 2
