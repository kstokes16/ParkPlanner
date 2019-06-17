// hiding "Create Plan" elements on homepage
$(document).ready(function() {
  $("#create-plan-row").hide();
  $("#create-plan-row-2").hide();
  $("#create-plan-row-3").hide();
});

$("#submit").click(function() {
  $("#create-plan-row").show("slow");
  $("#create-plan-row-2").show("slow");
  $("#create-plan-row-3").show("slow");
  console.log("I've been clicked");

  console.log("scrolling");
  $("html, body").animate(
    {
      scrollTop: $("#create-plan-row").offset().top
    },
    2000
  );
});

$(".card-title").on("click", function() {
  console.log("You clicked a card.");
})

  // taking in what has been input on the page and posting it to the plans database
  // var planInfo = {
  //   title: $("#plan-title").val().trim(),
  //   planDate: $("#plan-date").val().trim(),
  //   user: 
  //   park: 
  //   ride8AM: $("#8AM-Ride").val().trim(),
  //   ride10AM: $("#10AM-Ride").val().trim(),
  //   ride12PM: $("#12PM-Ride").val().trim(),
  //   ride2PM: $("#2PM-Ride").val().trim(),
  //   ride4PM: $("#4PM-Ride").val().trim(),
  //   ride6PM: $("#6Pm-Ride").val().trim(),
  //   ride8PM: $("#8PM-Ride").val().trim()
  // }

  // AJAX post to plan endpoint
//   $.ajax("/api/plan", {
//     method: "POST",
//     data: planInfo
//   })
//     .done(function(data) {
//     console.log("You have successfully added a new plan.");
//     console.log(data);
// });
