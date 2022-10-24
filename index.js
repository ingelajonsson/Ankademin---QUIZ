let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");
let themeBtn = document.querySelector("#themeBtn");
let robotCheck = document.querySelector("#robotCheck");

themeBtn.addEventListener("click", () => {
    let theme = document.getElementsByTagName("link")[0];
    if(theme.getAttribute("href") == "lightmode.css"){
        theme.setAttribute("href", "darkmode.css");
    }
    else{
        theme.setAttribute("href", "lightmode.css");
    }
});

function isRobot(){
    if (robotCheck.checked){
        return true;
    }else{
        alert("You're a robot, please come back when you're a human!");
    }
}

submitBtn.addEventListener("click", () => {
    if(isRobot()) {
        result.innerText = "";
        
        let name = document.querySelector("#name");
        let radioQuestions = document.querySelectorAll("[type='radio']:checked");
        let arrAnswers = [];
        
        radioQuestions.forEach(item  => {
            if(item.value === "correct"){
                arrAnswers.push(item.value);
            }
        })

        let checkArr1 = []; 
        let q3 = document.querySelectorAll("[name='q3']:checked");
        q3.forEach(item => {
            if(item.value !== "wrong"){
                checkArr1.push(item.value);
                if(checkArr1.length === 3 && q3.length === 3){
                arrAnswers.push("correct");
                }
            }
        })

        let checkArr2 = []; 
        let q7 = document.querySelectorAll("[name='q7']:checked");
        q7.forEach(item => {
            if(item.value !== "wrong"){
                checkArr2.push(item.value);
                if(checkArr2.length === 2 && q7.length === 2){
                arrAnswers.push("correct");
                }
            }
        })

        if(arrAnswers.length < 5){
        let score = document.createElement("h3");
        score.innerText = `Better luck next time ${name.value}, you have failed. You're score is ${arrAnswers.length}/10`
        score.style.color = "red";

        result.append(score);
        }
        else if(arrAnswers.length >= 5 && arrAnswers.length < 8){
        let score = document.createElement("h3");
        score.innerText = `Well done ${name.value}, you have passed the test. You're score is ${arrAnswers.length}/10`
        score.style.color = "orange";

        result.append(score);
        } 
        else if(arrAnswers.length >= 8){
        let score = document.createElement("h3");
        score.innerText = `Amazing ${name.value}, you passed the test with flying colors! You're score is ${arrAnswers.length}/10`
        score.style.color = "green";

        result.append(score);
        } 

        let key = document.querySelectorAll("[value]");
        key.forEach(item => {
            if(item.value === "correct"){
                item.nextElementSibling.style.color = "green";
            }
            else if(item.value === "wrong"){
                item.nextElementSibling.style.color = "red";
            }
        })   
    }
})