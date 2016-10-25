$(document).ready(function() {
  $("form#puzzle").submit(function(event) {

    var userSentence = $("input#sentence").val();
    var sentenceSplit = userSentence.split("");
    var mixSentence = [];



    for (var count = 0; count < sentenceSplit.length; count += 1) {
      if (sentenceSplit[count] === "a") {
        mixSentence.push("-");
      }

    }
console.log(sentenceSplit);

    //
    // for ( var count = 0; count < items.length; count += 1) {
    //
    // groceryList.push(items[count]);
    //
    // }
    //
    // $("#display").text(groceryList);

    event.preventDefault();


  });
});



    // var userSentence = [$("input#sentence").val()];
    // console.log(userSentence);
    // var vowels = ["aeiouy"];
