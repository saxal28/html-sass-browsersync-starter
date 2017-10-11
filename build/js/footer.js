$( document ).ready(function() {

    // click fa-plus
    // adds/removes animation class  
    // adds/removes correct icon
    $(".action-icon").click(function(){
        $(".locations-container").toggleClass("hide-locations-container");

        var activated = $(".action-icon").hasClass("fa-plus");

        if(activated) {


            $(".action-icon").removeClass("fa-plus");
            $(".action-icon").addClass("fa-minus");


        } else {

           $(".action-icon").removeClass("fa-minus");
           $(".action-icon").addClass("fa-plus");

        }
    })

});