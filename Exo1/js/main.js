/*
('button').click (function (){                                          //Lus I variant
    $('.Boite').animate({right: "-=50px", left: "+=50px"}, 500); 
    })
*/

/*
$("button").click(function() {                                          //Lus II variant
    $(".Boite").addClass("animate").delay(1000).queue(function(next) {
    $(this).removeClass("animate");
    next();
    });
});
*/

$("#left").click(function() {
    $(".block").animate({ left: "-=50px" }, "slow");
});

$("#right").click(function() {
    $(".block").animate({ left: "+=50px" }, "slow");
});

$("#top").click(function() {
    $(".block").animate({ top: "-=50px" }, "slow");
});

$("#bottom").click(function() {
    $(".block").animate({ top: "+=50px" }, "slow");
});