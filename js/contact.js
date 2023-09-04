const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("https://formspree.io/f/moqowlew", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle success or error
      if (data.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    });
});
