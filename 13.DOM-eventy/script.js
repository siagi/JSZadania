//Zadanie 2 Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej.

const btn = document.getElementById("ex2");
const spanEl = document.getElementById("span-ex2");
btn.addEventListener('click', () => {
    const text = btn.getAttribute("data-text");
    spanEl.innerHTML = text;

})

// Zadanie 3 Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.

const square = document.getElementById("ex3");
square.addEventListener('mouseover', () => {
    square.setAttribute("style", "background-color: blue;width: 50px;height: 50px;");
});
square.addEventListener('mouseout', () => {
    square.setAttribute("style", "background-color: red;width: 50px;height: 50px;");
});

// #### Zadanie 4 Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.

const inputCheck = document.getElementById("input-test");
inputCheck.addEventListener('keypress', (e) => {
    let checkNumber = parseInt(e.key);
    if (Number.isInteger(parseInt(checkNumber))) {
        const infoSpan = document.getElementById("ex3-err");
        infoSpan.innerText = "Nie można wpisywać liczb";
    }

});

// #### Zadanie 5 Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". Jeśli licznik dojdzie do 10 event powinien być usunięty.
let indexerEx5 = 0;
const divEx5 = document.createElement('div');
divEx5.setAttribute("id", "ex5")
document.body.appendChild(divEx5);
const spanEx5 = document.createElement('span');
divEx5.appendChild(spanEx5);
console.log(document.querySelector("#ex5>span"));
const btnEx5 = document.createElement('button');
btnEx5.setAttribute("id", "ex5-button");
btnEx5.innerText = "Kliknij mnie i dodaj counter";
document.querySelector("#ex5>span").innerText = indexerEx5
btnEx5.addEventListener('click', addToIndexer = () => {
    indexerEx5 += 1;
    if (indexerEx5 > 9) {
        btnEx5.disabled = true;
        btnEx5.removeEventListener('click', addToIndexer, false);
    }
    document.querySelector("#ex5>span").innerText = indexerEx5;
})
document.body.appendChild(btnEx5);

// #### Zadanie 6 Napisz funkcję która będzie obserwowac scroll strony. Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony. Jeśli będzie powyżej 200px niech zmieni kolor na biały.

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

})

// #### Zadanie 7 Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne.
const calculatorDivButtons = document.querySelectorAll("#calculator>div>button");
console.log(calculatorDivButtons[0]);
let tryTab = [3];
let result = undefined;
let inputCalculator = document.querySelectorAll("#calculator>input")[0];
for (let i = 0; i < calculatorDivButtons.length; i++) {
    calculatorDivButtons[i].addEventListener('click', () => {
        inputCalculator.setAttribute("value", "");
        if (tryTab[1] == undefined && Number.isInteger(parseInt(calculatorDivButtons[i].innerText))) {
            tryTab[0] = calculatorDivButtons[i].innerText;
            console.log("jestem 1");
        }
        if (!Number.isInteger(parseInt(calculatorDivButtons[i].innerText))) {
            tryTab[1] = calculatorDivButtons[i].innerText;
        }
        if (tryTab[1] != undefined && Number.isInteger(parseInt(calculatorDivButtons[i].innerText))) {
            tryTab[2] = calculatorDivButtons[i].innerText;

            if (tryTab[2] != undefined) {
                switch (tryTab[1]) {
                    case '+':
                        result = parseInt(tryTab[0]) + parseInt(tryTab[2]);
                        break;
                    case '-':
                        result = parseInt(tryTab[0]) - parseInt(tryTab[2]);
                        break;
                    case '*':
                        result = parseInt(tryTab[0]) * parseInt(tryTab[2]);
                        break;
                    case '/':
                        result = parseInt(tryTab[0]) / parseInt(tryTab[2]);
                        break;
                    default:
                }
            }
        };
        if (result != undefined) {
            inputCalculator.setAttribute("value", result);
            result = undefined;
            tryTab[0] = undefined;
            tryTab[1] = undefined;
            tryTab[2] = undefined;
        }

    })
}