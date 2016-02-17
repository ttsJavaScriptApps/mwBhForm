// This makes sure the document exists before your code tries to manipulate it.
$(document).ready(function () {

  // Attach an event handler function to the submit button.
  $("#submit").on("click", function () {
    // Store references to values of inputs
    var name = $("#name");
    var email = $("#email");
    var phone = $("#phone");
    var message = $("#message");
    // Store all values of required inputs into array
    var reqArray = [name, email, phone];

    // Loop through all required elements
    for (var i = 0; i < reqArray.length; i++) {
      // Check value of required item to ensure it is not empty
      if (reqArray[i].val() === '') {
        // target message paragraph to display message user to double check their inputs        
        message.text("Please fill out required fields.");
        // add css class to message paragraph to alter its styling
        message.addClass('warning');
        // target the associated label that exists adjacent to input, add class from stylesheet to alter its appearance
        reqArray[i].prev("label").addClass('warning');
      } else {
          // if value is not empty, ensure the warning class is removed
          reqArray[i].prev("label").removeClass('warning');
      }
    }

    // if all labels on page do not have warning class, 'submit' form and notify user of success
    if (!$("label").hasClass("warning")) {
      // alter the content of the header on page with custom string
      $("#pre-form > h2").html("Thanks for your feedback");
      // target the form and remove it from the DOM
      $("#form").remove();
    }

  })

});