function swapCase() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var swapped_string = "";
    for (var i = 0; i < input.length; i++) {
      var letter = input.charAt(i);
      if (letter.toLowerCase() === letter) {
        swapped_string += letter.toUpperCase();
      } else {
        swapped_string += letter.toLowerCase();
      }
    }
    output.value = swapped_string;
  }