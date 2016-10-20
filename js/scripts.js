
// Business
var agetest = function(test) {

  if (test >= 18) {
    $("#over-age").show();
    $("#under-age").hide();
  } else {
    $("#under-age").show();
    $("#over-age").hide();
  }
};


$(document).ready(function(){
    $("#main form").submit(function(event){
      var ageInput = parseInt($("input#age").val());
      agetest(ageInput);

    event.preventDefault();
  });
});
