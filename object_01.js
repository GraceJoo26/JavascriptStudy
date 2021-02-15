//객체선언
/* var product = {
    제품명 : '7D건조망고',
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
}

console.log(product.제품명);

var object = {
    'with space':273,
    'with ~!12!@#$@!!@#':52
};
console.log(object['with space']);
console.log(object['with ~!12!@#$@!!@#']);
var person = {
    name:'Grace',
    eat: function(food){
        alert(this.name + '가' + food +'을 먹습니다.');
    }
}
person.eat('밥'); */


var product = {
    name:'Microsoft Visual Studio 2010 Ultimate',
    price:'15,000,000원',
    language:'한국어',
    supportOS:'Win 32/64',
    subscription:true
};

//출력
/* var output = '';

for(var key in product) {
    output += '·' + key + ':' + product[key] +'\n';
} */

/* for(i=0; i<=product.length; i++){
    output += '·' + key + ':' + product[key] +'\n';
} */

//객체선언
var output = '';
var student = {
    name:'연하진',
    Korean:92, Math:98, English:96, Science:98
};
/* 
// in keyword 사용
output += "'name' in student :"+('name' in student) +'\n';
output += "'gender' in student: " + ('gender' in student); 
// */

/* output += 'name:' + student.name + '\n';
output += 'Korean:' + student.Korean + '\n';
output += 'Math:' + student.Math + '\n';
output += 'English:' + student.English + '\n';
output += 'Science:' + student.Science + '\n';
output += 'total:' + (student.Korean + student.Math + student.English + student.Science); */

//with 썼을 때! -->위에 것을 좀 간단히 쓰는 것 
//with 을 쓺으로서 student
/* with (student){
    output += 'name:' + name + '\n';
    output += 'Korean:'+ Korean + '\n';
    output += 'Math:'+ Math +'\n';
    output += 'English:' + English + '\n';
    output += 'Science' + Science + '\n';
    output += 'total:' +(Korean + Math + English + Science);
    }
  */

/* 
    var students = [];
    var student0 ={이름:'주유진',국어:87,수학:98,영어:88,과학:100};
    var student1 ={이름:'주요진',국어:87,수학:98,영어:88,과학:100};
    var student2 ={이름:'주시진',국어:87,수학:98,영어:88,과학:100};
    var student3 ={이름:'주지진',국어:87,수학:98,영어:88,과학:100};
    var student4 ={이름:'주비진',국어:87,수학:98,영어:88,과학:100};
    var student5 ={이름:'주수진',국어:87,수학:98,영어:88,과학:100};
    var student6 ={이름:'주재진',국어:90,수학:100,영어:80,과학:50};
    var student7 ={이름:'주기진',국어:87,수학:98,영어:88,과학:100};
    var student8 ={이름:'주세진',국어:87,수학:98,영어:88,과학:100};
    var student9 ={이름:'주추진',국어:87,수학:98,영어:88,과학:100};
    
    students.push({이름:'주유진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주요진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주시진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주지진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주비진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주수진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주재진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주기진',국어:90,수학:100,영어:80,과학:50});
    students.push({이름:'주세진',국어:87,수학:98,영어:88,과학:100});
    students.push({이름:'주추진',국어:87,수학:98,영어:88,과학:100});
    
    for (var i in students){
      students[i].getSum = function(){
        return this.국어 + this.수학 + this.영어 + this.과학;
      };
      students[i].getAverage = function(){
        return this.getSum()/4;
      };
    }
    var output = '이름\t총점\t평균\n';
    for (var i in students){
      with (students [i]){
        output += 이름 + '\t' + getSum()+ '\t' + getAverage() + '\n';
      }
    }
    alert(output);
 */
//함수를 사용한 객체 생성
/* function makeStudent(name, korean, math, english, science) {
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
 */

//생성자 함수
/* function Student(name, korean, math, english, science) {
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
alert(output); */

//프로토타입
/* function Student(name, korean, math, english, science) {
  this.이름 = name,
  this.국어 = korean,
  this.수학 = math,
  this.영어 = english,
  this.과학 = science
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
Student.prototype.getSum = function () {
  return this.국어 + this.수학 + this.영어 + this.과학;
}
Student.prototype.getAverage = function () {
  return this.getSum()/4;
}
Student.prototype.toString = function () {
  return this.이름 + "\t" + this.getSum() + "\t" + this.getAverage();
}


var student = [];
student.push(new Student("주유진", 100, 100, 100, 100));
student.push(new Student("주지진", 50, 100, 50, 97));

var output = "이름\t총점\t평균\n";
for (var i in student){
  output += student[i].toString() + "\n";
}
alert(output);
 */
//instanceof 키워드
function Student(name) {
  this.name = name;
}
var student = new Student("주유진");

alert(student instanceof Student);
alert(student instanceof Number);
alert(student instanceof String);
alert(student instanceof Boolean);