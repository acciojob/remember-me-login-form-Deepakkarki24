document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit");
  const checkBox = document.querySelector("#checkbox");
  const userName = document.querySelector("#username");
  const passWord = document.querySelector("#password");
  const inputBox = document.querySelector(".inputFields");
  const form = document.querySelector("form");

  const savedData = JSON.parse(localStorage.getItem("userdata"));

  if (savedData) {
    const existingBtn = document.createElement("button");
    existingBtn.id = "existing";
    existingBtn.innerHTML = "Login as existing user";
    form.append(existingBtn);
    inputBox.style.display = "none";

    existingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Logged in as ${savedData.username}`);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (checkBox.checked) {
      const userData = {
        username: userName.value,
        password: passWord.value,
      };
      localStorage.setItem("userdata", JSON.stringify(userData));
      alert(`Logged in as ${userData.username}`);
    } else {
      localStorage.removeItem("userdata");
    }
  });
});
