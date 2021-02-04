// #### Zadanie 1
// Napisz funkcję która wypisuje w konsoli "Udało się!"

function printText() {
    console.log('Udało się!');
}
printText();

// #### Zadanie 2
// Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli

function printParam(p) {
    console.log(p);
}

printParam('sample parametr');

// #### Zadanie 3
// Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją.

function getBackArray(arg) {
    return arg;
}
console.log(getBackArray(['Maja', 'Pola', 'Nela']));

// #### Zadanie 4
// Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".

function printText(text) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < 5) {
            console.log(text);
            i++;
        } else {
            console.log("Koniec");
            clearInterval(timer);
        }
    }, 3000);
}


printText("Sample text");