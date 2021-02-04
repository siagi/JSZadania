// #### Zadanie 1
// W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.
let num1 = 12;
let num2 = 5;

if (num1 > num2) {
    console.log(`num1 (${num1}) jest większa`);
} else {
    console.log(`num2 (${num2}) jest większa`);
}

// #### Zadanie 2
// W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
// wypisz w konsoli, która z nich jest największa.
let num3 = 8;
let num4 = 10;
let num5 = 13;

if (num3 > num4 && num3 > num5) {
    console.log(`num3 (${num3}) jest największa`);
} else if (num4 > num5) {
    console.log(`num4 (${num4}) jest największa`);
} else {
    console.log(`num5 (${num5}) jest największa`);
}

// #### Zadanie 3
// W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}
// #### Zadanie 4
// W konsoli stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.
let result = 0;
for (let i = 1; i < 11; i++) {
    result += i;
}
// #### Zadanie 5
// W konsoli napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
// Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

// ```JavaScript
// 0 – parzysta
// 1 – nieparzysta
// 2 – parzysta
// 3 – nieparzysta
// ...
// ```

var n = 5;
for (let i = 0; i <= n; i++) {
    console.log(`${i} - ${i % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

// #### Zadanie 6
// W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
// konkatenację np.

// ```JavaScript 
// console.log("i= " + i + ", j= " + j);
// ```
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}
// #### Zadanie 7
// FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

// Przykład:

// ```
// 0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
// ```
for (let n = 0; n <= 100; n++) {
    isMod3 = n % 3 === 0 ? 'Fizz' : '';
    isMod5 = n % 5 === 0 ? 'Buzz' : '';

    const result = isMod3 + isMod5;
    console.log(result || n);
}
// #### Zadanie 8

// Narysuj w konsoli:

// a)
// ```
// *
// **
// ***
// ****
// *****
// ```
let stars = '*';
let spacer = ' ';
for (var i = 0; i < 5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        result += stars;
    }
    console.log(result);
}
// b)
// ```
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// ```
let stars = '*';
let spacer = ' ';
for (var i = 0; i < 5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}
// c)
// ```
//     *
//    ***
//   *****
//  *******
// *********
// ```
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}
// d)
// ```
// *1234
// **234
// ***34
// ****4
// *****
// -----
// *****
// ****4
// ***34
// **234
// *1234
// ```
let stars = '*';
let spacer = ' ';
for (var i = 0; i < 11; i++) {
    var result = '';
    for (var j = 0; j < 5; j++) {
        if (i < 5) {
            result += j <= i ? stars : j;
        } else if (i > 5) {
            result = (j < i - 6 ? (j - 4) * -1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}
// e)
// ```
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//     *
//     *
//     *
// ```
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if (c >= 5) {
        result = '';
        for (var f = 0; f < 4; f++) {
            result += spacer;
        }
        result += stars;
    }

    console.log(result);
}