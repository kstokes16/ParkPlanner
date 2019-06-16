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