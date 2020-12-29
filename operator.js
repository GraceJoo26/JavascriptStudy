
// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 

1 + 2 = ${1 + 2}`);

console.log("Grace's \n \t book") // \n ->줄바꾸기, \t ->tab

// 2. Numeric operators
console.log( 1 + 1 ); // add
console.log( 1 - 1 ); // substract 
console.log( 1 / 1 ); // divide
console.log( 1 * 1 ); // multiply
console.log( 5 % 2 ); // remainder
console.log( 2 ** 3 ); //exponentiation 2^3

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter +1
// preIncrement = counter;
console.log( `preIncrement : ${preIncrement}, counter : ${counter}` );
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter +1;
console.log( `preIncrement : ${preIncrement}, counter : ${counter}` );
const preDecrement = --counter;
console.log( `preDecrement : ${preIncrement}, counter : ${counter}` );
const postDecrement = counter--;
console.log( `preDecrement : ${preIncrement}, counter : ${counter}` );

// 4. Assignment operators
let z = 3;
let y = 6;
z += y; // z = z + y;
z -= y; // z = z - y;
z *= y;
z /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logival operators: \\ (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;


// \\ (or) 처음으로 true가 나오면 멈춘다. or은 어떤것이던 간에 하나가 true이면 true출력.
console.log(`or : ${value1 || value2 || check()}`);  // 상대적으로 heavy한 check 함수는 맨 뒤로두기!


// && (and), finds the first falsy value
console.log(`and :  ${value1 && value2 && check()}`); // 상대적으로 heavy한 check 함수는 맨 뒤로두기!

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check(){
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('?');
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