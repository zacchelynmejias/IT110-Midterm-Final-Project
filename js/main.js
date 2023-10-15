(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();


	// $(".toggle-password").click(function() {

	//   $(this).toggleClass("fa-eye fa-eye-slash");
	//   var input = $($(this).attr("toggle"));

	//   if (input.attr("type") == "password") {
	//     input.attr("type", "text");
	//   } else {
	//     input.attr("type", "password");
	//   }  
	// });

})(jQuery);

function togglePasswordVisibility(icon) {
	var passwordField = document.querySelector(icon.getAttribute('toggle'));

	if (passwordField.type === "password") {
		passwordField.type = "text";
		icon.classList.remove("fa-eye");
		icon.classList.add("fa-eye-slash");
	} else {
		passwordField.type = "password";
		icon.classList.remove("fa-eye-slash");
		icon.classList.add("fa-eye");
	}
}

