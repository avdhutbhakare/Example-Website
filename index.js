document.getElementById("contactForm").onsubmit = function(event){
    event.preventDefault();

var name = document.getElementById("fname").value;
var mail = document.getElementById("fmail").value;
var phone = document.getElementById("phone").value;
var phoneCheck = /^[0-9]{10}$/;

if(!name || !mail || !phone){
    alert("Please fill all the fields.");
    return;
}

if (!mail.includes("@")){
    alert("Please Enter a valid email.");
}

if (!phoneCheck.test(phone)) {
  alert("Please enter a valid Phone number.");
  return;
}

alert("Submitted! We will contact you soon.")
 
}





