function sendData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("telp").value;
  let subject = document.getAnimations("subject").value;
  let message = document.getElementById("reason").value;

  if (name == "") {
    return alert("Name is required");
  } else if (email == "") {
    return alert("Please filled your e-mail");
  } else if (phone == "") {
    return alert("Phone number is required");
  } else if (subject == "") {
    return alert("Your grade must selected");
  } else if (message == "") {
    return alert("Please tell your reason");
  }

  console.log("email");

  let emailReceiver = "arsyajr9@gmail.com";

  let a = document.createElement("a");
  a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`;
  a.click();
}
