





function validateForm() {
  var name1 = document.getElementById("name1").value;
  var email1 = document.getElementById('email1').value;
  var phone1= document.getElementById('phone1').value;
  var message = document.getElementById('message').value;
  
  alert();
  Email.send({
      SecureToken : "d6e3213e-deca-44b2-b5f3-1dac0bdde648",
      To : 'zojimdata2023@gmail.com',
      From : "zojimdata2023@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body. the name:" + name1 + email1 +phone1
  }).then(
    message => alert(message)
  );
}

