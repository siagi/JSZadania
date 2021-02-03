// #### Zadanie 1

// Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

// * Imię
// * Nazwisko
// * Wiek
// * Kraj
// * Miasto

// Stwórz metody:

// 1. Która wypiszą wszystkie informacje o tej osobie
// 2. Która dodaje 1 rok do wieku za każdym jej wywołaniem

// Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.
const person = {
    Imie: "Pawel",
    Nazwisko: "Pawloski",
    Wiek: 40,
    Kraj: "Włochy",
    Miasto: "Rzym",
    ShowInfo: function () {
        return this;
    },
    AddAge: function () {
        this.Wiek++;
    },
}

const person2 = {
    Imie: "Anna",
    Nazwisko: "Nowak",
    Wiek: 30,
    Kraj: "Polska",
    Miasto: "Warszawa",
    ShowInfo: function () {
        return this;
    },
    AddAge: function () {
        this.Wiek++;
    },
}
console.log(person.ShowInfo());
console.log(person.AddAge());
console.log(person.AddAge());
console.log(person.AddAge());

// #### Zadanie 2

// Rozszeż obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu