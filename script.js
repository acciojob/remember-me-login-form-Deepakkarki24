//your JS code here. If required.
let submitBtn = document.getElementById("submit");
let checkBox = document.querySelector("#checkbox");
let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");
let inputBox = document.querySelector(".inputFields");
let form = document.querySelector("form");

let savedData = JSON.parse(localStorage.getItem("userdata"));

function storeData() {
  window.onload = () => {
    if (localStorage.length > 0) {
      let existingBtn = document.createElement("button");
      existingBtn.id = "existing";
      existingBtn.innerHTML = "Login as existing user";
      form.append(existingBtn);
      inputBox.style.display = "none";

      existingBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Logged in as ${savedData.username}`);
      });
    } else if (localStorage.length < 0) {
      inputBox.style.display = "block !important";
      form.remove(existingBtn);
    }

    let userData = {};

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
  };
}

storeData();
