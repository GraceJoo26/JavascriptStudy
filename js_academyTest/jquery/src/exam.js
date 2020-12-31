(function($){//제이쿼리 시작
    
    var wrap=$('#wrap');//#wrap
    var headBox=$('#headBox');//#headBox
    var nav=headBox.find('#nav');//#nav
    var navUl=nav.find('ul');//.nav ul
    var navLi=navUl.find('li');//.nav ul li


    var viewBox=$('#viewBox');//#viewBox
    var slideUl=viewBox.find('.slide');//slide의 ul
    var slideLi=slideUl.find('li');//slide ul의 li
   
    var cloneSlideLi=slideLi.eq(-1).clone();//slideLi의 맨 마지막li를 복제하라
    slideUl.prepend(cloneSlideLi);//slideul에 복제한걸 앞에 붙여라
    var reSlideLi=slideUl.children('li');//slideLi에 복제된 li를 다시정의 
    
    slideUl.css({'marginLeft':-100+'%', 'width':(reSlideLi.length*100)+'%'})//slideUl에 marginleft를 -100%주고, 넓이를 600 % 만큼 늘려라
    reSlideLi.css({'width':(100/reSlideLi.length)+'%'});//li가 6개 생겼으니까 100%에서 새로 생긴 li까지 6으로 나눠라
    
    //slideBtn
    var prevBtn=$('.prev');//slideBtn에서 이전버튼
    var nextBtn=$('.next');//slideBtn에서 다음버튼
    var timed=2000;//2초간격으로
   
   
   
   
    //슬라이드 버튼 처리
    var slideN=0; //slideN=0부터시작
    nextBtn.on('click',['button'],function(e){//nextBtn이 클릭되면
        e.preventDefault();//버튼의 기능을 삭제하고
        slideN+=1;//slideN을 클릭할 때마다 1씩 증가시켜라
        slideUl.stop().animate({'marginLeft':slideN*-100+'%'},function(){//slideUl에 클릭한만큼 왼쪽마진을 *-100%만큼줘라
            if(slideN>=reSlideLi.length-1){//slideN이 클론된 li개수보다 크거나 같게 눌려지면 
                slideN=0;//slideN을 0처리하고 (처음으로 돌아가고),
                slideUl.stop().css({'marginLeft':slideN*-100+'%'});//ul marginLeft를 -100%만큼 왼쪽으로 보여줘라
        
        
        }
    });
});
    prevBtn.on('click',['button'],function(e){//prevBtn이 클릭되면
        e.preventDefault();//버튼의 기능을 삭제하고
        slideN-=1;//slideN을 클릭할 때마다 -1씩 증가시켜라
        //console.log(slideN);
        slideUl.stop().animate({'marginLeft':slideN*-100+'%'},function(){//slideUl에 marginLeft를 -100%씩 넘겨라.
            if(slideN <= -1) { //만약 slideN이 -1보다 작아지거나 같아지면
                slideN=slideLi.length-1; //slideN은 li개수-1만큼 줄어들어라
                slideUl.stop().css({'marginLeft':slideN*-100+'%'});//slideUl의 marginLeft를 -100만큼 왼쪽으로 보여줘라
        };
      });    
    });
        
    //인디케이터 클릭, 인디케이터 focus잡기
   
    var indiBar=$('.indi_bar');
    var indi=indiBar.children('.indi');
    var indiBtn=indi.find('button');
    indiBtn.attr({'tabIndex':-1});//tabIndex를 indiBtn에 -1만큼 줘라
    indiBtn.on('focus mouseenter click', function(e){//indiBtn을 focus, mouseenter, click을 하면
        e.preventDefault();//모든 기능을 삭제하고
        var it= $(this);//내가 선택한 것에서
        slideN=it.index()+1;//slideN은 내가 선택한거에서 1만큼 더해라
        //console.log(slideN);
       slideUl.stop().animate({'marginLeft':slideN*-100+'%'});//slideUl에 marginLeft를 -100%씩 넘겨라.
       indiBtn.eq(slideN-1).addClass('action');//indiBtn에 it.index Class를 더하라
       indiBtn.eq(slideN-1).siblings().removeClass('action');//indiBtn에 내가 선택한 것의 나머지 버튼의 action을 없애라
       
       if(e.type==='focus'|| e.type==='mouseenter'){//만약 e의 type이 포커스 혹은 mouseenter면
           slideUl.stop().animate({'marginLeft': slideN*-100+'%'});//slideUl에 marginLeft를 -100%씩 넘겨라.
                indiBtn.eq(slideN).attr({'tabIndex':0});// 내가 누른 indiBtn에 tabIndex를 0으로 주고
                indiBtn.eq(slideN).siblings().attr({'tabIndex':-1});//내가 누르지 않은 indiBtn에 tabIndex -1로 줘라
              }
              
   /*  var numbering=$('.numbering');
    var navi=numbering.find('.navi');
    var current=navi.find('.current');
    var slideN=0;

    current.eq(slideN).function(){
        if(slideN==="it"){
            
        } */
    
    });
    
    
    
    
    

    //광고영역 일정시간마다 자동수행
    var startInterval;
    var start=function(){//start라는 함수는
        startInterval=setInterval(function(){//광고영역 일정시간마다 자동수행을 하기 위해서 
            slideN+=1;//한번 이동시마다 +1이 추가되고,
            slideUl.stop().animate({'marginLeft':slideN*-100+'%'},function(){//slideUl에 marginLeft를 -100%씩 넘겨라.
                if(slideN>=slideLi.length){//만약 slideN이 li개수보다 작거나 같으면
                    slideN=0;//slideN은 0으로 리셋시키고
                    slideUl.stop().css({'marginLeft':slideN*-100+'%'});//slideUl에 marginLeft를 -100%씩 보여라.
                }
            });
            indiBtn.eq(slideN-1).addClass('action');//indiBtn에 0부터 action을 추가하라
            indiBtn.eq(slideN-1).siblings().removeClass('action');//누르지 않은 indiBtn은 action을 없애라
        },timed);  //시간걸어놓음
    };
    start();

   
    //마우스 올릴경우 일시정지

    var stopSlide=function(){ //stopSlide는 
        clearInterval(startInterval);
    };

    viewBox.on({
        'mouseenter' :stopSlide,//mouseenter될 시 stopSlide처리
        'mouseleave' :start//mouseleave일 시 시작
    });

    
    //브라우저 상단에서 떨어져 있는 양 체크,top버튼 누르면 상단으로 이동
    //console.log('offset:',headOffset);
    
    var win=$(window);//브라우저
    var headBox=$('#headBox');//헤드박스
    var topBtn=$('.top');//상단이동버튼
    
    var headOffset=headBox.offset().top;//headOffset은 headBox에서 얼만큼 떨어져있는지 정의하는 변수
    //console.log('offset:',headOffset);
    
    topBtn.hide();//일단 top button을 숨기고
    
    win.on('scroll',function(e){ //브라우저에 스크롤 이벤트를 하면
        
        var winST= win.scrollTop();// 브라우저의 스크롤되어 나타난 높이를 winST라고 정의
        //console.log(winST);
       
        (winST >=300) ?//winST가 300이상이면 
        headBox.css({'display':'block','position':'fixed','top':0,'zIndex':1500}) : //top을 보이게하고, 위치를 고정시키고, top0,zindex를 1500줘라
        headBox.removeAttr('style');//아니면 hedaBox에서 style태그를 제거시켜라
        (winST >=300) ? //winST가 300이상이면
        topBtn.stop().fadeIn() : topBtn.stop().fadeOut();//topBtn은 fadeIn처리 하고 아니면 fadeOut처리하라
 
    });

    var liScrollMove=function(e){//liScr0ollMove는
        e.preventDefault();//일단 e를 다 없애고
        var it =$(this).find('a');//내가 누른 li태그에서 a를 it이라고 지정
        var itAttr= it.attr('href');//itAtter는 내가 클릭한거에서 href찾기
        var itOffset=$(itAttr).offset().top;//href의 높이
        $('html,body').animate({scrollTop:itOffset});//html과 body에 itoffset만큼 높이를 올라가라
    } 

    topBtn.on('click',liScrollMove);//상단버튼을 누르면 상단으로 올라가라


   /*  var indiUl=headBox.find('.indi');
    var indiLi=indiUl.children('li');*/

    

})(jQuery);//제이쿼리끝