//Zadanie 1 Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element";
const divElement = document.createElement('div');
divElement.innerText = "Stworzony div";
document.body.appendChild(divElement);

//Zadanie 2 Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6)

const fruitsTable = ["jabłko", "banan", "kiwi", "kokos", "gruszka", "winogrona"];
const ulElement = document.createElement('ul');
ulElement.setAttribute("id", "fruitsList");
document.body.appendChild(ulElement);
for (let i = 0; i < fruitsTable.length; i++) {
    const liElement = document.createElement('li');
    liElement.innerText = fruitsTable[i];
    ulElement.appendChild(liElement);
}
//Zadanie 3 Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element.

window.addEventListener('load', (e) => {
    let list = [...document.getElementById('fruitsList').getElementsByTagName('li')];
    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            list[i].remove();

        }

    }

})

//Zadanie 4 Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony.

const btn = document.createElement('button');
btn.innerHTML = "Delete this button";
btn.setAttribute("id", "btn");
document.body.appendChild(btn);
btn.addEventListener('click', (e) => {
    const btnElement = document.getElementById("btn");
    btn.parentNode.removeChild(btnElement);
});

//Zadanie 5 Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}"

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < getRandom(2, 5); i++) {
    const divEl = document.createElement('div');
    divEl.innerText = `to jest div numer ${i}`;
    document.body.appendChild(divEl);
}
//Zadanie 6 Na podstawie obiektu stwórz struktórę w html
const object = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}
div1 = document.createElement("div");
div1.innerText = object.div1;
document.body.appendChild(div1);

span1 = document.createElement("span");
span1.innerText = object.span1;
document.body.appendChild(span1);

div2 = document.createElement("div");
document.body.appendChild(div2);
div3 = document.createElement("div");
div3.innerText = object.div2.div3;
div2.appendChild(div3);

span2 = document.createElement("span");
span2.innerText = object.span2;
document.body.appendChild(span2);

//Zadanie 7 Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button. Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy. Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled;

const listNrOne = ["Chleb", "Masło", "Kiełbasa", "Ziemniaki", "Ogorek", "Pomidor"];
const listNrTwo = [];

const ulElementListOne = document.createElement('ul');
ulElementListOne.setAttribute("id", "htmlUlListOne");
document.body.appendChild(ulElementListOne);
for (let i = 0; i < listNrOne.length; i++) {
    const liElementListNrOne = document.createElement('li');
    liElementListNrOne.innerText = listNrOne[i];
    liElementListNrOne.setAttribute("id", "htmlLiListOne");
    ulElementListOne.appendChild(liElementListNrOne);
}

const btnListNrOne = document.createElement('button');
btnListNrOne.innerHTML = "Button One";
document.body.appendChild(btnListNrOne);

const ulElementListTwo = document.createElement('ul');
ulElementListTwo.setAttribute("id", "htmlUlListTwo");
document.body.appendChild(ulElementListTwo);

const btnListNrTwo = document.createElement('button');
btnListNrTwo.innerHTML = "Button Two";
btnListNrTwo.disabled = true;
document.body.appendChild(btnListNrTwo);

btnListNrOne.addEventListener('click', () => {
    btnListNrTwo.disabled = false;
    if (document.getElementById("htmlUlListOne").childNodes.length == 1) {
        btnListNrOne.disabled = true;
    }
    document.getElementById("htmlUlListTwo").appendChild(document.getElementById("htmlUlListOne").childNodes[0]);

})
btnListNrTwo.addEventListener('click', () => {
    btnListNrOne.disabled = false;
    if (document.getElementById("htmlUlListTwo").childNodes.length == 1) {
        btnListNrTwo.disabled = true;
    }
    document.getElementById("htmlUlListOne").appendChild(document.getElementById("htmlUlListTwo").childNodes[0]);

})

//#### Zadanie 8 Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę.
const div5 = document.createElement("div");
document.body.appendChild(div5);

const form1 = document.createElement("form");
div5.appendChild(form1);

const input1 = document.createElement("input");
input1.setAttribute("placeholder", "Wpisz element, który chcesz stworzyć");
input1.setAttribute("name", "elementName");
form1.appendChild(input1);

