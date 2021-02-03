// #### Zadanie 1Wypisz w konsoli:
// 1. Rodzica elementu id="buz"
// 2. Brata elementu id="baz"
// 3. Dzieci elementu id="foo"
// 4. rodzica elementu id"foo"
// 5. pierwsze dziecko elementu id="foo"
// 6. środkowe dziecko elementu id="foo"

console.log(document.querySelector("#buz").parentNode);
console.log(document.querySelector("#baz").previousElementSibling);
console.log(document.querySelector("#foo").children);
console.log(document.querySelector("#foo").parentNode);
console.log(document.querySelector("#foo").firstElementChild);
console.log(document.querySelector("#foo>#buz"));

// #### Zadanie 2 Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.
ex2Element = document.querySelector("#ex2");
console.log(ex2Element);

function ex2(param) {
    param.addEventListener('click', () => {
        paramId = param.getAttribute("id");
        console.log(document.querySelector(`#${paramId}>div>div>div>div>div>div`).innerText);
    })

}
ex2(ex2Element);

// #### Zadanie 3 Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.

function ex3() {
    buttonsArray = [...document.querySelectorAll("#ex3>div>button")];
    spanArray = [...document.querySelectorAll("#ex3>div>span")]

    console.log(buttonsArray);
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener('click', () => {
            for (let j = 0; j < spanArray.length; j++) {
                spanArray[j].style.display = "none";
            }
            buttonsArray[i].nextElementSibling.style.display = "inline";

        })
    }

}
ex3();
// #### Zadanie 4 Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji.
// Losowy kolor:
// var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
function LosowyKolor() {
    buttonsArray = [...document.querySelectorAll("#ex3>div>button")];
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener('click', () => {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            buttonsArray[i].parentNode.style.backgroundColor = randomColor;
        })
    }
}
LosowyKolor();

// #### Zadanie 5

// W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

// 1. Tylko pierwszy element listy
// 2. tylko ostatni element listy
// 3. Parzyste elementy listy
// 4. Wszystkie elementy listy
// 5. Żaden z elementów - tylko cała lista

function ex5() {
    divsArray = [...document.querySelectorAll("#ex5>div")];
    ulElement = document.querySelectorAll("#ex5>ul")
    liArray = [...document.querySelectorAll("#ex5>ul>li")];
    liArrayEven = [];
    for (let j = 0; j < liArray.length; j++) {
        if (parseInt(liArray[j].innerText) % 2 === 0) {
            liArrayEven.push(liArray[j]);
        }
    }
    console.log(liArrayEven);
    for (let i = 0; i < divsArray.length; i++) {
        divsArray[i].addEventListener('mouseover', () => {
            //1
            liArray[0].style.backgroundColor = divsArray[i].style.backgroundColor;
            //2
            liArray[liArray.length - 1].style.backgroundColor = divsArray[i].style.backgroundColor;
            //3
            for (let j = 0; j < liArrayEven.length; j++) {
                liArrayEven[j].style.backgroundColor = divsArray[i].style.backgroundColor;
            }
            //4
            for (let k = 0; k < liArray.length; k++) {
                liArray[k].style.backgroundColor = divsArray[i].style.backgroundColor;
            }
            //5
            ulElement[0].style.backgroundColor = divsArray[i].style.backgroundColor;


        })
    }
}

ex5();

// #### Zadanie 6

// W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

// 1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
// 2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
// 3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
const a = document.querySelector("#ex6").firstElementChild.firstElementChild.firstElementChild;
console.log(a);
const b = document.querySelector("#ex6").firstElementChild.parentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;
console.log(b);
const c = document.querySelector("#ex6").parentNode.firstElementChild.parentNode.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
console.log(c);