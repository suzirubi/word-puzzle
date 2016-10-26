$(document).ready(function() {

  $("form#puzzle").submit(function(event) {

    var userSentence = $("input#sentence").val();
    var sentenceSplit = userSentence.split("");
    var mixSentence = [];

    for (var count = 0; count < sentenceSplit.length; count += 1) {
      var mixSentence = sentenceSplit.map(function(count, letter) {
        if (count === "a") {
          return "-";
        } else if (count === "e") {
          return "-";
        } else if (count === "i") {
          return "-";
        } else if (count === "o") {
          return "-";
        } else if (count === "u") {
          return "-";
        } else if (count === "y") {
          return "-";
        } else {
          return count;
        }
      });
    }

    var puzzleSentence = mixSentence.join("");

    $("#output").show();
    $("#puzzleDisplay").text(puzzleSentence);
    $("form#puzzle").hide();
    event.preventDefault();
  });

});
