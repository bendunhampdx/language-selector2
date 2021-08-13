


$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    const q1 = $("input#person1").val();
    const q2 = $("input:radio[name=day]:checked").val();
    const q3 = $("input:radio[name=season]:checked").val();
    const q4 = $("input:radio[name=device]:checked").val();
    const q5 = $("input:radio[name=caffeine]:checked").val();
    const q6 = $("#color").val();


    if (q2 === 'afternoon' && q3 === 'summer' && q4 === 'ios' && q5 === 'none' || q2 === 'evening' && q3 === 'spring' && q4 === 'ios' && q5 === 'moderate'  || q2 === 'afternoon' && q3 === 'summer' && q4 === 'ios' && q5 === 'moderate' ) {
      $('.div2').show();
      $('#csharp').hide();
      $('#javascript').hide();
      $('#cplus').hide();
      $('#python').hide();
      $('#ruby').show();
      $('#language')[0].reset();
    } else if (q2 === 'evening' && q3 === 'winter' && q4 === 'android' && q5 === 'moderate' || q2 === 'morning' && q3 === 'autumn' && q4 === 'android' && q5 === 'severe' || q2 === 'afternoon' && q3 === 'summer' && q4 === 'android' && q5 === 'moderate') {
      $('.div2').show();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#python').hide();
      $('#cplus').hide();
      $('#javascript').show();
      $('#language')[0].reset();
    } else if (q2 === 'morning' && q3 === 'autumn' && q4 === 'ios' && q5 === 'severe' || q2 === 'morning' && q3 === 'winter' && q4 === 'ios' && q5 === 'none' || q2 === 'morning' && q3 === 'summer' && q4 === 'ios' && q5 === 'none' ) {
      $('.div2').show();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#python').hide();
      $('#cplus').hide();
      $('#csharp').show();
      $('#language')[0].reset();
    } else if (q2 === 'afternoon' && q3 === 'autumn' && q4 === 'ios' && q5 === 'none' || q2 === 'evening' && q3 === 'summer' && q4 === 'ios' && q5 === 'severe' || q2 === 'evening' && q3 === 'summer' && q4 === 'ios' && q5 === 'none') {
      $('.div2').show();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#csharp').hide();
      $('#cplus').hide();
      $('#python').show();
      $('#language')[0].reset();
    } else {
      $('.div2').show();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#csharp').hide();
      $('#python').hide();
      $('#cplus').show();
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