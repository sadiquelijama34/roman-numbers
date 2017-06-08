//business logic

  //user interface logic
$(document).ready(function(){
    $("form#roman-1").submit(function(event) {
        event.preventDefault();
          var input = parseInt($("input#roman").val());
          var result = "";
          var convertNumber = function(input) {

            var decimalNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];



            for (index = 0; index <= decimalNumber.length; index++) {
              while (decimalNumber[index] <= input) {
                result += romanNumeral[index];
                input -= decimalNumber[index];
              }
            }
          return result;
            }
          convertNumber(input);

          $(".roman").text(result);

         $("#answer").show();
        });
      });
