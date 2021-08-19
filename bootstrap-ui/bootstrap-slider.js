
jQuery(document).ready(function(){

    //Initialized settings for bootstrap
    var mySlider = $("input#budget_text").bootstrapSlider({
        ticks : [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
        tooltip: 'always',
        value: 100, 
    });

    //Setting new properties in bootstrap slider
    $("#product_preference").change( function(){
         product_preference = $(this).val();

         if( product_preference === "JG King Home" ){
            mySlider.bootstrapSlider('setAttribute', 'ticks', [200, 250, 300, 350, 400, 450, 500, 550, 600]);
            mySlider.bootstrapSlider('refresh');
            
          }
    });   


    //Slide Event/Trigger
    $("input#budget_text").on('slide',function(slideEvt) {
        //let budgetText = slideEvt.value; //getting value every slide event

    });

});
  

