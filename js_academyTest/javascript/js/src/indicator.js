(function($){
var miniProduct=$('#miniProduct');
var product=miniProduct.find('.product');
var productUl=product.children('ul');
var productLi=productUl.children('li');

var indicator=miniProduct.find('.indicator');
var indiUl=indicator.children('ul');
var next=indiUl.find('.next');
var prev=indiUl.find('prev');

var arrow=miniProduct.children('.arrow');
var arrowUl=arrow.children('ul');
var next=arrowUl.children('.next');
var prev=arrowUl.children('.prev');

var backimg=productLi.eq(-1).clone();
productUl.prepend(backimg);

var rebackimg=productUl.find('li');
productUl.css({'marginLeft':-100+'%', 'width':(rebackimg.length*100)+'%'});
rebackimg.css({'width':(100/rebackimg.length)+'%'});

//next
var slideN=0;
next.on('click',function(e){
    e.preventDefault();
 
    slideN+=1;


    productUl.stop().animate({'left':(slideN*-100)+'%'},function(){
        if(slideN>=productLi.length-1){
            slideN=-1; 
            productUl.css({'left':slideN*-100+'%'});
        }
    });
});


//prev
prev.on('click',function(e){
    e.preventDefault();
    slideN-=1;
    productUl.stop().animate({'left':(slideN*-100)+'%'},function(){
        if(slideN<=-1){
            slideN=productLi.length-1;
            productUl.css({'left':slideN*-100+'%'});
    }
});});



})(jQuery);