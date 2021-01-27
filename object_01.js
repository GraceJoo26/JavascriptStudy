//객체선언
var product = {
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
        alert(this.name + '가' + food +'을/를 먹습니다.');
    }
}
person.eat('밥');