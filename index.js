let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");
let themeBtn = document.querySelector("#themeBtn");
let robotCheck = document.querySelector("#robotCheck");
let pTag = document.querySelectorAll(".pTag");

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
        
        let questions = document.querySelectorAll("[type='radio']:checked");
        let arrAnswers = []; 
        
        questions.forEach(item  => {
            if(item.value === "correct"){
                arrAnswers.push(item.value);
                item.parentElement.style.color = "green";
            }
            else{
                item.parentElement.style.color = "red";
            }
        })

        let name = document.querySelector("#name");

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


        // questions.forEach(item  => {
        //     if(item.value === "correct"){
        //         questions.parentElement.style.color = "green";
        //     }
        //     else{
        //         questions.parentElement.style.color = "red";
        //     }
        // })

    }
})

themeBtn.addEventListener("click", () => {
    let theme = document.getElementsByTagName("link")[0];
    if(theme.getAttribute("href") == "lightmode.css"){
        theme.setAttribute("href", "darkmode.css");
    }
    else{
        theme.setAttribute("href", "lightmode.css");
    }
});




