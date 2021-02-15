# 6. 객체지향 프로그래밍

### 	

### 	 6.1객체개요

```배열의 선언
배열의 선언 

<script>

	var array = ['사과', '바나나','망고','딸기'];

</script>


표로 나타낸 배열

index	ㅣ	element
0		ㅣ	사과
1		ㅣ	바나나
2		ㅣ	망고
3		ㅣ	딸기
```



#### 		6.1-1 객체의 생성

```6.2객체의 생성
<script>
//객체 선언
	var product = {
		제품명: '7D 건조 망고',
		유형:'당절임',
		성분:'망고, 설탕, 메타중아황산나트륨, 치자황색소',
		원산지:'필리핀'
		};
</script>

표로 나타낸 객체
key   ㅣ '7D 건조 망고'
유형	 ㅣ '당절임'
성분   ㅣ '망고, 설탕, 메타중아황산나트륨, 치자황색소'
원산지 ㅣ '필리핀'


객체 뒤 대괄호 사용 후 키표기하면 객체의 요소에 접근할 수 있다.
product['제품명']->'7D 건조 망고'
product['유형']->'당절임'
product['성분']->'망고, 설탕, 메타중아황산나트륨, 치자황색소'
product['원산지']->'필리핀'
---
product.제품명
product.유형
product.성분
product.원산지 => 보조기능 활용가능

```



​		객체의 키는 식별자 또는 문자열 모두 사용할 수 있다.

```객체의 속성
<script>
	var object = {
		'with space':273,
		'with ~!12!@#$@!!@#':52
	};
</script>

object['with space'] =>273
object['with ~!12!@#$@!!@#'] =>52
```



### 6.2 객체의 속성과 메서드

※ 자바스크립트에선 요소와 속성이 다르지 않다. 다른 프로그래밍 언어에서는 요소와 속성을 구분하여 부른다.

​	배열 내부에 있는 값 하나하나: element

​	객체 내부에 있는 값 하나하나: property

C++ , JAVA , C# => 객체 내부에서 this키워드 생략 가능하다. 하지만 JS에서는 생략불가.





### 6.3 객체와 반복문

    <script>
    	var output = '';
    	for(var key in product) {
        	output += '·' + key + ':' + product[key] +'\n';
    	}
    	console.log(output);
    </script>
    
    Console창
    	·name:Microsoft Visual Studio 2010 Ultimate
    	·price:15,000,000원
    	·language:한국어
    	·supportOS:Win 32/64
    	·subscription:true



### 6.4 객체와 관련된 키워드

```
1. In
 
 //객체선언
   var output = '';
   var student = {
     name:'연하진',
     Korean:92, Math:98, English:96, Science:98
   };
   
 //in keyword 사용
   output += "'name' in student :"+('name' in student) +'\n';
   output += "'gender' in student: " + ('gender' in student); 

 //출력
   console.log(output);

2. With
 output += 'name:' + student.name + '\n';
 output += 'Korean:' + student.Korean + '\n';
 output += 'Math:' + student.Math + '\n';
 output += 'English:' + student.English + '\n';
 output += 'Science:' + student.Science + '\n';
 output += 'total:' + (student.Korean + student.Math + student.English + student.Science);
 
=>
with (student){
 output += 'name:' + name + '\n';
 output += 'Korean:'+ Korean + '\n';
 output += 'Math:'+ Math +'\n';
 output += 'English:' + English + '\n';
 output += 'Science' + Science + '\n';
 output += 'total:' +(Korean + Math + English + Science);
 }
 
 with 키워드 사용시 변수 이름 충돌 해결방법
 var output = '';
 with (student) {
 	window.output +='name:' + name + '\n';
 	window.output += 'Korean:'+ Korean + '\n';
 	window.output += 'Math:'+ Math +'\n';
 	window.output += 'English:' + English + '\n';
 	window.output += 'Science' + Science + '\n';
 	window.output += 'total:' +(Korean + Math + English + Science);
 }
```



### 6.5 객체의 속성 추가와 제거

```6.5 객체의 속성 추가와 제거
빈 객체에서 객체의 속성을 추가하는 방법

<script>
	//빈 객체를 선언
var student = {};
student.이름 = "주유진";
student.취미 = "악기";
student.특기 = "프로그래밍";
student.장래희망 = "프론트엔드개발자";

student.toString = function() {
  var output = " ";
  for (var key in this) {
    if (key != "toString") {
      output += key + "\t" + this[key] + "\n";
    }
  }
  return output;
};
//alert(student.toString());
delete(student.장래희망);
//alert(student);
</script>
```



