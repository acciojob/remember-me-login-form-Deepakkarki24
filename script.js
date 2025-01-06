let submitBtn = document.querySelector('input[type="submit"]');
let checkBox = document.querySelector("#checkbox");
let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");
let existingBtn = document.querySelector("#existing");
let form = document.querySelector("form");

let savedData = JSON.parse(localStorage.getItem("userdata"));
let userData = {};

window.onload = () => {
  if (localStorage.length > 0) {
    // inputBox.style.display = "none";
    existingBtn.style.display = "block";
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkBox.checked) {
    userData.username = userName.value;
    userData.password = passWord.value;
    localStorage.setItem("userdata", JSON.stringify(userData));
    alert(`Logged in as ${userData.username}`);
  } else if (!checkBox.checked) {
    localStorage.removeItem("userdata");
  }
});

existingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Logged in as ${savedData.username}`);
});
