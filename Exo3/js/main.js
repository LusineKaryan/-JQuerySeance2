/*
$("#box").click(function(){
    $(this).css({'position' : 'absolute'}).animate({
        width: '100%', 
        height : '100%',
        fontSize:'100px',
        backgroundColor: 'rgb(117, 224, 113)'},1500);
});

$("#box").click(function(){
    $(this).css({'position' : 'absolute'}).animate({
        width: '200px', 
        height : '160px',
        fontSize:'14px',
        backgroundColor: '#B45F04'},1500);
});
*/

$("#btn1").click(function() {
    $("#box").animate({
        height: "300px",
        width: "100px",
        backgroundColor: "purple",
    }, 1500);
});

$("#btn2").click(function() {
    $("#box").animate({
        height: "200px",
        width: "200px",
        backgroundColor: "rgb(134, 0, 22)",
    }, 1500);
});

