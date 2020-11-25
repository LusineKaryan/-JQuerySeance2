/*
$(document).ready(function(){ 
    function FaireClignoterImage (){ $("#box").fadeOut().delay(500).fadeIn(); } 
    setInterval(FaireClignoterImage,3000); 
});
*/

$('#box').hover(function(Clignoter){
    $('#box').fadeOut().delay(500).fadeIn();
    setInterval(Clignoter, 1000);
})