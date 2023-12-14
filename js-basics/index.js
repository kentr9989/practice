// This is my first javascript code
console.log('hello world')

let namePro = 5;
console.log(namePro);

//  Person object
let person = {
    name : 'Mosh',
    age : 30
};

console.log(person);

// Dot notation 
person.name = 'Peter';
console.log(person);

//  Bracket notation
let selection = 'name';
person[selection] = 'Kim'; //OR person[name] = 'Kim' 
                           // would be the same thing
console.log(person);


//  Array
let selectedColors = [1,2,3,4];
console.log(selectedColors);
selectedColors[4] = 'Peter'; // Add an extra variable to the array
console.log(selectedColors); // Array is dynamic
console.log(selectedColors.length);

//  Functions
function greet(name) {
    console.log('Hello ' + name)
}   // No need semicolons when declare function
greet('Peter');

function square(num) {
    return num * 2;
}

let num = square(2);
console.log(num);


//  Control flow
let points = 105;
if (points > 100 && points < 120)  {
    console.log('hi');
} else if (points < 50) {
    console.log('b');
} else {
    console.log('nothing else');
} 

for (let i = 0; i < 5; i++) {
    console.log('hello world',i);
}

let num1 = 0;
while (num1 < 5) {
    console.log('hello world 2');
    num1++;
}

// for in loop

const person2 = {
    name : 'mosh',
    age : 30
};

for (let key in person2) {
    console.log(key, person2[key]);
}

let multipleColours = ['red','yellow','green'];

for (let colours in multipleColours) {
    console.log(multipleColours[colours]);
}


//exercise : max of two numbers
// function maxOfTwo(number1,number2) {
//     if (number1 > number2) {
//         return number1;
//     }
//     return number2;
// }

// console.log(maxOfTwo(3,5));


// exercise checkspeed

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed < 74) {
//         console.log('0')
//         return 0;
//     } 
//     let points = Math.floor((speed - speedLimit)/kmPerPoint); 
// }
// console.log(checkSpeed(84))

// exercise string properties
// const movie = {
//     title : 20,
//     releaseYear : 2018,
//     rating : 4.5,
//     director : 'b'
// };
// function showProperties(movie) {
//     for (let mov in movie) {
//         if (typeof(movie[mov]) === 'string') {
//             console.log(mov,movie[mov]);
//         }
//     }
// }
// showProperties(movie);


// exercise sumOfMultiples
// function sum(limit) {
//     let totalSum = 0;

//     for(let i = 0; i <= limit; i++ ){
//         if(i % 3 === 0 || i % 5 === 0) {
//             totalSum = i + totalSum;
//         }
//     }
//     console.log(totalSum);
// }
// sum(10);



// Objects 
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

// Factory function to create object
function createCircle(radius) {
    const circle = {
        radius : radius,
        draw: function() {
            console.log('draw 2');
        }
    };
    return circle;
}

const circle1 = createCircle(1);
circle1.color = 'yellow';
delete circle1.color;

circle1.draw();


// Constructor function to create object (pascal notation : OneTwoThree)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw 3');
        return 2;
    }
    return this;
}

const circle3 = new Circle(1);
circle3.newcolor = 'red';
console.log(circle3.draw());

// Exercise 1

// function Address(street,city,zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode; 
//     this.showAddress = function () {
//         console.log(this.street, this.city, this.zipcode);
//     }
// }
// const addr1 = new Address('King','NSW',2000);
// addr1.showAddress();

// Array operations

let numbers = [3,4];

// Add to end
numbers.push(5);

// Add to beginning
numbers.unshift(1);

// Add to middle - add to position 2
numbers.splice(2,0,'a');

// Find element in array
// Find primitype - If found 0, not found -1
numbers.indexOf(3);
numbers.lastIndexOf(3);
numbers.includes(3); // return true or false

// Find reference type
let courses = [
    { id : 1, name : 'a'},
    { id : 2, name : 'b'}
];

const foundCourse = courses.find(function(course) {
    return course.name === 'a';
});

console.log(foundCourse);

