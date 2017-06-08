//business logic
var convertNumber = function(num) {

  var decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var romanised = "";


  if (num <= 3999) {
    for (index = 0; index <= decimalNumber.length; index++) {
      while (decimalNumber[index] <= num) {
        romanised += romanNumeral[index];
        num -= decimalNumber[index];
  }
};
  } else {return false;}
return romanised;
  }
  //user interface logic
$(document).ready(function(){
    $("form#roman-1").submit(function(event) {
        event.preventDefault();
          var input = parseInt($("input#roman").val());
          var result = convertNumber(input);

          $(".roman").text(result);

         $("#answer").show();
        });
      });
