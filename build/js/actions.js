// main
$( document ).ready(function() {

    $(".action-icon").click(function(){
        toggleLocationsContainer();
    })

});





// Helpers
function toggleLocationsContainer() {

  var activated = $(".action-icon").hasClass("fa-plus");

  $(".locations-container").toggleClass("hide-locations-container");

  if(activated) {

      $(".action-icon").removeClass("fa-plus");
      $(".action-icon").addClass("fa-minus");

  } else {

     $(".action-icon").removeClass("fa-minus");
     $(".action-icon").addClass("fa-plus");

  }
}
