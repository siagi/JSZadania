// #### Zadanie 1
// Stwórz konstruktor Person z następującymi właściwościami:
// 1. Imię
// 2. Nazwisko
// 3. Wiek
// 4. Kraj
// 5. Miasto
// 6. Język

function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
}
Person.prototype.changeAge = function (arg) {
    this.wiek = arg;
}
Person.prototype.changeCity = function (arg) {
    this.miasto = arg;
}

let user1 = new Person("Michał", "Kowalski", 24, "Polska", "Kraków", "polski");
let user2 = new Person("Paweł", "Zbyto", 30, "Polska", "Wrocław", "polski");
let user3 = new Person("Adam", "Aleksy", 44, "Anglia", "Londyn", "angielski");
let user4 = new Person("Anna", "Edmuno", 23, "Polska", "Poznań", "polski");
let user5 = new Person("Natalia", "Nowak", 56, "Niemcy", "Berlin", "niemiecki");

user1.changeCity("Warszawa");
user3.changeAge(33)
console.log(user1);
console.log(user3);

// #### Zadanie 2 Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.

function Calculator() {
    this.memory = [];

}
Calculator.prototype.addCalc = function (a, b) {
    result = a + b;
    this.memory.push(result);
}
Calculator.prototype.minusCalc = function (a, b) {
    result = a - b;
    this.memory.push(result);
}
Calculator.prototype.multiplayCalc = function (a, b) {
    result = a * b;
    this.memory.push(result);
}
Calculator.prototype.divideCalc = function (a, b) {
    result = a / b;
    this.memory.push(result);
}
Calculator.prototype.clearMemory = function () {
    this.memory = new Array();
}
Calculator.prototype.showMemory = function () {
    if (this.memory.length > 0) {
        for (let i = 0; i < this.memory.length; i++) {
            console.log(this.memory[i]);
        }
    } else {
        console.log("Pamięc jest pusta");
    }
}

calc1 = new Calculator();
calc1.addCalc(2, 3);
calc1.showMemory();
calc1.clearMemory();
calc1.multiplayCalc(20, 20);
console.log("tutaj");
calc1.showMemory();
calc1.clearMemory();
calc1.showMemory();
console.log(calc1.memory);

calc2 = new Calculator();

// #### Zadanie 3( gra )
// Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.