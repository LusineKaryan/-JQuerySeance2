/*
$( document ).ready(function(){
   $( ".div" ).click(function(){ 
    $(this).slideToggle(1500); 
});

$(".button").click(function () {
$('.div').slideToggle(1500).toggleClass().css({ backgroundColor:'red'});
});

    
});
*/

$("button").click(function() {
    $("div:animated").toggleClass("colored ");
    //$(".divAnime").slideToggle(5000);
});

let animateIt = function() {
    $("#div1,#div2").slideToggle("slow", animateIt);
}

animateIt();


 