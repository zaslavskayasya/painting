console.log("hi from catalog");

$( function() {
    // PRICE RANGE 
    $( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 75, 5000 ],
      slide: function( event, ui ) {
          console.log(ui.values);
        $( "#price" ).val(  ui.values[ 0 ] );
        $( "#price2" ).val(  ui.values[ 1 ] );
      }
    });
    $( "#price" ).val($( "#price-range" ).slider( "values", 0 ) );
    $( "#price2" ).val( $( "#price-range" ).slider( "values", 1 ) );

    // Height RANGE 
    $( "#height-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 75, 5000 ],
        slide: function( event, ui ) {
            console.log(ui.values);
            $( "#height" ).val(  ui.values[ 0 ] );
            $( "#height2" ).val(  ui.values[ 1 ] );
        }
        });
    $( "#height" ).val($( "#height-range" ).slider( "values", 0 ) );
    $( "#height2" ).val( $( "#height-range" ).slider( "values", 1 ) );

    // WIDTH RANGE 
    $( "#width-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 75, 5000 ],
        slide: function( event, ui ) {
            console.log(ui.values);
            $( "#width" ).val(  ui.values[ 0 ] );
            $( "#width2" ).val(  ui.values[ 1 ] );
        }
        });
    $( "#width" ).val($( "#width-range" ).slider( "values", 0 ) );
    $( "#width2" ).val( $( "#width-range" ).slider( "values", 1 ) );



} );