### 6.6  객체와 배열을 사용한 데이터 관리

```
성적 총점과 평균을 계산하는 예제
var students = [];
var student0 ={이름:'주유진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student1 ={이름:'주요진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student2 ={이름:'주시진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student3 ={이름:'주지진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student4 ={이름:'주비진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student5 ={이름:'주수진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student6 ={이름:'주재진',국어:'90',수학:'100',영어:'80',과학:'50'};
var student7 ={이름:'주기진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student8 ={이름:'주세진',국어:'87',수학:'98',영어:'88',과학:'100'};
var student9 ={이름:'주추진',국어:'87',수학:'98',영어:'88',과학:'100'};

students.push({이름:'주유진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주요진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주시진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주지진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주비진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주수진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주재진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주기진',국어:'90',수학:'100',영어:'80',과학:'50'});
students.push({이름:'주세진',국어:'87',수학:'98',영어:'88',과학:'100'});
students.push({이름:'주추진',국어:'87',수학:'98',영어:'88',과학:'100'});

for (var i in students){
  students[i].getSum = function(){
    return this.국어 + this.수학 + this.영어 + this.과학;
  };
  students[i].getAverage = function(){
    return this.getSum()/4;
  };
}
var output = '이름\t총점\t\평균\n';
for (var i in students){
  with (students [i]){
    output += 이름 + '\t' + getSum()+ '\t' + getAverage() + '\n';
  }
}
alert(output);
```



### 6.7 함수를 사용한 객체의 생성

```
function makeStudent(name, korean, math, english, science) {
  var willReturn = {
    이름 : name,
    국어 : korean,
    수학 : math,
    영어 : english,
    과학 : science,

    getSum : function () {
      return this.국어 + this.수학 + this.영어 + this.과학;
    },
    getAverage : function () {
      return this.getSum()/4;
    },
    toString : function () {
      return this.이름 + "\t" + this.getSum() + "\t" + this.getAverage();
    }
  };
  return willReturn;
}

var student = [];
student.push(makeStudent("주유진", 100, 100, 100, 100))
student.push(makeStudent("주지진", 50, 100, 50, 97))

var output = "이름\t총점\t평균\n";
for (var i in student){
  output += student[i].toString() + "\n";
}
alert(output);
```



### 6.8 생성자 함수

```\
function Student(name, korean, math, english, science) {
  this.이름 = name,
  this.국어 = korean,
  this.수학 = math,
  this.영어 = english,
  this.과학 = science,
  this.getSum = function () {
    return this.국어 + this.수학 + this.영어 + this.과학;
  },
  this.getAverage = function () {
    return this.getSum()/4;
  },
  this.toString = function () {
    return this.이름 + "\t" + this.getSum() + "\t" + this.getAverage();
  }
}

var student = [];
student.push(new Student("주유진", 100, 100, 100, 100));
student.push(new Student("주지진", 50, 100, 50, 97));

var output = "이름\t총점\t평균\n";
for (var i in student){
  output += student[i].toString() + "\n";
}
alert(output);
```

6.8 생성자 함수와 6.7 함수를 사용한 객체의 생성은 겉으로 보았을 때 다를 바 없다.

하지만 6.9 프로토타입을 살펴보면 다른 점을 알 수 있을 것이다. 



### 6.9 프로토타입

```
function Student(name, korean, math, english, science) {
  this.이름 = name,
  this.국어 = korean,
  this.수학 = math,
  this.영어 = english,
  this.과학 = science
  /* this.getSum = function () {
    return this.국어 + this.수학 + this.영어 + this.과학;
  },
  this.getAverage = function () {
    return this.getSum()/4;
  },
  this.toString = function () {
    return this.이름 + "\t" + this.getSum() + "\t" + this.getAverage();
  } */
}
Student.prototype.getSum = function () {
  return this.국어 + this.수학 + this.영어 + this.과학;
}
Student.prototype.getAverage = function () {
  return this.getSum()/4;
}
Student.prototype.toString = function () {
  return this.이름 + "\t" + this.getSum() + "\t" + this.getAverage();
}
```

프로토타입은 생성자 함수만이 가지는 것으로,

프로토타입 사용을 통해 메서드를 한번만 정의하므로 메모리 사용에 있어 효율적이다.



### 6.10 instanceof

```
function Student(name) {
  this.name = name;
}
var student = new Student("주유진");

alert(student instanceof Student);
alert(student instanceof Number);
alert(student instanceof String);
alert(student instanceof Boolean);
```

true

false

false

false

