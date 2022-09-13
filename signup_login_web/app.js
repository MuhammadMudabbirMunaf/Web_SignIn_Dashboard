// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = (()=>{
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (()=>{
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (()=>{
//   signupBtn.click();
//   return false;
// });

function signupRemoval () {

  var signup = document.getElementById("signupMain").style.display = "none";
  var signin = document.getElementById("signinMain").style.display = "block";

  if (username.value === "" || " ") {
    alert("Please fill username");
  }
  else if (password === "" || " ") {
    alert("Enter Your Password");
  }
  else if (confirmPassword === "" || " ") {
    alert("Enter Your correct Password again");
  }
  else if (address === "" || " ") {
    alert("Enter Your Address");
  }
  else if (dob === "" || " ") {
    alert("Enter Your Date Of Birth");
  }
  else if (gender === "" || " ") {
    alert("Enter Your Gender");
  }
  else if (profilePic === "" || " ") {
    alert("Add Your Profile pic");
  }
  else if (number === "" || " ") {
    alert("Enter Your Number");
  }
  else if (postalCode === "" || " ") {
    alert("Enter Your Postal code");
  }
    
}

function signinRemoval () {
  var signin = document.getElementById("signinMain").style.display = "none";
  var dashboard = document.getElementById("main").style.display = "block";
}
function againSignIn () {
  var dashboard = document.getElementById("main").style.display = "none";
  var signin = document.getElementById("signinMain").style.display = "block";
}

// localStorage.setItem("lastname", "Smith");


var name = document.getElementsByClassName("username").value;
// console.log(name);
var pass = document.getElementsByClassName("password").value;
// console.log(pass);
var conPass = document.getElementsByClassName("confirmPassword").value;
var address1 = document.getElementsByClassName("address").value;
var dob = document.getElementsByClassName("dob").value;
var gender1 = document.getElementsByClassName("gender").value;
var profPic = document.getElementsByClassName("profilePic").value;
var num = document.getElementsByClassName("number").value;
var postCode = document.getElementsByClassName("postalCode").value;


function SignUp(
  username, password, confirmPassword, address, dateOfBirth, gender, profilePic, number, postalCode
) {
  this.username = username;
  this.password = password;
  this.confirmPassword = confirmPassword;
  this.address = address;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.profilePic = profilePic;
  this.number = number;
  this.postalCode = postalCode;
}

var signup1 = new SignUp("username", name.value);
//console.log(signup1);
var signup2 = new SignUp("password", "password");
var signup3 = new SignUp("confirmPassword", "confirmPassword");
var signup4 = new SignUp("address", "address");
var signup5 = new SignUp("dateOfBirth", "dateOfBirth");
var signup6 = new SignUp("gender", "gender");
var signup7 = new SignUp("profilePic", "profilePic");
var signup8 = new SignUp("number", "number");
var signup9 = new SignUp("postalCode", "postalCode");


