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

