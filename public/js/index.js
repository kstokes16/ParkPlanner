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
      window.location.href = '/user'
    })
});

// $("#user-submit-plan").on("click", function (event) {
//   console.log("We are making it to the submit plan part.");
//   event.preventDefault();

//   // taking in what has been input on the page and posting it to the plans database
//   var tripInfo = {
//     title: $("#plan-title").val().trim(),
//     planDate: $("#plan-date").val().trim()
//     user: 
//     park:
//     ride8AM:
//     ride10AM:
//     ride12PM:
//     ride2PM:
//     ride4PM:
//     ride6PM:
//     ride8PM: 
//   }

//   // AJAX post to plan endpoint
//   $.ajax("/api/plan", {
//     method: "POST",
//     data: tripInfo
//   })
//     .done(function(data) {
//     console.log("You have successfully added a new user.");
//     console.log(data);
// })
// }

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

currentPark = [];
$(".park").on("click", function() {
  delete currentPark;
  currentPark = $(this).data("parkname");
  console.log(currentPark);
});

currentDate = [];
$("#submit").on("click", function() {
  delete currentDate;
  currentDate = $("#plan-date").val()
  console.log("current Plan date: " + currentDate);
});