$(document).ready(function(){
  var userHeight = null;
  var tea = 1;
  var fantasy = 2;
  var rocket = 3;
  var batman = 4;
  var terror = 5;
  var melter = 6;
  var wrong = 8;

  var counter = 0;



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
    } else if (userHeight === "normal") {
      $(".small_fry").show();
      $(".normal_fry").show();
    } else {
      $(".small_fry").show();
      $(".normal_fry").show();
      $(".big_fry").show();
    }
    $("#second_jumbotron").show();
    event.preventDefault();
  });
  $("#survey2").submit(function(event) {
    if($('#rail').is(':checked')) {
      counter += 1;
    }
    if($('#water').is(':checked')) {
      counter += 1;
    }
    if($('#drops').is(':checked')) {
      counter += 1;
    }
    if($('#loops').is(':checked')) {
      counter += 1;
    }
    if($('#slow').is(':checked')) {
      counter += 1;
    }
    if($('#medium').is(':checked')) {
      counter += 1;
    }
    if($('#fast').is(':checked')) {
      counter += 1;
    }
    if (counter === 1) {
      $(".tea2").show();
    }
    if (counter === 2) {
      $(".fantasy2").show();
    }
    if (counter === 3) {
      $(".rocket2").show();
    }
    if (counter === 4) {
      $(".batman2").show();
    }
    if (counter === 5) {
      $(".terror2").show();
    }
    if (counter === 6) {
      $(".melter2").show();
    }
    if (counter >= 7) {
      $(".wrong2").show();
    }

    event.preventDefault();
  });

});
