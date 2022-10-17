let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");

console.log("HEJ");

submitBtn.addEventListener("click", () => {
    result.innerHTML = "";
    let question = document.querySelector("[type='radio']:checked").value;
    console.log(question);

})














/*

function lightMode() {
    document.body.style background = "white";

}

function darkMode() {
    document.body.style.background = "black";
    let heading2 = document.querySelector("h2");
    let heading1 = document.querySelector("h1");
  
    heading2.style.color = "white";
    heading2.style.background = "#fa6030";
    heading1.style.color = "white";
  }
  */
