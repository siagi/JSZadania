// #### Zadanie 1
// Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej
const ex1 = document.querySelectorAll(".list");
console.log(ex1);

// #### Zadanie 2
// Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.
function ex2(param) {
    const ex2var = document.querySelectorAll(`${param}`);
    return ex2var;
}
ex2("li");
console.log(ex2("li"))

// #### Zadanie 3
// Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej. 
const ex3 = document.querySelectorAll("#list>li");
console.log(ex3);

// ### Zadanie 4

// Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

// 1. wszystkie elementy li na stronie
// 2. wszystkie elementy ul na stronie
// 3. wszystkie spany na stronie
// 4. wszystkie spany znajdujące się w elemencie div z klasą list
// 5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"

function ex4(param) {
    const ex4var = document.querySelectorAll(param);
    console.log("Wynik zad 4:");
    console.log(ex4var);
}
ex4("li");
ex4("ul");
ex4("span");
ex4(".list>span");
ex4("#spans>span");