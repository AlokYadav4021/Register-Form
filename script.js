let username = document.getElementById("username");
let mail = document.getElementById("email");
let pasword = document.getElementById("password");
let conformpassword = document.getElementById("conformpassword");
let submit = document.getElementById("submit");
let uname = /^[a-zA-Z]+$/;
let midd = /^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,3}$/;
let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!_]).{8,}$/;


let pasvisb = document.getElementById("visb")
pasvisb.addEventListener("click", function(){
  if(pasword.type === "password"){
    pasword.type = "text"
  }else{
    pasword.type = "password";
  }
})


function usrname() {
 
  if (username.value == "") {
    document.getElementById("user_na").innerHTML = "enter the user name";
    return false;
  }
  if (username.value.length <= 2) {
    document.getElementById("user_na").innerHTML = "enter min 2 char";
    return false;
  }
  if (username.value.length > 15) {
    document.getElementById("user_na").innerHTML = "enter less than 15 char";
    return false;
  }
  if (!username.value.match(uname)) {
    document.getElementById("user_na").innerHTML = "Enter Caaracters Only";
    return false;
  }

  // Email validation

  if (mail.value == "") {
    document.getElementById("mail").innerHTML = "Please Enter Mail";
    return false;
  } else if (mail.value.indexOf("@") <= 0) {
    document.getElementById("mail").innerHTML = "mail should not starts with @";
    return false;
  } else if (
    mail.value.charAt(mail.value.length - 4) != "." &&
    mail.value.charAt(mail.value.length - 3) != "."
  ) {
    document.getElementById("mail").innerHTML = "Wrong positioning of '.'";
    return false;
  } else if (!mail.value.match(midd)) {
    document.getElementById("mail").innerHTML = "Wrong formate of the mail";
    return false;
  }

  // Password

  if (pasword.value == "") {
    document.getElementById("passwd").innerHTML = "Enter Password First";
    return false;
  } else if (pasword.value.length <= 8) {
    document.getElementById("passwd").innerHTML =
      "Length of the password is less then 8";
    return false;
  } else if (pasword.value.length >= 15) {
    document.getElementById("passwd").innerHTML =
      "Length of the password should be less then 15";
    return false;
  }
  else if(!pasword.value.match(pass)){
    document.getElementById("passwd").innerHTML = "password formate is wrong"
  }

  // Confirm Password


  if(pasword.value === conformpassword.value){
    return true
  }else{
    document.getElementById("confrpass").innerHTML = "Password is not Matching";
    return false
  }
}
