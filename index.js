let themeBtn = document.querySelector("#themeBtn");
let robotCheck = document.querySelector("#robotCheck");
let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");

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
        let name = document.querySelector("#name");
        let radioQuestions = document.querySelectorAll("[type='radio']:checked");
        let arrAnswers = [];
        
        radioQuestions.forEach(item  => {
            if(item.value === "correct"){
                arrAnswers.push(item.value);
            }
        })

        let q3 = document.querySelectorAll("[name='q3']:checked");
        let q7 = document.querySelectorAll("[name='q7']:checked");
        let checkArrQ3 = []; 
        let checkArrQ7 = []; 

        function checkboxes (x, y){
            x.forEach(item => {
                if(item.value === "correct"){
                    y.push(item.value);
                    if(y.length === 2 && x.length === 2){
                    return arrAnswers.push("correct");
                    }
                }
            })
        }

        checkboxes(q3, checkArrQ3);
        checkboxes(q7, checkArrQ7);

        if(arrAnswers.length < 5){
        result.innerText = `Better luck next time ${name.value}, you have failed. You're score is ${arrAnswers.length}/10`
        result.style.color = "red";
        }
        else if(arrAnswers.length >= 5 && arrAnswers.length < 8){
        result.innerText = `Well done ${name.value}, you have passed the test. You're score is ${arrAnswers.length}/10`
        result.style.color = "orange";
        } 
        else if(arrAnswers.length >= 8){
        result.innerText = `Amazing ${name.value}, you passed the test with flying colors! You're score is ${arrAnswers.length}/10`
        result.style.color = "green";
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