$( document ).ready(function(){
   $( ".div" ).click(function(){ 
    $(this).slideToggle(1500); 
});

$(".button").click(function () {
$('.div').slideToggle(1500).toggleClass().css({ backgroundColor:'red'});
});

    
});
        

 