// Wait for the document to load completely
document.addEventListener('DOMContentLoaded', function () {
  
  // Select the form element by its ID (assuming your form ID is "contactForm")
  const form = document.getElementById('contactForm');

  // Add an event listener to handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields (example: checking if name and email fields are filled)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // If validation is successful, display a success message
    alert('Form submitted successfully! Thank you.');

    // Optionally, clear the form fields after submission
    form.reset();
  });
});
