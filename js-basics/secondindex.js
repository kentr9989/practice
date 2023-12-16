// object literal
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw() {
        console.log('draw');
    }
}
circle.draw();
//2 ways to create object
// 1.Function factory

function createCircle(radius,x,y) {
    return {
        radius : radius,
        location : {
            x : x,
            y : y,
        },
        draw() {
            console.log('draw');
        }
    }
}
const a1 = new Circle(1,1,1);

// 2.Constructor function : more preferrable
function Circle(radius,x,y) {
    this.radius = radius;
    this.location = {
        x : x,
        y : y
    };
    this.draw = function() {
        console.log('draw');
    }
    return this;
}
const a2 = new Circle(2,2,2);

// Abstraction : hide the essential, 
// only reveal public interface

function Circle2(radius) {
    this.radius = radius;
    let default_location = { // make this private on the function
        x : 0,
        y : 0
    };
    let computeOptimumLocation = function(factor) { // make this private
                                                    // by using let           
    }
    this.draw = function() { // this will be reveal as public interface
        computeOptimumLocation(0.1);
        console.log('draw');
    }
    return this; // no need to do this - but maybe for practice
}

// Get and set for the defaultLocation

function Circle3(radius) {
    this.radius = radius;
    let default_location = { 
        x : 0,
        y : 0
    };
    this.draw = function() { 
        console.log('draw');
    }
    Object.defineProperty(this,'defaultLocation', {
        get : function() {
            return default_location;
        },
        set : function(value) {
            if(!value.x || !value.y) {
                throw new Error('Invalid object');
            }
            default_location.x = value.x;
            default_location.y = value.y;
        }
    })
    return this; 
}

let c3 = new Circle3(1);
console.log(c3.defaultLocation); //get
c3.defaultLocation = {x : 1, y : 1}; //set
console.log(c3.defaultLocation); //get

//ex1 : stopwatch
// function StopWatch() {
//     let lastTimeRecorded = null;
//     let start = false;
//     let end = false;
//     this.duration = 0.0;

//     this.start = function() {
//         if(start === true) {
//             throw new Error('Stopwatch has already started.');
//         }
//         lastTimeRecorded = Date.now();
//         start = true;
//     }

//     this.stop = function() {
//         if(end === true) {
//             throw new Error('Stopwatch has already stopped.');
//         }
//         this.duration = ( Date.now() - lastTimeRecorded ) / 1000;
//         this.duration = this.duration.toFixed(4);
//         end = true;
//     }

//     this.reset = function() {
//         start = false;
//         end = false;
//         this.duration = 0.0;
//     }
// }

// const sw = new StopWatch();


//Prototypical Inheritance

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() { //add duplicate function to prototype Shape
    console.log('duplicate')
}



function Circle2(radius,color) {
    Shape.call(this,color); //do this so that color variable can be accessed by Circle
    this.radius = radius;
}

Circle2.prototype.draw = function() {
    console.log('draw');
};

// Circle2.prototype = Object.create(Shape.prototype) //Circle prototype will be inherited
//                                                   // from Shape prototype

// Circle2.prototype.constructor = Circle2; //reset the constructor of Circle

function extend(Child,Parent) {
    Child.prototype = Object.create(Parent.prototype) //Circle prototype will be inherited
                                                  // from Shape prototype

    Child.prototype.constructor = Child; //reset the constructor of Circle
}

extend(Circle2,Shape); //Circle2 inherit from Shape
let c2 = new Circle2(1,'red');

// Method overriding
Circle2.prototype.duplicate = function() { //add duplicate function to prototype Shape
    Shape.prototype.duplicate.call(this); // this is to get the duplcate method from Shape
    
    console.log('duplicate from Circle extended from Shape');
}


// Polymorphism (many forms)
function Square(){}
extend(Square,Shape);

Square.prototype.duplicate = function() { //add duplicate function to prototype Shape
    Shape.prototype.duplicate.call(this); // this is to get the duplcate method from Shape
    
    console.log('duplicate from Square extended from Shape');
}
//Example of polymorphism
const shapes = [
    new Square(),
    new Circle2()
]

for ( let shape of shapes) {
    shape.duplicate();
}


// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk); 

//ES6 Class

const _radius = new WeakMap(); // private in ES6
const _move = new WeakMap(); // key is this, value is the private function or variable
class Circle5 {
    constructor(radius) {
        _radius.set(this,radius);
        _move.set(this, function() { // private function
            console.log('move',this);
        })
    }

    get radius() { //get method in ES6
        return _radius.get(this);
    }

    set radius(value) {
        _radius.set(this,value);
    }

    // Instance method
    draw = function() {
        console.log('draw ne ' + _radius.get(this));
        _move.get(this)(); // this is to get the private variable in class.
    }

    // Static method
    static parse(str) {
        let radius = JSON.parse(str);
        console.log(radius);
        return new Circle5(radius);
    }
    
}

const c5 = new Circle5(1);
c5.draw();
// c5._draw();
const c6 = Circle5.parse('{"radius" : 5}');


class Shape2 {
    constructor(color) {
        this.color = color;
    }
    
    move() {
        console.log('move');
    }
}

class Circle6 extends Shape2 {
    
    constructor(color) {
        super(color);
    }

    draw() { // this will be in prototype
        console.log('draw');
    }

    move() {
        super.move();
        console.log('move override by circle');
    }
}

let c = new Circle6('red');
c.move();

