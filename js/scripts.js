


$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const q1 = $("input#person1").val();
    const q2 = $("input:radio[name=day]:checked").val();
    const q3 = $("input:radio[name=season]:checked").val();
    const q4 = $("input:radio[name=device]:checked").val();
    const q5 = $("input:radio[name=caffeine]:checked").val();
    const q6 = $("#color").val();


    if (q2 === 'evening' && q3 !== 'spring' && q4 === 'iOS' && q5 === 'severe') {
      $('.div2').show();
      $('#csharp').hide();
      $('#javascript').hide();
      $('#ruby').show();
      $('#language')[0].reset();
    } else if (q2 !== 'evening' && q3 === 'spring' || 'winter' && q4 === 'android' && q5 !== 'moderate') {
      $('.div2').show();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#javascript').show();
      $('#language')[0].reset();
    } else {
      $('.div2').show();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#csharp').show();
      $('#language')[0].reset();
    } 



    $(".person1").text(q1);
    $(".day").text(q2);
    $(".day").text(q3);
    $(".day").text(q4);
    $(".day").text(q5);



    $("body").css("background-color", q6);
    
  })
})