  // let Sequelize = require("sequelize");
  // const Op = Sequelize.Op;
// submit button on homepage modal for new user
$("#user-submit").on("click", function (event) {
  console.log("JS is working");
  event.preventDefault();

// registration for new user 
  var userInfo = {
    userName: $("#new-user-name").val().trim(),
    password: $("#new-user-password1").val().trim()
  }
  // ajax POST to user endpoint -- NEW USER
  $.ajax("/api/user", {
    method: "POST",
    data: userInfo
  })
    .done(function (data) {
      console.log("You have successfully added a new user.");
      console.log(data);
      window.location.href = '/user'
    })
  });

  // end of POST for new user

  // submit button on homepage modal for member logging in
  $("#user-login").on("click", function (event) {
    event.preventDefault();

    // taking in user submitted info
    var memberInfo = {
      userName: $("#user-login-name").val().trim(),
      password: $("#user-login-password").val().trim()
    }

    $.ajax("/api/user", {
      method: "POST",
      data: memberInfo
    })
    .done(function (data) {
      console.log("Successfully returned to app");
      console.log(data);
      window.location.href = '/user'
    })
  });

// login for registered member

// $("#user-submit-plan").on("click", function (event) {
//   console.log("We are making it to the submit plan part.");
//   event.preventDefault();


// // // Get references to page elements
// // var $exampleText = $("#example-text");
// // var $exampleDescription = $("#example-description");
// // var $submitBtn = $("#submit");
// // var $exampleList = $("#example-list");

// // // The API object contains methods for each kind of request we'll make
// // var API = {
// //   saveExample: function(example) {
// //     return $.ajax({
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       type: "POST",
// //       url: "api/examples",
// //       data: JSON.stringify(example)
// //     });
// //   },
// //   getExamples: function() {
// //     return $.ajax({
// //       url: "api/examples",
// //       type: "GET"
// //     });
// //   },
// //   deleteExample: function(id) {
// //     return $.ajax({
// //       url: "api/examples/" + id,
// //       type: "DELETE"
// //     });
// //   }
// // };

// // // refreshExamples gets new examples from the db and repopulates the list
// // var refreshExamples = function() {
// //   API.getExamples().then(function(data) {
// //     var $examples = data.map(function(example) {
// //       var $a = $("<a>")
// //         .text(example.text)
// //         .attr("href", "/example/" + example.id);

// //       var $li = $("<li>")
// //         .attr({
// //           class: "list-group-item",
// //           "data-id": example.id
// //         })
// //         .append($a);

// //       var $button = $("<button>")
// //         .addClass("btn btn-danger float-right delete")
// //         .text("ｘ");

// //       $li.append($button);

// //       return $li;
// //     });

// //     $exampleList.empty();
// //     $exampleList.append($examples);
// //   });
// // };

// // // handleFormSubmit is called whenever we submit a new example
// // // Save the new example to the db and refresh the list
// // var handleFormSubmit = function(event) {
// //   event.preventDefault();

// //   var example = {
// //     text: $exampleText.val().trim(),
// //     description: $exampleDescription.val().trim()
// //   };

// //   if (!(example.text && example.description)) {
// //     alert("You must enter an example text and description!");
// //     return;
// //   }

// //   API.saveExample(example).then(function() {
// //     refreshExamples();
// //   });

// //   $exampleText.val("");
// //   $exampleDescription.val("");
// // };

// // // handleDeleteBtnClick is called when an example's delete button is clicked
// // // Remove the example from the db and refresh the list
// // var handleDeleteBtnClick = function() {
// //   var idToDelete = $(this)
// //     .parent()
// //     .attr("data-id");

// //   API.deleteExample(idToDelete).then(function() {
// //     refreshExamples();
// //   });
// // };

// // // Add event listeners to the submit and delete buttons
// // $submitBtn.on("click", handleFormSubmit);
// // $exampleList.on("click", ".delete", handleDeleteBtnClick)
var getRides = function(currentPark) {
  return $.ajax({
    url: "api/rides",
    type: "GET",
    where: {park: currentPark}
  }).done(function (data) {
    console.log(data);
    getTimes(data[0])
    console.log("Successfully returned to app");
    // window.location.href = '/user'
  })
};

var getTimes = function(ride) {
  return $.ajax({
    url: "api/rides/:ridename",
    type: "GET"
  }).done(function(bestTimes){
    console.log(bestTimes)
    $(".bestTimes").append(bestTimes)
  });
};

currentPark = [];
$(".park").on("click", function() {
  delete currentPark;
  currentPark = $(this).data("parkname");
  console.log(currentPark);
  getRides(currentPark);
});

currentDate = [];
$("#submit").on("click", function() {
  delete currentDate;
  currentDate = $("#plan-date").val()
  console.log("current Plan date: " + currentDate);
});

$(".rideTimes").click(function() {
  var planData = {
       time: $(this).val(),
       ride: $(this).data("ridename")
  }
console.log(planData);
     var ridetime = planData.time;
     var ridename = planData.ride;
    if(ridetime == "10") {
      $("#10AM-Ride").append(ridename);
    } else if (ridetime == "8") {
      $("#8AM-Ride").append(ridename);
    } else if (ridetime == "12") {
      $("#12PM-Ride").append(ridename);
    } else if (ridetime == "2") {
        $("#2PM-Ride").append(ridename);
      } else if (ridetime == "4") {
          $("#4PM-Ride").append(ridename);
      } else if (ridetime == "6") {
          $("#6PM-Ride").append(ridename);
      } else if (ridetime == "8PM") {
          $("#8PM-Ride").append(ridename);
      } 
  });

  $("#saved-plans-btn").on("click", function(event){
    $.ajax("/api/plan", {
      method: "POST",
      data: $("#8AM-Ride")
    })
      .done(function(data) {
        console.log("You have successfully saved a plan!");
        console.log(data);
        window.location.href = '/user'
      })
  })