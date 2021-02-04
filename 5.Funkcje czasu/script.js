// #### Zadanie 1
// Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. Jeśli Licznik dojdzie do 15 zatrzymaj go. 
let i = 1;
const timer = setInterval(function () {
    if (i <= 15) {
        console.log(`Cześć po raz ${i}`);
        i++;
    } else clearInterval(timer);
}, 3000);

// ### Zadanie 2
// Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy.
const arrayNames = ['Maja', 'Pola', 'Nela', 'Kasia', 'Michal', 'Pawel'];
let i = 0;
setTimeout(() => {
    console.log(arrayNames);
    const timer = setInterval(function () {
        if (i < arrayNames.length) {
            console.log(arrayNames[i]);
            i++;
        } else clearInterval(timer);
    }, 3000);
}, 2000);