$(document).ready(function(){
  var userHeight = null;

  $(".survey_results form").submit(function(event) {
    var height = parseInt(($("#feet").val() * 12)) + parseInt($("#inches").val());
    if (height < 48) {
      userHeight = "small";
    } else if (height > 48 && height < 72) {
      userHeight = "normal";
    } else {
      userHeight = "big";
    }

    if (userHeight === "small") {
      $(".small_fry").show();
      $("#small").show();
    } else if (userHeight === "normal") {
      $(".small_fry").show();
      $("#small").show();
      $(".normal_fry").show();
      $("#normal").show();
    } else {
      $(".small_fry").show();
      $("#small").show();
      $(".normal_fry").show();
      $("#normal").show();
      $(".big_fry").show();
      $("#big").show();
    }

    event.preventDefault();
  });
});
