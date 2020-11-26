/*
$("#box1").hide();

function animate() {
     $("#box2").fadeOut(3000, function() {
       $("#box1").fadeIn(3000, function() {
         $("#box1").fadeOut(3000, function() {
           $("#box2").fadeIn(3000, animate);
         });
       });
     });
}

animate();
*/

$('#btn1').click(function() {
  $('div').fadeOut(3000)
});

$('#btn2').click(function() {
  $('div').fadeIn(3000)
});