const input2 = document.createElement("input");
input2.setAttribute("placeholder", "Wpisz wyswietlany tekst");
input2.setAttribute("name", "elementText");
form1.appendChild(input2);

const input3 = document.createElement("select");
const option1 = document.createElement('option');
option1.text = "Czerwony";
option1.setAttribute("value", "#fe0000");
input3.appendChild(option1);
const option2 = document.createElement('option');
option2.text = "Niebieski";
option2.setAttribute("value", "#0018fe");
input3.appendChild(option2);
const option3 = document.createElement('option');
option3.text = "Zielony";
option3.setAttribute("value", "#18fe00");
input3.appendChild(option3);
input3.setAttribute("placeholder", "Kolor tekstu");
input3.setAttribute("name", "elementTextColor");
form1.appendChild(input3);

const input4 = document.createElement("input");
input4.setAttribute("placeholder", "Wpisz ile razy powielić element");
input4.setAttribute("name", "elementMultiply");
form1.appendChild(input4);

const btn1 = document.createElement("button");
btn1.innerText = "Utwórz";
form1.appendChild(btn1);
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < input4.value; i++) {
        let element1 = document.createElement(input1.value);
        element1.innerText = input2.value;
        element1.style.color = input3[input3.selectedIndex].value;
        document.body.appendChild(element1);
    }

})

// #### Zadanie 9 Stwórz formularz do którego będzie można wpisać dane tabelarczne takie jak:
// 1. Imię
// 2. Nazwisko
// 3. Wiek
// 4. Ilość dzieci
// Formularz powinien mieć możliwość dodawania kilku takich pozycji po kliknięciu na button "Więcej". Po kliknieciu na "Utwórz" powinna utworzyć się tabela z odpowiednimi headerami oraz wypełnionymi danymi z formularza. Na końcu każdej lini powinien być button "Usuń" który usuwa daną linijkę.

const div6 = document.createElement("div");
document.body.appendChild(div6);
const form2 = document.createElement("form");
form2.setAttribute("id", "form2");
div6.appendChild(form2);
div6.style.width = "800px";

copyFormFunction = () => {

    const input5 = document.createElement("input");
    input5.setAttribute("placeholder", "Wpisz imię");
    input5.setAttribute("name", "elementName");
    form2.appendChild(input5);

    const input6 = document.createElement("input");
    input6.setAttribute("placeholder", "Wpisz nazwisko");
    input6.setAttribute("name", "elementSurname");
    form2.appendChild(input6);

    const input7 = document.createElement("input");
    input7.setAttribute("placeholder", "Podaj wiek");
    input7.setAttribute("name", "elementAge");
    form2.appendChild(input7);

    const input8 = document.createElement("input");
    input8.setAttribute("placeholder", "Podaj ilośc dzieci");
    input8.setAttribute("name", "elementKidsQty");
    form2.appendChild(input8);
}
copyFormFunction();
const btn2 = document.createElement('button');
btn2.innerText = "Wiecej";
document.body.appendChild(btn2);
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    copyFormFunction();
})
const btn3 = document.createElement('button');
btn3.innerText = "Utwórz";
document.body.appendChild(btn3);
btn3.addEventListener('click', (e) => {
    e.preventDefault();
    const insertList = document.getElementById("form2");
    console.log(insertList.childNodes);
    for (let i = 0; i < insertList.childNodes.length; i++) {
        console.log(insertList.childNodes[i].value);
    }
    const dataTable = document.createElement('table');
    document.body.appendChild(dataTable);
    const tr1 = document.createElement('tr');
    dataTable.appendChild(tr1);
    const th1 = document.createElement('th');
    th1.innerHTML = "Imie";
    tr1.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerHTML = "Nazwisko";
    tr1.appendChild(th2);
    const th3 = document.createElement('th');
    th3.innerHTML = "Wiek";
    tr1.appendChild(th3);
    const th4 = document.createElement('th');
    th4.innerHTML = "Ilośc dzieci";
    tr1.appendChild(th4);
    let k = insertList.childNodes.length / 4;
    let index = 0;
    for (let i = 0; i < k; i++) {
        const tr2 = document.createElement('tr');
        tr2.setAttribute("id", "tr2");
        dataTable.appendChild(tr2);
        for (let j = index; j < index + 4; j++) {
            const td1 = document.createElement('td');
            td1.setAttribute("id", "td1");
            td1.innerText = insertList.childNodes[j].value;
            td1.style.textAlign = "center"
            tr2.appendChild(td1);

        }
        const btn4 = document.createElement('button');
        btn4.innerHTML = "Usuń";
        tr2.appendChild(btn4);
        btn4.addEventListener('click', function () {
            this.parentElement.remove();
        })
        index = index + 4;
    }

    changeFirstLetter();
})

