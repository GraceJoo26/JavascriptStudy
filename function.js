// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2){ body ... return;}
// one function === one thing 하나의 함수는 한 가지 일만 하도록!
// naming : doSomething, command, verb //동사로 뭐 해 뭐 해 이렇게 지시
// e.g. createCardAndPoint -> createCard, createPoint->함수 깨끗하게 하나하나 지시 가능하게 만들기
// function is object in JS. 따라서 함수를 변수에다가도 넣을 수 있고, 리턴도 가능

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters(원어 매개변수?): passed by value->메모리에 value가 저장되어 있기 때문에 그대로 저장
// object parameters: passed by reference: object는 memory에 reference가 저장되어진다. 그래서 reference로 전달,저장되어진다.
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
/* function showMessage(message, from){ // 누구로부터 메시지가 왔는지 출력
    //console.log(`${message} by ${from}`);
}
showMessage('hi!');//from이 정의가 안 되어 있으므로 undefined로 나온다.


function showMessage(message, from){ 
    if(from === undefined){
        from = "unknown";
    }
    console.log(`${message} by ${from}`);
}
showMessage('hi!'); */

//-> 쉽게 쓰는 방법!!

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)->배열의 형태로 전달
function printAll(...args){
    for (let i =0 ; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }
    //배열로 넣어도 된다.
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding','ellie');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();// 함수안:local, 함수밖:global-> 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

// 6.Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1 , 2); // 3
console.log(`sum:${sum(1 , 2)}`);

// 7.(현업) Early return, early exit
// bad case
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic ...
    }
}
// good case
function upgradeUser(user){
    if(user.point <= 0){
        return; // 함수 충족 안 될 것 같으면 여기다 로직 쓰지말고 바로 리턴시키고(로딩 시간단축)
    } 
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function


// 1. functionexpression ->함수가 적혀지고 할당된 다음부터 호출가능
// a function declaration can be called earlier than it is defined.(hoisted)
// 함수가 선언되기 이전에도 호출이 가능->js엔진이 선언된 것을 제일 위로 올려주기 때문
// a function expression is created when the execution reaches it.


const print = function(){ //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
    printYes();
    }else{
    printNo();
    }
}
//anonymous function
const printYes = function() {
    console.log('yes!');
} ;

//named function
//better debugging in debugger's stack traces
//recursions->함수안에서 스스로 부르기(호출)
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};

/* const simplePrint = () {
    console.log('simplePrint!');
}; */
const simplePrint = () => console.log('simplePrint!');
const add = (a , b) => a + b;


// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// fun quiz time
// function calculate (command, a , b)
//command : add, substract, divide, multiply, remainder