 
(function($){
    //slider option부분
    let slideBtn = 1 ; //화살표 표시 : 1; 화살표 미표시 : 2;
    let circleBtn = 1 ; //하단버튼 표시 : 1; 하단버튼 미표시 : 2;
    const sec = 5000; //1000단위 초 입력 시간초 변경
    const sizeX = 90; //%단위로 가로폭 조정
    const sizeY = 85; //%단위로 세로폭 조정 
    const circlePositionX = 85; //동글버튼 가로위치 조정 0에 가까울수록 왼쪽으로 이동 -100~100까지 가능
    const circlePositionY = 13;//동글버튼 세로위치 조정 0에 가까울수록 위로 이동 -100~100까지 가능
    const arrowPositionY = -45; //화살표 버튼 상하 이동 0에 가까울수록 밑으로 이동 -100~100까지 가능
    const slideBox = $('.slideBox');
    let waySlide =  1 
    const btn = $('.btn');
    const slideBox1 = $('.slideBox1');
    const slideBox2 = $('.slideBox2');
    const slideBox3 = $('.slideBox3');
    const slideBox4 = $('.slideBox4');
    const btn1 = $('.btn1');
    const btn2= $('.btn2');
    const btn3 = $('.btn3');
    const btn4 = $('.btn4');
    
   //Slide 동작 부분
   var i = 1;
   var slideIndex = document.getElementsByClassName("slideImg");
   var startSlide = null;
   var auto = true;

   function mySlide(){
       i++;
       switch(waySlide){
           case 1 : $(".slideBox"+i).css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn"+i).css("background-color", "white").siblings().css("background-color","black");
           break;
           
       }
       if(i >= slideIndex.length){
           i = 0;
       };
   };
   $(".btn1").click(function(){
       switch(waySlide){
           case 1 : $(".slideBox1").css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn1").css("background-color", "white").siblings().css("background-color","black");
           break;
           
       };
       i = 1;
   });
   $(".btn2").click(function(){
       switch(waySlide){
           case 1 : $(".slideBox2").css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn2").css("background-color", "white").siblings().css("background-color","black");
           break;
           
       };
       i = 2;
   });
   $(".btn3").click(function(){
       switch(waySlide){
           case 1 : $(".slideBox3").css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn3").css("background-color", "white").siblings().css("background-color","black");
           break;
           
       };
       i = 3;
   });
   $(".btn4").click(function(){
       switch(waySlide){
           case 1 : $(".slideBox4").css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn4").css("background-color", "white").siblings().css("background-color","black");
           break;
           
       };
       i = 4;
   });
   $(".leftArrow").click(function(){
       i--
       if(i <= 0){
           i = slideIndex.length;
       };
       switch(waySlide){
           case 1 : $(".slideBox"+i).css("animation", "seeimg 1s linear").css("opacity", "1").siblings().css("opacity", "0").css("animation","none");
                    $(".btn"+i).css("background-color", "white").siblings().css("background-color","black");
           
       };
   });
   $(".rightArrow").click(function(){
        mySlide()
   });
   function restart(){
       startSlide = setInterval(function(){ mySlide() }, sec);
   };
   $(".slideImg").hover(
   function(){
       if(!auto) return false;
       clearInterval(startSlide);
       auto = false;
   },
   function(){
       restart();
       auto = true;
   });
   restart();

   // Slide 커스텀 관련
  
   $(this).click(function(e){
       var hasAtr = $(e.target).hasClass("slideImg");
       if(hasAtr) $('[id*= "slideBox"]').toggleClass("transImg");
   });
   switch(slideBtn){
       case 1 : $(".arrowBtn").css("display", "block");
       break;
       case 2 : $(".arrowBtn").css("display", "none");
       break;
   };
   switch(circleBtn){
       case 1 : $(".menuBtn").css("display", "block");
       break;
       case 2 : $(".menuBtn").css("display", "none");
       break;
   };
   
   
})(jQuery); 

