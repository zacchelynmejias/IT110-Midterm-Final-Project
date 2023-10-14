function validateform(){

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	
	const usernameRegex = /^[a-zA-Z0-9_]+$/;
	const passwordRegex =  /^[A-Za-z]\w{7,14}$/;

	const isValid = true;

	try {
		if (!username.match(usernameRegex)) {
			alert("Invalid username format. Please use only letters, numbers, and underscores.");
			isValid = false;
		} else {
			document.getElementById("usernameError").innerHTML = "";
		}

		// Validate password
		if (!password.match(passwordRegex)) {
			alert("Invalid format. Please use letters and numbers only.");
			isValid = false;
		} else {
			document.getElementById("passwordError").innerHTML = "";
		}
		// console.log(z);

	} catch (error) {
		alert(error.message);
		isValid = false;
		
	} finally {
	   }

		if (isValid) {
			window.location.href = "dashboard.html";
		}

		return isValid;

}  


// (function($) {

// 	"use strict";

// 	var fullHeight = function() {

// 		$('.js-fullheight').css('height', $(window).height());
// 		$(window).resize(function(){
// 			$('.js-fullheight').css('height', $(window).height());
// 		});

// 	};
// 	fullHeight();


// 	$(".toggle-password").click(function() {

// 	  $(this).toggleClass("fa-eye fa-eye-slash");
// 	  var input = $($(this).attr("toggle"));

// 	  if (input.attr("type") == "password") {
// 	    input.attr("type", "text");
// 	  } else {
// 	    input.attr("type", "password");
// 	  }  
// 	});



// })(jsQuery);

