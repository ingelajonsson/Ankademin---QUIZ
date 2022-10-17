let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");

//let robotCheck = document.querySelector("#robotCheck");

/*function isRobot(){
    if (robotCheck.checked){
        return true;
    }else{
        alert("You're a robot, please come back when you're a human!");
    }
}*/

let arrAnswers = []; 


submitBtn.addEventListener("click", () => {
    //if(isRobot()) {
    let questions = document.querySelectorAll("[type='radio']:checked");

    questions.forEach(item  => {
        if(item.value === "correct"){
        arrAnswers.push(item.value);
    }
    })


    console.log(arrAnswers.length);

    if(arrAnswers.length < 5){
        let score = document.createElement("h3");
        score.innerText = "You have failed.."
        score.style.color = "red";

        result.append(score);
    }
    else if(arrAnswers.length >= 5 && arrAnswers.length < 8){
        let score = document.createElement("h3");
        score.innerText = "You have passed the test"
        score.style.color = "orange";

        result.append(score);
    } 
    else if(arrAnswers.length >= 8){
        let score = document.createElement("h3");
        score.innerText = "You have passed the test with flying colors!"
        score.style.color = "green";

        result.append(score);
    } 

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
