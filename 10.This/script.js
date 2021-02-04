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
function Person(imie, nazwisko, wiek, kraj, miasto) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.ShowInfo = function () {
        return this;
    };
    this.AddAge = function () {
        this.wiek++;
    };

}

person1 = new Person("Pawel", "Pawlowski", 40, "Włochy", "Rzym");
person2 = new Person("Anna", "Nowak", 30, "Polska", "Warszawa");


console.log(person1.ShowInfo());
console.log(person1.AddAge());
console.log(person2.AddAge());
console.log(person2.AddAge());

// #### Zadanie 2

// Rozszeż obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu

person1.UlubioneDana = ["Hamburger", "Zupa dyniowa", "Schabowy"];
person2.UlubioneDana = ["Pizza", "Rosol", "Nalesniki"];
Person.prototype.PokazDania = function () {
    console.log(this.UlubioneDana);
}
Person.prototype.DodajDanie = function (arg) {
    this.UlubioneDana.push(arg);
}
person1.PokazDania();
person2.DodajDanie("Ziemniak");
person2.PokazDania();

// #### Zadanie 3

// Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

// 1. Metoda zapisująca liczby a i b w kontekście obiektu
// 2. Metoda sumująca wcześniej zapisane liczby
// 3. Metoda odejmująca wcześniej zapisane liczby
// 4. Metoda mnożąca wcześniej zapisane liczby
// 5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.

function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.SaveNum = function (a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.AddNum = function () {
    const c = this.a + this.b
    return c;
}

Calculator.prototype.MinusNum = function () {
    const c = this.a - this.b
    return c;
}

Calculator.prototype.MultiNum = function () {
    const c = this.a * this.b
    return c;
}
Calculator.prototype.DivideNum = function () {
    if (this.b === 0) {
        return "Nie można wykonać działania";
    } else {
        const c = this.a / this.b
        return c;
    }
}


calc1 = new Calculator(2, 4);
calc1.SaveNum(20, 5);
console.log(calc1);
console.log(calc1.AddNum());
console.log(calc1.MinusNum());
console.log(calc1.MultiNum());
calc1.SaveNum(20, 0);
console.log(calc1.DivideNum());

// #### Zadanie 4
// Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?

function Ladder(levels) {
    this.levels = levels;
    this.level = 0;
    this.Up = function () {
        this.level = this.level + 1;
        if (this.level > this.levels) {
            this.GetOff();
        } else {
            console.log(`You going up. Current leve ${this.level}`);
        }
    }

    this.Down = function () {
        this.level = this.level - 1;
        if (this.level < 0) {
            this.GetOff();
        } else {
            console.log(`You going down. Current leve ${this.level}`);
        }
    }

    this.GetOff = function () {
        console.log(`You get off from ladder`);
    }

}

const lad1 = new Ladder(20);
lad1.Up();
lad1.Up();
lad1.Up();
lad1.Down();
lad1.Down();
lad1.Down();
lad1.Down();