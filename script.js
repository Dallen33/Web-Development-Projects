const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nikallen1818@gmail.com",
        Password : "E645DA40A53AAED7AA3B410DABD37D2360A3",
        To : 'nikallen1818@gmail.com',
        From : "nikallen1818@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      }
    
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
