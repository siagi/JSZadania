// #### Zadanie 1
// W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora.

let a = true;
let b = false;
console.log(a === b);

// #### Zadanie 2
// W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie ```moduloResult``` niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej ```moduloResult```.
// Wypisz zmienną ```moduloResult``` w konsoli. 

let a = 12;
let b = 5;
let moduloResult = 0;
moduloResult = a % b;

console.log(moduloResult);

// #### Zadanie 3
// W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie ```stringsResult```, niech przechowuje pusty string np. ```let stringsResult = ""```
// Połącz stringi za pomocą konkatenacji i zapisz wynik w zmiennej ```stringsResult``` oraz wypisz go w konsoli.

let text1 = `Adam`;
let text2 = `Ewa`;
let stringsResult = "";
stringsResult = text1 + text2;

console.log(stringsResult);

// #### Zadanie 4
// W konsoli stwórz dwie zmienne:

//  ``` JavaScript
// var someNumber = 425;
// var someString = "425";
//  ```
// Porównaj te zmienne za pomocą operatorów ```==``` oraz ```===```.
// Wypisz wyniki w konsoli. Opowiedz grupie o wynikach
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);
console.log(someNumber === someString);
// Operator == porównuje wartości, a === wartości oraz typy.

// #### Zadanie 5
// W konsoli stwórz zmienną o nazwie ```counter```. Wstaw do niej liczbę 30.
// Wypisz jej wartość w konsoli, a następnie:

// * za pomocą inkrementacji zwiększ wartość zmiennej ```counter```
// * wypisz ją w konsoli
// * za pomocą dekrementacji zmniejsz wartość zmiennej ```counter```
// * wypisz ją w konsoli.
let counter = 30;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);

// #### Zadanie 6
// W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje ```null```. Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej ```result```. Wypisz tą zmienną w konsoli.
let num3 = 8;
let num4 = 3;
let result = null;

result = num3 > num4;
console.log(result);