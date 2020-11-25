var toggleFx = function() {
    $.fx.off = !$.fx.off;
  };
  toggleFx();
  $( "button" ).click( toggleFx );
  $( "input" ).click(function() {
    $( "div" ).toggle( "slow" );
  });
