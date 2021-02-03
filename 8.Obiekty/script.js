// #### Zadanie 1
// Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli.
car = {
    color: "red",
    model: "fiat",
    power: 150,
}

console.log(car);

// #### Zadanie 2
// Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego dowolną właściwość na podstawie parametru przekazanego z wywołania metody.
car = {
    color: "red",
    model: "fiat",
    power: 150,
    changeProp: function (prop) {
        this.color = prop;
    },
}

car.changeProp("white");
console.log(car);

// #### Zadanie 3
// Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.

someObject = {
    name: "Asdf",
    sum: 0,
    sumFun: function (args) {
        let result = 0;
        for (i = 0; i < args.length; i++) {
            result += args[i];
        }
        this.sum = result;
    }
}
sampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
someObject.sumFun(sampleArray);
console.log(someObject.sum);

// #### Zadanie 4
// Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:
// name: BMW
// age: 12
// ...
// Czyli pary klucz wartość.

car = {
    name: "BMW",
    age: 12,
}
for (let i = 0; i < Object.entries(car).length; i++) {
    console.log(`${Object.entries(car)[i][0]}:${Object.entries(car)[i][1]}`)
};

// #### Zadanie 5
// Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.

car = {
    name: "BMW",
    age: 12,
    driver: {
        name: "Adam",
        age: 35,
    }
}
for (let i = 0; i < Object.entries(car.driver).length; i++) {
    console.log(`${Object.entries(car.driver)[i][0]}:${Object.entries(car.driver)[i][1]}`)
};

// #### Zadanie 6 Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.
car.color = "black";
car.showHello = function () {
    console.log("Hello");
}
car.showHello();