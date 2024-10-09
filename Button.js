// Wait for the document to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Attach a click event listener to the button
    document.getElementById("promptButton").addEventListener("click", function() {
        // Prompt the user for their name
        const userName = prompt("Please enter your name:");
        
        // Display the name in the output element
        if (userName) {
            document.getElementById("output").textContent = `Hello, ${userName}! Welcome to the Homepage.`;
        } else {
            document.getElementById("output").textContent = "You didn't enter your name!";
        }
    });
});
// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImage");
var modalImg = document.getElementById("enlargedImage");
var span = document.getElementsByClassName("close")[0];

// When the image is clicked, open the modal and display the enlarged image
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// When the close button (×) is clicked, close the modal
span.onclick = function() {
  modal.style.display = "none";
}