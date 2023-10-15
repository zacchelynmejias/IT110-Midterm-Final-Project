function myFunction(x) {
  x.classList.toggle("change");
}


  function toggleLogoutButton() {
    var container = document.querySelector(".container");
    var logoutButtonContainer = document.getElementById("logout-button-container");

    // Toggle the "change" class for the container
    container.classList.toggle("change");

    if (!logoutButtonContainer.querySelector("button")) {
        // Create the logout button
        var logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.onclick = logout; // Set the logout function here

        // Add the button to the container
        logoutButtonContainer.appendChild(logoutButton);
    } else {
        // Remove the logout button if it already exists
        logoutButtonContainer.removeChild(logoutButtonContainer.querySelector("button"));
    }
}

function logout() {
    // Add your logout logic here
    window.location.href = "index.html";
  }



