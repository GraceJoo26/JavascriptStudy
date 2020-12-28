// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

//6. Logical operators: \\(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// \\ (or), finds the first ruthy value
console.log(`or: ${value1 || value2 || check()}`);
    

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);


//often used to compress long if-statement
//nullableObject && nullableObject.something
/* if(nullableObject != null){
    nullableObject.something;
} */


function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('??');
    }
    return true;
} 

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name : 'ellie'};
const ellie2 = { name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality -puzzler
console.log(0 == false); true
console.log(0 === false); false
console.log('' == false); true
console.log(''=== false); false
console.log(null == undefined); true
console.log(null === undefined); false

// 8. Conditional operators: if
// if, else if , else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!'); 
}else if( name ==='coder'){
    console.log('You are amazing coder');
}else {
    console.log ('unknown');
}

// 9. Ternary operator:?
// condition ? value1 : value2 ;
console.log(name === 'ellie' ? 'yes': 'no');

// 10.Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ='Chrome';
    switch (browser) {
        case 'IE':
            console.log('go away!');
            break;
        case  'Chrome':
            /* console.log('love you!');
            break; */
        case 'Firefox':
            console.log('love you!');
            break;
        default:
            console.groupCollapsed('same all!');
            break;
    }

    // 11. Loops
    // while loop, while the condition is truthy,
    // body code is executed.
let i = 3;
while (i > 0){
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}

for (let i =3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i  < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers(use continue)
    for(let k = 0; k < 11; k++){
        if( k % 2 === 0 ){
         console.log(`q1. ${k}`);
        }
    }
// 02. literate from 0 to 10 and print numbers until reaching 8 (use break) 
    for(let h = 0; h <=10; h++){
        if(h > 8 ){
            break;
        }
        console.log(`q2. ${h}`);
    }