let value = 0;
const text = document.querySelector("#text");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == "inc") {
      ++value;
    } else if (e.currentTarget.id == "dec") {
      --value;
    } else {
      value = 0;
    }
    if (value < 0) {
      text.style.color = "red";
    } else if (value >= 1) {
      text.style.color = "green";
    } else {
      text.style.color = "grey";
    }
    text.textContent = value;
  });
});
