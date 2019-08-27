// Entry display

function entry() {
    return document.getElementById("entryDisplay").style.display = 'none';
}

//Question 1

function questionOne(answerOne) {
    var answerOne = document.getElementById("answerNumberOne").value;
    if (answerOne === "") {
        alert("Please type your answer to continue")
    } else if (answerOne == 4) {
        return document.getElementById("questionNumberOne").style.display = 'none';
    } else {
        alert("Seriously? Please go home and study!")
    }
}

//Question 2

function questionTwo(answerTwo) {
    var answerTwo = document.getElementById("answerNumberTwo").value;
    if (answerTwo === "") {
        alert("Please type your answer to continue")
    } else if (answerTwo == 100) {
        return document.getElementById("questionNumberTwo").style.display = 'none';
    } else {
        alert("Wrong! This was an easy one...")
    }
}

//Question 3

function questionThree(answerThree) {
    var answerThree = document.getElementById("answerNumberThree").value;
    if (answerThree === "") {
        alert("Please type your answer to continue")
    } else if (answerThree == 2) {
        return document.getElementById("questionNumberThree").style.display = 'none';
    } else {
        alert("How could you fail this one???")
    }
}
