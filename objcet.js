//Objects
//one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };


// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

/* const name = 'ellie';
const age = 4;
print(name, age); */
function print(person){
    console.log(person.name);
    console.log(person.age);
}

//              key    value
const ellie = { name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. computed properties
// key should be always string type!(항상 스트링타입으로!)
console.log(ellie.name); // 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때
console.log(ellie['name']);// 정확하게 어떤 키가 아는지 모를 때, 런타임에서 결정될 때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
/* const person4 = makePerson ('ellie', 30); */
const person4 = new Person('ellie', 30);
console.log(person4);

/* function makePerson(name, age){
    return {
        name,
        age,
    };
};  이렇게도 쓰지만...*/
// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator : property existance check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for.. in vs for.. of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (vlaue of iterable)
const array = [1, 2, 4, 5];
/* for (let i = 0; i < array.length ; i ++){
    console.log(array[i]);
} */
for (value of array){
    console.log(value);
}

// 7. Fun clonning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

/* const user4 = {};
Object.assign(user4, user);
console.log(user4) */

const user4 = Object.assign({}, user);
console.log(user4);

// another exampel
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size : 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size); // mixed: blue, big 뒤에 나오는 아이일수록 덮어씌우기한다.



