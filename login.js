function logim() {
  let mail = document.getElementById("email").value;
  let pasword = document.getElementById("password").value;

  let record = new Array();

  record = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  if (
    record.some((val) => {
      return val.email == mail && val.pass == pasword;
    })
  ) {
    alert("login Succesfully");

    let current = record.filter((val) => {
      return val.email == mail && val.pass == pasword;
    })[0];
    localStorage.setItem("name", current.name);
    localStorage.setItem("email", current.email);

    window.location.href = "profile.html";
  }else{
    alert("login failed")
  }
}
