function validateform(){
    const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const usernameRegex = /^[a-zA-Z0-9_]+$/;
	const passwordRegex =  /^[A-Za-z_]\w{7,14}$/;

    const isValid = true;

    try {
		if (!username.match(usernameRegex)) {
			alert("Invalid username format. Please use letters, numbers, and underscores only.");
			isValid = false;
		} else {
			document.getElementById("usernameError").innerHTML = "";
		}

        // Validate password
		if (!password.match(passwordRegex)) {
			alert("Invalid password format. Please enter 8 characters and use letters, numbers and underscores only");
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
        window.location.href = "Dashboard/index.html";
    }

    return isValid;

}  