// #### Zadanie 10 Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże. 
function changeFirstLetter() {
    someList = document.querySelectorAll("#td1");
    someList.forEach(function (value1, index1) {
        value1.style.textTransform = "capitalize";
    });

};

// #### Zadanie 11 Stwóz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę. Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb.
function findTheNumbers(name) {
    tableForNumbers = [];
    console.log(name);
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
        if (/\d/g.test(name[i])) {
            tableForNumbers.push(name[i]);
        }
    }
    if (tableForNumbers.length > 0) {
        let result = 1;
        for (let i = 0; i < tableForNumbers.length; i++) {
            result = result * tableForNumbers[i];
        }
        console.log(result);
    }
}

findTheNumbers("mali555na");

// #### Zadanie 12 Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem. Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'. Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście."

var person = {
    name: "Michal",
    surname: "Maselko",
    age: 33,
    text: "Aloha",
    checkText: function () {
        console.log(this.text.includes("Ala"));
        if (this.text.includes("Ala")) {
            this.text = this.text.replace("Ala", "Ola");
        } else {
            const div8 = document.createElement('div');
            div8.innerHTML = "Słowo Ala nie występuje w tekście."
            document.body.appendChild(div8);
        }
    }
}

function putTheString(text) {
    person.text = text;
}
putTheString("Ala ma kota");
person.checkText();
console.log(person);

// #### Zadanie 13 Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w strinach. Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik.
function stringTable2(sampleArray) {
    const qtyLettersArray = [];
    for (let i = 0; i < sampleArray.length; i++) {
        qtyLettersArray.push(sampleArray[i].length);
    }
    return qtyLettersArray;
}

function sumNumbersFromArray(sampleArray) {
    let result = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        result = result + sampleArray[i];
    }
    return result;
}

function averageFromArray(sampleArray, sumResult) {
    const result = sumResult / sampleArray.length;
    return result;

}

newSampleArray = stringTable2(["Ala", "ma", "kota"]);
newSampleArraySum = sumNumbersFromArray(newSampleArray);
newSampleArrayAverage = averageFromArray(newSampleArray, newSampleArraySum);

console.log(newSampleArray, newSampleArraySum, newSampleArrayAverage);

// #### Zadanie 14 
// Stwórz obiekt z 3 polami:
// {
//     name: '',
//     surname: '',
//     age: ''
// }
// Następnie stwóz funkcję (nie metodę) która przypisuje nowe wartości do tych pól oraz tworzy nowe pola z długością stringów. Jeśli któyś ze stringów będzie dłuższy niż 5 to stwórz w html button po kliknięciu którego cały obiekt wróci do stanu początkowego.

const car = {
    color: "Red",
    name: "speed",
    text: "need for speed",
}

const changeTheNames = (obj) => {
    obj.color = "green";
    obj.name = "slow";
    obj.text = "noneed";
    obj.colorLenght = obj.color.length;
    obj.nameLenght = obj.name.length;
    obj.textLenght = obj.text.length;
    if (obj.color.length > 5 || obj.name.length > 5 || obj.text.length > 5) {
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));
        dltBtn = document.createElement("button");
        dltBtn.innerHTML = "Przywróc obiekt";
        dltBtn.addEventListener('click', () => {
            obj = {
                color: "Red",
                name: "speed",
                text: "need for speed",
            }
            console.log(obj);
        })
        document.body.appendChild(dltBtn);

    }
}
changeTheNames(car);
console.log(car);