// Remove the last element
numbers.pop();

//  Remove first element
numbers.shift();

// Remove the specific element 
//splice([element to be deleted],[how many elements you want to delete])
numbers.splice(2,1);


// Empty array : 3 ways
// numbers = [];
// numbers.length = 0;
// numbers.slice(0,numbers.length);

// Combine array
let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
let combined2 = [];
combined2 = [...first,'a','b',...second];
let copy = [...combined]; //spread operator

// iterate array

first.forEach(function(number) {
    console.log(number);
})

// join array
let nums = [-1,2,3];
let res = nums.join(','); // convert to string
console.log(res);

//sort
let res2 = nums.sort();
let c = [
    {id : 1, name : 'abc'},
    {id : 2, name : 'def'}
];

c.sort(function(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

nums.some(function(value) {
   return value >= 0; //if some value is greater than 0, return true 
});

nums.every(function(value) {
    return value >= 0; //if ALL value is greater than 0, return true 
 });

let newNums = nums.filter(function(value) {
    return value >= 0; //if ALL value is greater create it into new array
 });

 //map method : return an array of mapping each valu
 // in the array
 let newNumsMap = newNums.map(function(value) {
    return '<li>' + value + '<li>';
 })

//or we can write 
let newNumsMap2 = nums.filter(n =>  { return n >= 0;})
                      .map( value =>  {return value + 'li';});

// console.log(newNumsMap2);


// reducing an array in to a single value
let n_1 = [1,-1,2,3];

let re = n_1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0); //0 is the initial value , re will be 5.

// ex 1 
// const numbers = arrayFromRange(1,4);
// console.log(numbers);
// function arrayFromRange(min,max) {
//     let arr = [];
//     for(let i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(arrayFromRange(1,4));


//ex 2
// function includesNum(array, searchElement) {
//     return array.some(value => {
//         return value === searchElement;
//     });
// }

// const num_2 = [1,2,3,4,1];
// const variable = 1;
// console.log(includesNum(num_2,variable));

//ex 3
// function except(array,excluded) {
//     return array.filter(value => {
//         return value !== excluded;
//     });
// }

// const num_2 = [1,2,3,4,1];
// console.log(except(num_2,num_2[0]));

//ex 4
// function move(array,index,offset) {
//     let lengthOfArray = array.length;
//     let array2 = [...array];
//     if( (index + offset) < 0 || (index + offset) > (lengthOfArray-1)) {
//         console.error('Invalid offset');
//         return;
//     }
//     copy_value = array2[index];
//     array2[index] = array2[index + offset];
//     array2[index + offset] = copy_value;

//     return array2;
// }
// const num_3 = [1,2,3,4];
// console.log(move(num_3,3,-2));

//ex 5
// function countOccurences(array,searchElement) {
//     return array.filter(value => value === searchElement)
//                 .length;
// }

// const num_5 = [1,2,3,4,1];
// console.log(countOccurences(num_5,num_5[0]));

//ex 6
// function getMovies(movies) {
//     return movies
//     .filter(movie => movie.year === 2018 && movie.rating > 4)
//     .sort((a,b) => {
//                 if(a.rating > b.rating) return -1;
//                 if(b.rating > a.rating) return 1;
//                 return 0;
//          })
//     ;
// }

// const movies = [
//     {title : 'a', year : 2018, rating : 4.5},
//     {title : 'b', year : 2018, rating : 4.7},
//     {title : 'c', year : 2018, rating : 3},
//     {title : 'd', year : 2017, rating : 4.5},
// ];

// console.log(getMovies(movies));

// Anonymous function expression

let run = function (){
    console.log('run');
};
run();

// Getter and setters 
const p = {
    firstName : 'Mosh',
    lastName : 'Ha',
    get fullName() {
        return `${this.firstName} ${person.lastName}`
    },
    set fullName(value) { // can only have one formal parameters
        if(typeof value !== 'string') {
            throw new Error('Value is not a string');
        }
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    p.fullName = null;
}
catch(e) {
    console.log(e);
}

console.log(p);




