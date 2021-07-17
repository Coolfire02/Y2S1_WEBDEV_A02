
// $() aka means GetElementByID!

function main() {
    $("#draggable").draggable();

    $( "#droppable" ).droppable(
        {
            drop: function( event, ui ) 
            {
                $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
            }
        }
    );

    $(window).on("load",function() {
        $(window).scroll(function() {
          var bottomOfScreen = $(this).scrollTop() + $(this).innerHeight();

          $(".fast-fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight() / 2.0;
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < bottomOfScreen) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
          });

          $(".slow-fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight() / 3.0;
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < bottomOfScreen) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
          }); 

          $(".smooth-fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight() / 5.0;

            var delayInMilliseconds = 300;
            var obj = $(this);
            
                 /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < bottomOfScreen) { //object comes into view (scrolling down)
                    setTimeout(function() {
                        if (obj.css("opacity")==0) {obj.fadeTo(500,1);}
                    }, delayInMilliseconds);
                } else { //object goes out of view (scrolling up)
                    if (obj.css("opacity")==1) {obj.fadeTo(10,0);}
                }
            
           
          });

        }).scroll(); //invoke scroll-handler on page-load
      });
       
}




document.addEventListener('DOMContentLoaded', main);

