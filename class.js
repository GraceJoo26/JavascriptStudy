'use strict';
/* class person{
    name;// 속성(field)
    age;// 속성(field)
    speak()  }*///행동(method)
    //class에는 필드와 메서드가 들어있다.,
    //간혹 필드만 들어있는 경우도 있다(data only)->data class   

// class=> 붕어빵 틀; template만 정의해 놓음. 한 번만 선언
// 이런 클래스 안에는 ~~이런 데이터만 들어올 수 있어

// object => 팥 붕어빵, 크림 붕어빵, 피자 붕어빵; 
// 실제로 데이터를 넣어서 만드는 것
// class는 데이터화 되질 않아 메모리로 저장 X, but object는 메모리에도 올라가게 된다.

// Object-oriented programming
// object : instance of a class
// class : template
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
      // fields
      this.name = name;
      this.age = age;
    }

      // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    /* get age() {
        return this.age;
    }
    set age(value) {
        this.age = value;
    } */
    // 우리가 age라는 getter를 정의하는 순간, 49번라인의 this.age는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라 바로 getter를 호출하게 된다.
    //그리고 우리가 setter를 정의하는 순간, =sign, assign을 호출할 때, 즉 값을 할당 할 때, 바로 메모리의 값을 할당하는 것이 아니라,
    // 이 setter를 호출하게 된다. 그 말은 우리가 setter안에서 전달된 value를 thisage에 할당할 때 메모리의 값을 업데이트하는 것이 아니라 setter를 호출하게 된다
    //즉 이 setter로 다시 돌아오게 돼서 이 문장은 또다시 setter로 호출하고 계속 이게 무한정 반복되니까. call stack이 닫혔어 라고 경고문
    //이걸 방지하기 위해서 getter와 setter의 변수 이름을다르게 바꿔줘야 한다.
    
    get age() {
        return this._age;//이런식으로
    }
    set age(value) {
        //나이가 -1이면 안되니까
        /* if (value < 0) {
            throw Error ('age cannot be negative');
        } */
        this._age = value < 0? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //최신 브라우저지원 안 돼서 바벨을 이용해야한다. 아직 사용하기엔 시기상조

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
/* console.log(article1.publisher); */ // 함수 내부에 있어서 undefined뜬다.
console.log(Article.publisher);
Article.printPublisher();
// object에 상관없이 들어오는 데이터에 상관 없이 공통적으로  class에서 쓸 수 있는 것이라면,
// static과 static method에서 작성하는 것이 메모리의 사용을 좀 더 줄여줄 수 있다.


// 5. Inheritance상속, 
// a way for one class to extend another class
// 다양성
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color !`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape{
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString(){
        return `triangle :color: ${this.color}`;
        //console.log(triangle.toString());
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); 
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); 
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
//           윗Obj       =>    윗Class 인지아닌지?
console.log(triangle.toString());

//JavaScript MDN reference Page 추천!
