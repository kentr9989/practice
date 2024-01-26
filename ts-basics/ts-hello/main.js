"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_ts_1 = require("./point.ts");
//declare variable
// to run : tsc main.ts | node main.js
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backGroundColor = Color.Red;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c') //return a boolean
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.draw = function () {
            console.log('X: ' + this.x + ' Y:' + this.y);
        };
        this.getX = function () {
            return this.x;
        };
        this.setX = function (value) {
            if (value < 0) {
                throw new Error('Value can not be less than 0');
            }
            this.x = value;
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
// let drawPoint =  (point : {x : number, y: number}) => { -- this is too lengthly - replace this with interface
//     //....
// }
var p = new Point(1, 2);
var p2 = new point_ts_1.Point2();
// p.x = 2;
// p.y = 3;
p.draw();
