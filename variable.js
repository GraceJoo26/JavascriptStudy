//1. Use strict
//added in Es5
//use this for Vanila Javascript.

'use strict';//modern하게 개발공부

//2.variable, rw(read/write)
//let(added in ES6)
{
    
    let name = 'grace';
    console.log(name);
    name='hello World'; 
    console.log(name);
}

// var(don't ever use this!)
// var hoisting (move declaration from bottom to top) 끌어올려주다
// has no block scope->블럭으로 변수 선언해도 할당된것이 바로 콘솔에 보인다.

// 3.constant r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek=7;
const maNumber=5;

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze()) data type을 절대 바꿀 수 없다.
// Mutable data types : all objects by default are mutable in JS(기본적으로 모든 obj는 변경이 가능.)array
// favor immutable data type(변수지정시 값이 바뀌지 않음let과 다르다) always for a few reasons:
//  -security
//  -thread safety
//  -reduce huma mistakes






// 4.variable types
// primitive (grace=me), single item: number,string boolean, null, undefined
// object(grace.age, grace.name....), box container
// function, first-class function

const count = 17; // integer
const size = 17.1;// decimal number
console.log(`value: ${count},type:${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// 0으로 나누면 무한대, -무한대로 값이 출력되고, 이것을 infinity라고 함
// js를 이용한 포지션계산시 나누고자 하는 값이 0인지 아닌지, 숫자인지 아닌지 확인도 하지 않고 연산을 해버리면 숫자가 아닌 infinity될 수도 있다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairly new, don't use it yet)-->새로 나온거라서 아직 사파리나 다른 브라우저에서 인식 할 수 없다.
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) 백틱쓰고 ` + ${변수} + `쓰면 이어져서 나온다.
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type : ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ' '
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x;//값이 지정되지 않음
console.log(`value : ${x}, type : ${typeof x}`);

//symbol, vreate unique identifiiers for objects
//고유한 식별자가 필요하거나 동시 다발적으로 일어나는 상황에서 우선순위를 매기고 싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  //true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

//object, real-life object, data structure
const grace = { name : 'Grace', age : 30 };
grace.age = 21;

//5. Dynamic typing : dynamically typed language
//선언시 어떤 타입인지 선언하지 않고 런타임(프로그램이 동작 할 때) 할당 된 값에 따라 타입이 변경 될 수 있다는 것
let text ='hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7'+5;
console.log(`value : ${text}, type : ${typeof text}`); //75 string
text = '8' / 2;
console.log(`value : ${text}, type : ${typeof text}`); //4 number