// #### Zadanie 1 Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru. Wynik wyświetl w konsoli.
const moreDivs = [...document.getElementsByClassName("more-divs")];
moreDivsTagsToArray = (args) => {
    const tagsArray = [];
    for (let i = 0; i < args.length; i++) {
        tagsArray.push(args[i].localName);
    }
    return tagsArray;
}
console.log(moreDivsTagsToArray(moreDivs));

// #### Zadanie 2 Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:
// 1. Kod html wewnętrzny
// 2. kod html zewnętrzy
// 3. listę klass elementu w postaci stringu
// 4. listę klass elementu w postaci tablicy
// 5. obiekt dataset

const shortListElement = document.getElementsByClassName("short-list");
console.log(shortListElement);

function shortListFunc(arg) {
    console.log(arg[0].innerHTML);
    console.log(arg[0].outerHTML);
    console.log(arg[0].classList);
    console.log(arg[0].className);
    console.log(arg[0].dataset);
}
shortListFunc(shortListElement);

// #### Zadanie 3 Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck

const argOrder3 = document.getElementById("datasetCheck");

function plusMinusNumbers(arg) {
    const number1 = parseInt(arg.getAttribute("data-numberOne"));
    const number2 = parseInt(arg.getAttribute("data-numberTwo"));
    const number3 = parseInt(arg.getAttribute("data-number-three"));
    const results = [];
    results.push(number1 + number2 + number3);
    results.push(number3 - number2 - number1);
    return results;
}
console.log(`Wynik dodawania ${plusMinusNumbers(argOrder3)[0]} | Wynik odejmowania ${plusMinusNumbers(argOrder3)[1]}`);

// #### Zadanie 4 Zmień tekst w elemencie o id spanText na dowolny
const currentElement = document.getElementById("spanText");
currentElement.innerText = "Zmieniony tekst";

// #### Zadanie 5 Zmień klasę elementowi o id spanText na dowolną
currentElement.setAttribute("class", "dowolnaKlasa");
console.log(currentElement);

// #### Zadanie 6 Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes. Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'. 
// Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy". 
const currentElement2 = document.getElementById("classes");
console.log(currentElement2.classList);

function classElementFunc(args) {
    let text = "";
    for (let i = 0; i < args.classList.length; i++) {
        console.log(args.classList[i]);
        text = text + args.classList[i];
    }
    console.log(text);
    args.setAttribute("class", "");
    // args.removeAttribute("class");
    console.log(args);
    console.log("Usunięto wszystkie klasy")
}

classElementFunc(currentElement2);

// #### Zadanie 7 Znajdź wszystkie elementy li w elemencie longList. Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje.
const liList = document.querySelectorAll("ul>li");
console.log(liList);

function addAttribute(args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i].hasAttribute("data-text")) {
            args[i].setAttribute("data-text", "text");
        }

    }
}
addAttribute(liList);

// #### Zadanie 8 Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

// {
//     newClass: 'string_z_parametru'
// }
// Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv.
let element2;

function stringToObj(arg) {
    var obj1 = {
        newClass: arg,
    }

    return obj1;
}
const testObj1 = stringToObj("przyklad");

function useTheStringFromObj(arg) {

    const takenString = arg.newClass;
    element2 = document.getElementById("myDiv");
    element2.setAttribute("class", takenString);
}

useTheStringFromObj(testObj1);
console.log(element2)

// #### Zadanie 9 Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10. 
// Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd;

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(0, 10);
let element3;

function setClassToElement(arg) {
    element3 = document.getElementById("numbers");
    if (arg % 2 === 0) {
        element3.setAttribute("class", "even");
    } else {
        element3.setAttribute("class", "odd");
    }
}

setClassToElement(randomNumber);
console.log(element3);

// #### Zadanie 10 Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy.
const liListElement = document.querySelector("#longList");

function longListElements(args) {
    liValuesArray = []
    const liElements = args.querySelectorAll("li");
    for (i = 0; i < liElements.length; i++) {
        liValuesArray.push(liElements[i].innerText);

    }
    return liValuesArray;

}

longListElements(liListElement);
console.log(longListElements(liListElement))

// #### Zadanie 11 Napisz funkcję do której przekażesz listę dzieci elementu o id longList. Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie.
function changeVariablesInLi(args) {

    for (let i = 0; i < args.length; i++) {
        args[i].setAttribute("data-text", args[i].innerText);
        args[i].innerText = getRandomNumber(0, 10);
    }

}
const liListElementsAll = document.querySelectorAll("#longList > li")
changeVariablesInLi(liListElementsAll);

for (let i = 0; i < liListElementsAll.length; i++) {
    console.log(liListElementsAll[i]);
}