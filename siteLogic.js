//Funktion som frågar om grisar i gris.html
function grisar() {
    var question = "Gillar du grisar??? \n Tryck OK för JA";
    if (confirm(question) === true) { //Använd inte ==, strict operator === kollar efter om operander
        alert("Nice, jag med!");      //är lika  tex: 0 == false blir true medan 0 === false blir false
    }
    else {
        alert("Nehe, synd för dig!");
    }
}

//Funktion som spelar upp en ljud fil OM man svarar rätt i anka.html
function ankor() {
    var quack = new Audio("sounds/ducks.wav");
    var question = prompt("Hur låter ankor?");
    if ((question) === "quack") {   //Använd inte ==, strict operator === kollar efter om operander
        quack.play();               //är lika  tex: 0 == false blir true medan 0 === false blir false
    }
    else {
        alert("FEL, försök igen!");
    }
}

//Funktion som ber en räkna hur många kossor man ser i kossa.html
function ko() {
    var question = prompt("Hur många kor ser du totalt på sidan???"); //Ej lagt integer för svaret kan vara en string!
    if ((question) === "2") { // 2 = string
        alert("Du har RÄTT!!");
    }
    else {
        alert("FEL, försök igen!");
    }
}

//Funktion som skriver ut text i en alert box
function kycklingar() {
    alert("Hönor kan lägga ägg!");
}

//Funktion som skriver ut quack quack i en alertbox
function ankaHint() {
    alert("quack quack quack!");
}

//Funktion som ber en addera 2 tal och skriva ut svaret i hund.html
function hund() {
    var question = parseInt(prompt("Hundar är smarta, är DU? \nSkriv in ett tal mellan 1-20"));
    var questionTwo = parseInt(prompt("Skriv in ett till tal mellan 1-20"));
    var questionThree = parseInt(prompt("Vad blir summan av dina tal?"));
    var sum = (question+questionTwo);
    if ((questionThree) === (sum)) {  //Använd inte ==, strict operator === kollar efter om operander
        alert("Du har RÄTT!!");       //är lika  tex: 0 == false blir true medan 0 === false blir false
    }
    else {
        alert("FEL, försök igen!");
    }
}