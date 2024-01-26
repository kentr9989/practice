import {Point2} from './point.ts'

//declare variable
// to run : tsc main.ts | node main.js
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

enum Color {Red = 0, Green = 1 , Blue = 2};
let backGroundColor = Color.Red;

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c') //return a boolean


let log = function(message) {
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

class Point {
    private x?: number; // ? is used when user does not know what to put in constructor
    private y?: number; // private to make x and y cant not change
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw = function() {
        console.log('X: ' + this.x + ' Y:'  + this.y);
    }

    getX = function() {
        return this.x;
    }

    setX = function(value) {
        if (value < 0) {
            throw new Error('Value can not be less than 0');
        }
        this.x = value;
    }
    
    // draw()  { //make it cohesion
    //     console.log('X: ' + this.x, + ' Y:'  + this.y);
    // }

    // getDistance = function() { //make it cohesion
    //     //..
    // }
}


// let drawPoint =  (point : {x : number, y: number}) => { -- this is too lengthly - replace this with interface
//     //....
// }

let p: Point = new Point(1,2);
let p2: Point2 = new Point2();
// p.x = 2;
// p.y = 3;
p.draw();
