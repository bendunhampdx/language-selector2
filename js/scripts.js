$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#person1").val();
    const colorInput = $("#color").val();

    $(".person1").text(nameInput);




    $("body").css("background-color", colorInput);
    $("#output").show();
  })
})