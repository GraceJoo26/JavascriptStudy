
---
# 모던 웹을 위한 JavaScript jQuery입문<br/>						책 요약정리
---


### Chaper 02 자바스크립트 기본

---
- 기초적인 것부터, 내가 잘 몰랐던 부분에 대해서 정리 하였음
---

```목차
<목차>
	2.1	 출력
	2.2  문자열
	2.3  숫자
	2.4  불리언
	2.5  변수
	2.6  자료형 검사
	2.7  입력
	2.8  배열
	2.9  undefined 자료형
	2.10 숫자와 문자열 자료형 변환
	2.11 불리언 자료형 변환
	2.12 일치 연산자 
```



### 문법에서 혼란스러웠던 용어정리



#### 	식별자(Idenifier)

​		자바스크립트에서 이름을 붙일 때 사용하는 단어.

  ```규칙
	규칙
 		- 키워드를 사용하면 안 된다.
 		- 숫자로 시작하면 안 된다.
 		- 특수 문자는 _과 $만 허용한다.
 		- 공백 문자를 포함 할 수 없다.

  ```



​	식별자로 한글, 한자, 일본어 같은 언어를 사용할 수 도 있으나, 영어를 사용하는 것이 개발자 사이의 관례이므로 input output과 같은 의미있는 단어를 사용하는게 좋음.

``` 개발자들의 관례
	개발자들의 관례(규칙)
		1. 생성자 함수의 이름은 항상 대문자로 시작한다.
		2. 변수, 인스턴스, 함수, 메서드의 이름은 항상 소문자로 시작한다.	
		3. 여러 단어로 이뤄진 식별자는 각 단어의 첫 글자를 대문자로 한다.
```



 자바스크립트 식별자의 종류

```식별자의 종류
							단독으로 사용			다른 식별자와 함께사용
식별자 뒤에 괄호 없음		 변수(variable)		   속성(attribute)
식별자 뒤에 괄호 있음		 함수(function)		   메서드(method)
```

```example
	Example
	 alert('Hello World!');
	 Array.length;
	 input;
	 prompt('Message','Grace');
	 Math.PI;
	 Math.abs(-273);
	 맞춰보기!
```

---



#### 	문자열

- 이스케이프 문자

​		\n : 문자열 줄 바꿈 시 사용

   ```스크립트
	ex)
		<script>
    		alart('동해물과 백두산이 \n마르고 닳도록');
        </script>
   ```

   ```결과물
				동해물과 백두산이
				마르고 닳도록
   ```

​		\t : 수평 탭



- 논리 연산자

  ```논리 연산자
  1. && 논리 곱 연산자 and
  2. \\ 논리 합 연산자 or
  ```
  
  
  
  ※주의!
  
  ```
  
  alert( 30 > 20 > 10 );
  alert((30 >20 ) > 10 );
  alert( (true) > 10 );
  alert( 1 > 10 );
  alert( false );
  
  
  alert ( 30 > 20 && 20 > 10 );
  alert( true && true );
  alert( true );
  
  ```



#### 변수(Variable)

1. 변수를 선언한다.

2. 변수를 초기화한다.

   ```
   // 변수의 선언
   	var pi;
   // 변수의 초기화
   	pi = 3.14159265;
   	
   
   // 변수를 선언, 초기화
   	var pi = 3.14159265;
   	
   
   // 변수를 선언, 초기화 
   	var pi = 3.14159265;
   // 출력
   	console.log( pi );
   ```

   
#### 복합대입 연산자, 증감 연산자

- 헷갈렸다

  ```
  복합대입 연산자
  	+=		기존 변수 값에 값을 더한다.
  	-=		기존 변수 값에 값을 뺀다.
  	*=		기존 변수 값에 값을 곱한다.
  	/=		기존 변수 값에 값을 나눈다.
  	%=		기존 변수 값에 나머지를 구한다.
  	
  증감 연산자
  	변수++	기존 변수 값에 1을 더한다( 후위 ).
  	++변수	기존 변수 값에 1을 더한다( 전위 ).
  	변수--	기존 변수 값에 1을 뺀다 ( 후위 ).
  	--변수	기존 변수 값에 1을 뺀다 ( 전위 ).
  ```

  

  ```헷갈리는 증감 연산자
  헷갈리는 증감 연산자 예제
  	var number = 10;
  	alert(number++);
  	alert(++number);
  	alert(number--);
  	alert(--number);
  	
  	=>이렇게 나눠쓰면 쉽다
  	
  	alert(number);	10
  	number++;		11
  	number++;		12
  	alert(number);	12
  	alert(number);	12
  	number--;		11
  	number--;		10
  	alert(number);	10
  ```



#### 자료형 검사

```자료형 검사
자료형 검사
- typeof() : 자료형 확인 함수
	console.log(typeof('string')) ---> string
	console.log(typeof (123))--->number
- prompt(message,defstr) : 문자열을 입력할 때 사용하는 함수
	var input = prompt('Message', 'DefStr');
	alert(input);
- confirm('수락하시겠습니까?') : 불리언을 입력받을 때 사용하는 함수
 	확인/취소가 나타남
```



#### Undefined자료형

- 변수를 선언했지만 초기화하지 않았을 때 : undefined자료형을 가진다.

  

#### 숫자와 문자열 자료형 변환

``` 숫자와 문자열 자료형 변환
alert( '52 + 273' );
alert( 52 + 273 );
alert( '52' + 273 );
alert( 52 + '273' );
alert( '52' + '273' );


답: 325
	52273
	52273
	52273
	52273
	
숫자의 입력(1)
	var input = prompt( '숫자를 입력해 주세요', '숫자' );
	alert( typeof (input) );
	// prompt는 string만 출력하기 때문에 이렇게 쓰면 아무리 숫자를 
	   입력하더라도 문자형의 자료형 string이 뜬다
	   
숫자의 입력(2)
	var input = prompt ( '숫자를 입력해 주세요', '숫자' );
	var numberInput = Number( input );
	alert( typeof ( numberInput ) + ' : ' + numberInput);
	
	출력
    number : 273

복소수는 NaN으로 뜨게된다.->자바스크립트로 복소수를 표현 할 수 없다.
ex) 
	var number = Math.sqrt( -3 );
	alert( number );
	NaN
```

