function SignUp(
  username, email, password, confirmPassword, address, dateOfBirth, gender, profilePic, number, postalCode
) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.address = address;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.profilePic = profilePic;
  this.number = number;
  this.postalCode = postalCode;
}

function signupRemoval() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  var dob = document.getElementById("dob").value;
  var profilePic = document.getElementById("picChoose").value;
  var num = document.getElementById("number").value;
  var postalCode = document.getElementById("postalCode").value;

  if (password !== confirmPassword) {
    alert("enter same password twice");
  }
  else {

    var signup1 = new SignUp(username, email, password, confirmPassword, address, dob, profilePic, num, postalCode);
    window.localStorage.setItem("signupMain", JSON.stringify(signup1));

    var signin0 = document.getElementById("signinMain").style.display = "block";
    var signup0 = document.getElementById("signupMain").style.display = "none";
  }
}


function signinRemoval() {

  var data = JSON.parse(window.localStorage.getItem("signupMain"));

  var siEmail = document.getElementById("email").value;
  var siPassword = document.getElementById("password").value;

  if (siEmail !== data.email) {
    alert(" email does not matches from the email in signup form");
    if (siPassword !== data.password) {
    alert(" password does not matches from the password in signup form");
    }
  }
  else {
    var signin0 = document.getElementById("signinMain").style.display = "none";
    var dashboard0 = document.getElementById("main").style.display = "block";
    }
  
}
function againSignIn() {
  var signin0 = document.getElementById("signinMain").style.display = "block";
  var dashboard0 = document.getElementById("main").style.display = "none";
}

var names = document.getElementsByClassName("username").value;
var pass = document.getElementsByClassName("password").value;
var conPass = document.getElementsByClassName("confirmPassword").value;
var address1 = document.getElementsByClassName("address").value;
var dob = document.getElementsByClassName("dob").value;
var gender1 = document.getElementsByClassName("gender").value;
var profPic = document.getElementsByClassName("profilePic").value;
var num = document.getElementsByClassName("number").value;
var postCode = document.getElementsByClassName("postalCode").value;



//   if (names.value === "" || names.value === " ") {
//     alert("Please fill username");
//   }
//   // else if (password === "" || " ") {
//   //   alert("Enter Your Password");
//   // }
//   // else if (confirmPassword === "" || " ") {
//   //   alert("Enter Your correct Password again");
//   // }
//   // else if (address === "" || " ") {
//   //   alert("Enter Your Address");
//   // }
//   // else if (dob === "" || " ") {
//   //   alert("Enter Your Date Of Birth");
//   // }
//   // else if (gender === "" || " ") {
//   //   alert("Enter Your Gender");
//   // }
//   // else if (profilePic === "" || " ") {
//   //   alert("Add Your Profile pic");
//   // }
//   // else if (number === "" || " ") {
//   //   alert("Enter Your Number");
//   // }
//   // else if (postalCode === "" || " ") {
//   //   alert("Enter Your Postal code");
//   // }



