function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "coindesaffaires72@gmail.com",
    Password: "Gregorys0$",
    To: "coindesaffaires72@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Formulaire de contact",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Téléphone n°: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("message envoyé avec succès"));
}
