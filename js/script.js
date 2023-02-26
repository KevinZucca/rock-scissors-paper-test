let rockContainerEl = document.getElementById('rock-container');
let rockEl = document.getElementById('rock');
let paperEl = document.getElementById('paper');
let paperContainerEl = document.getElementById('paper-container');
let scissorsEl = document.getElementById('scissors');
let scissorsContainerEl = document.getElementById('scissors-container');



let list = ["sasso", "forbici", "carta"];
let gamerChoice;
let resultTextEl = document.getElementById('result-text');


rockEl.addEventListener('click', function() {
    let prevRockChoiceEl =rockContainerEl.querySelector("h3");
    if (prevRockChoiceEl) {
        prevRockChoiceEl.remove();
    }
    removeChoiceText();
    let rockChoiceEl = document.createElement("h3");
    rockChoiceEl.classList.add ("choice-text");
    rockChoiceEl.textContent = "Hai scelto sasso";
    rockContainerEl.appendChild(rockChoiceEl);
    gamerChoice = "sasso";
});


paperEl.addEventListener('click', function() {
    let prevPaperChoiceEl = paperContainerEl.querySelector("h3");
    if (prevPaperChoiceEl) {
        prevPaperChoiceEl.remove();
    }
    removeChoiceText();
    let paperChoiceEl = document.createElement("h3");
    paperChoiceEl.classList.add ("choice-text");
    paperChoiceEl.textContent = "Hai scelto carta";
    paperContainerEl.appendChild(paperChoiceEl);
    gamerChoice = "carta";
});

scissorsEl.addEventListener('click', function() {
    let prevScissorsChoiceEl = scissorsContainerEl.querySelector("h3");
    if (prevScissorsChoiceEl) {
        prevScissorsChoiceEl.remove();
    }
    removeChoiceText();
    let scissorsChoiceEl = document.createElement("h3");
    scissorsChoiceEl.classList.add ("choice-text");
    scissorsChoiceEl.textContent = "Hai scelto forbici";
    scissorsContainerEl.appendChild(scissorsChoiceEl);
    gamerChoice = "forbici";
});




document.getElementById('myButton').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * list.length);
  const randomElement = list[randomIndex];

  if (randomElement === "sasso" && gamerChoice === "sasso") {
    resultTextEl.innerHTML = ("il computer ha scelto sasso: E' un pareggio" );
  } else if (randomElement === "sasso" && gamerChoice === "carta") {
    resultTextEl.innerHTML = ("il computer ha scelto sasso: Hai vinto!" );
  } else if (randomElement === "sasso" && gamerChoice === "forbici") {
    resultTextEl.innerHTML = ("il computer ha scelto sasso: Hai perso" );
  } else if (randomElement === "carta" && gamerChoice === "sasso") {
    resultTextEl.innerHTML = ("il computer ha scelto carta: Hai perso" );
  } else if (randomElement === "carta" && gamerChoice === "carta") {
    resultTextEl.innerHTML = ("il computer ha scelto carta: E'un pareggio!" );
  } else if (randomElement === "carta" && gamerChoice === "forbici") {
    resultTextEl.innerHTML = ("il computer ha scelto carta: Hai vinto!" );
  } else if (randomElement === "forbici" && gamerChoice === "sasso") {
    resultTextEl.innerHTML = ("il computer ha scelto forbici: Hai vinto!" );
  } else if (randomElement === "forbici" && gamerChoice === "carta") {
    resultTextEl.innerHTML = ("il computer ha scelto forbici: Hai perso" );
  } else if (randomElement === "forbici" && gamerChoice === "forbici") {
    resultTextEl.innerHTML = ("il computer ha scelto forbici: E'un pareggio");
  }



});

function removeChoiceText() {
    let choiceTextEls = document.querySelectorAll('.choice-text');
    choiceTextEls.forEach(function(choiceTextEl) {
      choiceTextEl.textContent = '';
    });
}

