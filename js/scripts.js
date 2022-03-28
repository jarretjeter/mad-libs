$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let array = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    console.log(array);
    let outputArray = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"]
    let i = 0
    array.forEach(function(element) {
      $(outputArray[i]).text(element);
      i += 1
    });
    $("#story").show();
  });
});

