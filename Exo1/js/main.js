/*('button').click (function (){
    $('.Boite').animate({right: "-=50px", left: "+=50px"}, 500);
    })*/

$("button").click(function() {
    $(".Boite").addClass("animate").delay(1000).queue(function(next) {
    $(this).removeClass("animate");
    next();
    });
});