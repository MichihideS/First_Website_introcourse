function grisar() {
    var question = "Gillar du grisar??? \n Tryck OK för JA";
    if (confirm(question) == true) {
        alert("Nice, jag med!");
    }
    else {
        alert("Nehe, synd för dig!");
    }
}

function ankor() {
    var audio = new Audio("sounds/ducks.wav");
    var question = prompt("Hur låter ankor?");
    if ((question) == "quack") {
        audio.play();
    }
    else {
        alert("FEL, försök igen!");
    }
}

function ko() {
    var question = prompt("Hur många kor ser du totalt på sidan???");
    if ((question) == 8) {
        alert("Du har RÄTT!!");
    }
    else {
        alert("FEL, försök igen!");
    }
}

function kycklingar() {
    var text = document.getElementById("hiddenText");
    text.style.display = "block";
}

function ankaHint() {
    var text = document.getElementById("buttonAnkaText");
    text.style.display = "block";
}

function hund() {
    var question = parseInt(prompt("Hundar är smarta, är DU? \nSkriv in ett tal mellan 1-20"));
    var questionTwo = parseInt(prompt("Skriv in ett till tal mellan 1-20"));
    var questionThree = prompt("Vad blir summan av dina tal?");
    if ((questionThree) == (question+questionTwo)) {
        alert("Du har RÄTT!!");
    }
    else {
        alert("FEL, försök igen!");
    }
}