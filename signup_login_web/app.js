// building constructor
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

// function onclick on signup btn
function signupRemoval() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  var dob = document.getElementById("dob").value;
  var arrayGender = document.getElementsByName("gender");
  var selectedGender;
  var profilePic = document.getElementById("picChoose").value;
  var number = document.getElementById("number").value;
  var postalCode = document.getElementById("postalCode").value;

  if(arrayGender[0].checked){
    selectedGender = arrayGender[0].value;
  }
  else if(arrayGender[1].checked){
    selectedGender = arrayGender[1].value;
  }
  else if(arrayGender[2].checked){
    selectedGender = arrayGender[2].value;
  }
  else{
    alert("select gender")
  };

  if (password !== confirmPassword) {
    alert("enter same password twice");
  }
  if (username === "" || username === " ") {
    var username = document.getElementById("username").style.border = "1px solid red";
  }
  if (email === "" || email === " ") {
    var email = document.getElementById("email").style.border = "1px solid red";
  }
  if (password === "" || password === " ") {
    var password = document.getElementById("password").style.border = "1px solid red";
  }
  if (confirmPassword === "" || confirmPassword === " ") {
    var confirmPassword = document.getElementById("confirmPassword").style.border = "1px solid red";
  }
  if (address === "" || address === " ") {
    var address = document.getElementById("address").style.border = "1px solid red";
  }
  if (dob === "" || dob === " ") {
    var dob = document.getElementById("dob").style.border = "1px solid red";
  }
  if (profilePic === "" || profilePic === " ") {
    var profilePic = document.getElementById("picChoose").style.border = "1px solid red";
  }
  if (number === "" || num === " ") {
    var number = document.getElementById("number").style.border = "1px solid red";
  }
  if (postalCode === "" || postalCode === " ") {
    var postalCode = document.getElementById("postalCode").style.border = "1px solid red";
  }
  // if (username.length < "5") {
  //   var username = document.getElementById("username").style.border = "2px solid red";
  // }
  // if (email.length <= "10") {
  //   var email = document.getElementById("email").style.border = "2px solid red";
  // }
  // if (password.length <= "7") {
  //   var username = document.getElementById("password").style.border = "2px solid red";
  // }
  // if (address.length < "15") {
  //   var address = document.getElementById("address").style.border = "2px solid red";
  // }
  // if (number.length < "7") {
  //   var number = document.getElementById("number").style.border = "2px solid red";
  // }
  // if (postalCode.length < "4") {
  //   var postalCode = document.getElementById("postalCode").style.border = "2px solid red";
  // }
  else {
    var signup1 = new SignUp(username, email, password, confirmPassword, address, dob, selectedGender, profilePic, number, postalCode);
    window.localStorage.setItem("signupMain", JSON.stringify(signup1));

    var signin0 = document.getElementById("signinMain").style.display = "block";
    var signup0 = document.getElementById("signupMain").style.display = "none";
  }
}
function forgotPass() {
  alert("Try to focus and remember your password or else you will lose your progress");
}
function directSignin() {
  var signin0 = document.getElementById("signinMain").style.display = "block";
  var signup0 = document.getElementById("signupMain").style.display = "none";
}

// function onclick on signin / login btn

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
  // if (siEmail.length < "10") {
  //   var siEmail = document.getElementById("email").style.border = "2px solid red";
  // }
  // if (siPassword.length < "10") {
  //   var siPassword = document.getElementById("password").style.border = "2px solid red";
  // }
  else {
    var signin0 = document.getElementById("signinMain").style.display = "none";
    var dashboard0 = document.getElementById("main").style.display = "block";
    }
  
}
// function onclick on logout btn in dashhboard form

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

// function onclick on dashboard btn
function assignmentLinks() {
  var postLinks = document.getElementById("post1").style.display = "block";
  var postLinks = document.getElementById("post2").style.display = "block";
  var postLinks = document.getElementById("post3").style.display = "block";
  // var nameOfUser = document.getElementById("name");
  var abc = username.value;
}

// function onclick on profile btn

function viewProfile() {
  var postLinks = document.getElementById("post1").style.display = "none";
  var postLinks = document.getElementById("post2").style.display = "none";
  var postLinks = document.getElementById("post3").style.display = "none";
}