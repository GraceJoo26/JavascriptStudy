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

// in keyword 사용
output += "'name' in student :"+('name' in student) +'\n';
//출력
console.log(output);
