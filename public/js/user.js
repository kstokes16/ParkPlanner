// hiding "Create Plan" elements on homepage
<<<<<<< HEAD
$(document).ready(function() {
    $("#create-plan-row").hide();
    $("#create-plan-row-2").hide();
    $("#create-plan-row-3").hide();

    $("#submit").on("click", function (event) {
      console.log("you clicked me");
      // $("#create-plan-row").load();
      // $("#create-plan-row-2").load();
      // $("#create-plan-row-3").load();
    });
  });
  
  // submit button on homepage modal 
  $("#user-submit").on("click", function (event) {
    console.log("JS is working");
    event.preventDefault();
  
    var userInfo = {
      username: $("#new-user-name").val().trim(),
      password: $("#new-user-password1").val().trim()
    }
  
        // ajax POST to user endpoint 
        $.ajax("/api/user", {
          method: "POST",
          data: userInfo
        })
          .done(function(data) {
          console.log("You have successfully added a new user.");
          console.log(data);
      })
  });

=======
$(document).ready(function () {
  $("#create-plan-row").hide();
  $("#create-plan-row-2").hide();
  $("#create-plan-row-3").hide();
});

$("#submit").click(function () {
  $("#create-plan-row").show("slow");
  $("#create-plan-row-2").show("slow");
  $("#create-plan-row-3").show("slow");
  console.log("I've been clicked");

  console.log("scrolling");
  $('html, body').animate({
    scrollTop: $("#create-plan-row").offset().top
  }, 2000);

});

// submit button on homepage modal 
$("#user-submit").on("click", function (event) {
  console.log("JS is working");
  event.preventDefault();

  var userInfo = {
    username: $("#new-user-name").val().trim(),
    password: $("#new-user-password1").val().trim()
  }

  // ajax POST to user endpoint 
  $.ajax("/api/user", {
    method: "POST",
    data: userInfo
  })
    .done(function (data) {
      console.log("You have successfully added a new user.");
      console.log(data);
    })
});
>>>>>>> 94f90c8100c80f82087e6205960ebfd9cfdb7ddb
