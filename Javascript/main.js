

// let x = "   Ahmed                    ";
// // 'let y = "ali";'
// // console.log(x==y)

// console.log(x.length)
// console.log(x.trim().length)

// let askemail = prompt("Please enter your mail");
// let email = "sa_mh87@outlook.de"
// console.log(askemail.toLowerCase().trim()==email);

// // == values
// console.log(5=="5")
// // values and Data types
// console.log(5==="5")
// console.log(4 >= 5)
// console.log(4 >= 4)
// console.log(4 != 4)

// and &&, or ||
// let product = "TV-Samsung";
// let size = 50;
// let price = 10000;

// // console.log(price >= 10000);

// console.log( price < 12000 && size == 50 )
// console.log( price < 12000 || size == 40 )

// let num1 = 5;
// let num2 = 10;

// if (num2 > num1) 
// { 
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// }

// if (num1 > num2) 
// { 
// console.log("Hello");
// }

// #######################################################

// let num1 = prompt("num1")
// let num2 = prompt("num2")
// if (num2 > num1) {
//     console.log( "Hallo Habibi") 
// }

// #######################################################

// let role = prompt("Whats your role in the company?")

// if (role == "admin"){
//     document.write(" you can update, create and delete.")   
// }

// else if (role == "moderator") {
//     document.write("you can just update and create.")   
// }
// else{
//     document.write("Hallo User.")
// }

// #######################################################

// let result = prompt("Whats is your result?")
// result = parseFloat(result);

// if (result >= 90) {                 
//     document.write("Excellent");
// }
// //  oder "80%" "70%" "60%" "500%"
// else if (result >= 80) {
//     document.write("very good");
// }
// else if (result >= 70) {
//     document.write("good");    
// }

// else if (result >= 50) {
//     document.write("acceptable");  
// }
// else {
//     document.write("fail");
// }
// #######################################################

// age = prompt("What is your age ?")

// age >=18?
//     document.write("Hallo user")
//     : document.write("no you are very young.")

// #######################################################

// let role = prompt("What is your role ?")

// switch (role) {
//     case "admin":
//         document.write("create, update, delete");
//         break;

//     case "moderator" :
//         document.write("create, update");
//         break;

//     case "editor":
//         document.write("update");
//         break;

//     default:
//         document.write("Hallo user")
// }
// #######################################################

// let day = prompt("What day is it?");

// switch (day.toLowerCase()) {
//   case "monday":
//     document.write("Start of the week");
//     break;

//   case "friday":
//     document.write("Weekend is coming!");
//     break;

//   case "saturday":
//   case "sunday":
//     document.write("Weekend!");
//     break;

//   default:
//     document.write("Just another day");
// }
// #######################################################

// for Loop:

// console.log("hallo world")
// console.log("hallo world")
// console.log("hallo world")

// start, condition, steps

// for (let i = 0; i < 4 ; i+=1 ) {
//     console.log("Hallo world");
//     console.log("Hallo ");   
// 

// for (let i = 10; i >= 0 ; i-=2 ) {

//     console.log(i);

// // }

// for (let i = 0; i < 4; i ++ ) {
//    console.log("Ahmed " + i);
    
// }

// #######################################################

// let names = [ "Ahmed", "Mazaen", "Ali", "Gamal"]

// // console.log(names[0])
// // console.log(names[1])
// // console.log(names[2])
// // console.log(names[3])

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let x = "Ahmed";

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }
// #######################################################
//  Nasted Loop
// Ein Array mit Automarken
// let cars = ["BMW", "Mercedes", "Honda"];

// // Ein Array mit Modelljahren
// let models = [2020, 2021, 2022];

// // Ein Array mit Farben
// let colors = ["blacks", "white", "red"];

// // Äußere Schleife: Durchläuft jede Automarke im Array "cars"
// for (let i = 0; i < cars.length; i++) {
//     // Gibt die aktuelle Automarke aus
//     console.log(`cars : ${cars[i]}`);

//     // Innere Schleife 1: Durchläuft jedes Modelljahr im Array "models"
//     for (let j = 0; j < models.length; j++) {
//         // Gibt das aktuelle Modelljahr aus
//         console.log(`models : ${models[j]}`);
//     }

//     // Innere Schleife 2: Durchläuft jede Farbe im Array "colors"
//     for (let x = 0; x < colors.length; x++) {
//         // Gibt die aktuelle Farbe aus
//         console.log(`colors : ${colors[x]}`);
//     }

//     // Trennt die Ausgabe für jede Automarke optisch
//     console.log("_____________");
// }

// #######################################################

// loop break / continue

// let users =["ali", "mazen", "gamal",1,2,3,46,"oday", "yousef", "ahmed" ]

// for (let i = 0; i < users.length; i++) {

//     if (typeof users[i] == "number"){

//         continue;
//     }
//         if (users[i] == "mazen") {

//             continue;
//         }
//         if (users[i] == "ahmed" ) {

//             break;
            
//         }
//     console.log(users[i])
    
// }

// #######################################################

// while loop und dowhile

// Beispiel mit while-Schleife
// let i = 0;

// Die while-Schleife prüft die Bedingung VOR der Ausführung
// Solange i kleiner als 3 ist, wird der Block ausgeführt
// Wenn die Bedingung am Anfang falsch ist, wird der Code NICHT ausgeführt
// while (i < 3) {
//     document.write("<h1> hello world </h1>");
//     i++;
// }

// Beispiel mit do...while-Schleife
// let x = 0;

// // Die do...while-Schleife führt den Block mindestens EINMAL aus,
// // auch wenn die Bedingung am Ende falsch ist
// do {
//     document.write("<h1> hello world </h1>");
//     x++;
// } while (x < 3); // Bedingung wird erst NACH der ersten Ausführung geprüft


// let x = 5; // x bekommt den Wert 5

// // Die Schleife wird mindestens einmal ausgeführt,
// // auch wenn die Bedingung unten falsch ist
// do {
//     document.write("<h1> hello world </h1>");
//     // x wird nicht verändert, bleibt 5
// } while (x < 3); // Bedingung ist falsch (5 < 3), also keine weitere Wiederholung

// #######################################################

// // Function:

// // #######################################################
// // Funktion: hallo(name)
// // Zweck: Gibt eine Begrüßung mit dem übergebenen Namen in der Konsole aus
// function hallo(name) {
//     // Gibt "Hallo" + den Namen aus, z. B. "Hallo Sameh"
//     console.log("Hallo " + name)  
// }

// // Funktionsaufrufe mit verschiedenen Namen
// hallo("Sameh");
// hallo("Ahmed");
// hallo("ali");

// // #######################################################
// // Funktion: calcAge(age)
// // Zweck: Rechnet das Alter in Tagen um (ohne Schaltjahre)
// function calcAge(age) {
//     // Multipliziert das Alter mit 365 Tagen pro Jahr
//     let result = age * 365;
//     // Gibt die Anzahl der Tage aus
//     console.log(result)  
// }

// // Funktionsaufrufe mit verschiedenen Alterswerten
// calcAge(25)  // 9125 Tage
// calcAge(20)  // 7300 Tage
// calcAge(18)  // 6570 Tage
// calcAge(2)   // 730 Tage

// // #######################################################
// // Funktion: pro(price, taxes, ads)
// // Zweck: Berechnet den Endpreis eines Produkts inkl. Steuern und Werbungskosten
// function pro(price, taxes, ads ) {
//     // Zwischensumme: Preis + Steuern
//     let product = price + taxes;
//     // Endpreis: Zwischensumme + Werbungskosten
//     let result = product + ads;
//     // Gibt den berechneten Gesamtpreis aus
//     console.log(result);
// }

// // Funktionsaufrufe mit unterschiedlichen Werten
// pro(200, 2.5 , 10)   // 212.5
// pro(400, 2.5 , 40)   // 442.5
// pro(10, 2 , 40)      // 52
// pro(200, 3 , 40)     // 243
// pro(300, 5 , 40)     // 345

// // #######################################################

// function return

// Funktion: pro(price, taxes, ads)
// Zweck: Berechnet den Gesamtpreis eines Produkts mit Steuern und Werbekosten
// function pro(price, taxes, ads ) {

//     // Zwischensumme: Preis + Steuern
//     let product = price + taxes;

//     // Endpreis: Zwischensumme + Werbekosten
//     let result = product + ads;

//     // Gibt den Gesamtpreis zurück
//     return result; 
// }

// // Speichert das Ergebnis der Funktion in der Variable x
// let x = pro(200, 1.5, 40);

// // Gibt den zurückgegebenen Gesamtpreis in der Konsole aus
// console.log(x);  // Ausgabe: 241.5


// // // #######################################################
// // Funktion zur Umrechnung von Jahren in Tage
// function days(age) {
//     let result = age * 365;
//     return result;
// }

// // Speichere die Anzahl der Tage für 37 Jahre
// let day = days(37);

// // Funktion zur Umrechnung von Tagen in Stunden
// function calcAgeByHours(days) {
//     let result = days * 24;
//     return result;
// }

// // Übergib die berechneten Tage an die Stunden-Funktion
// let hours = calcAgeByHours(day);

// // Gib das Ergebnis aus
// console.log(hours + " Stunden"); // Ausgabe: 324120 Stunden

// // #######################################################

// Hoisting الرفع
// function declaration
// hallo()
// function hallo() {
//     console.log("hallo")
// }
// // // #######################################################
// //  global variabl

// var name = "Hamada";

// (function () {
//     var name = "Ahmed";
//     console.log("جوا الدالة:", name); // Ahmed
// })();

// console.log("برا الدالة:", name); // Hamada
// // #######################################################

// backticks
// Default-Parameter (Standardparameter) sind Werte, die einer Funktion automatisch zugewiesen werden, wenn kein Wert beim Funktionsaufruf übergeben wird.

// function hallo(name="Ahmed") {
//     console.log(`Hallo ${name}`); 
// }
// hallo("Sameh");

// #######################################

//  Lokale Variable
// Wird mit let oder const innerhalb einer Funktion oder eines Blocks {} deklarier, Ist nur innerhalb dieses Blocks sichtbar
// function hallo() {
//   let name = "Ali";  // lokale Variable
//   console.log(name);
// }
// #######################################

//  Globale Variable
// Ist im gesamten Skript verfügbar
// var außerhalb einer Funktion erzeugt auch eine globale Variable

// var sprache = "JavaScript";  // globale Variable

// function zeigen() {
//   console.log(sprache);
// }

// #######################################

// Standardwerte für Argumente
// Das bedeutet: Wenn eine Funktion aufgerufen wird, ohne ein bestimmtes Argument zu übergeben, wird ein vordefinierter Standardwert verwendet.

// function hello(name = "Ahmed") {

//     console.log(`hello ${name}`);   
// }

// hello("Ali")
// #######################################

// Das ist ein Rest-Parameter
// Die Funktion calc kann beliebig viele Argumente entgegennehmen. lle Argumente werden automatisch in ein Array (numbers) gesammelt

// function calc(...numbers) {
//     console.log(numbers);
// }
// calc(10,20);
// #######################################

// function calc(...numbers) {
//     // Initialisiere die Ergebnisvariable mit 0
//     let result = 0;

//     // Schleife über alle Zahlen im Array
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i]; // Addiere jede Zahl zum Ergebnis
//     }

//     console.log("Eingaben:", numbers); // Zeige die übergebenen Zahlen
//     console.log("Summe:", result);     // Zeige die berechnete Summe
// }

// calc(5)

// #######################################
// Normale Funktionsausdruck-Schreibweise
// let x = function () {
//     return 1;
// }

// Aufruf der Funktion und Ausgabe
// console.log(x())

// Umwandlung in eine Pfeilfunktion (Arrow Function)
// let x = () => 1;  // Arrow Function gibt direkt 1 zurück

// console.log(x());  // Ausgabe: 1

// #######################################

// Ein Objekt mit dem Namen "car"
// let car = {
//   title: "BMW",              // Titel oder Marke des Autos
//   price : 500000,            // Preis des Autos
//   color: ["white", "black"], // Verfügbare Farben (als Array)
//   model: 2020,               // Baujahr des Autos

//   // Eine Methode (Funktion) innerhalb des Objekts
//   hallo: function() {
//     return "hallo";          // Gibt einfach "hallo" zurück
//   }
// };

// Zugriff auf die Eigenschaften und Methode
// console.log(car.color[0]);   // Gibt "white" aus
// console.log(car.title);      // Gibt "BMW" aus
// console.log(car.price);      // Gibt 500000 aus
// console.log(car.model);      // Gibt 2020 aus
// console.log(car.hallo());      // G

// #######################################
// // nasted Object
// let user = {
//   // Eigenschaften des Objekts (properties)
//   firstName: "Abedlerahamn",     // Vorname
//   lastName: "Gamal",             // Nachname
//   email: "sa_mh87@outlook.de",   // E-Mail-Adresse
//   age: 26,                       // Alter
//   skills: ["html", "CSS", "Python"], // Liste der Fähigkeiten
//   aktive: true,                  // Ist der Benutzer aktiv?

//   // Verschachteltes Objekt (nested object) für Telefonnummern
//   phonNumber: {
//     first: "0122545465468",      // Erste Telefonnummer
//     scond: "0402165340316",      // Zweite Telefonnummer (Tippfehler: "scond" sollte "second" sein)
//   },

//   // Verschachteltes Objekt für Adressen
//   adresse: {
//     Egypt: "Kairo",              // Adresse in Ägypten
//     Germany: "Wutach"            // Adresse in Deutschland
//   },

//   // Methode zur Prüfung, ob der Benutzer aktiv ist
//   isActive: function () {
//     if (user.aktive === true) {
//       return "Hallo User";       // Gibt Begrüßung zurück, wenn aktiv
//     } else {
//       return "sorry you are not aktive"; // Gibt Fehlermeldung zurück, wenn nicht aktiv
//     }
//   },

//   // Methode zur Altersprüfung
//   getAge: function () {
//     if (user.age >= 18) {
//       return "available";        // Benutzer ist volljährig
//     } else {
//       return "unavailable";      // Benutzer ist nicht volljährig
//     }
//   }
// };

// // ---- Ausgabe / Zugriff auf Daten ----

// console.log(user.firstName);             // Gibt den Vornamen aus
// console.log(user.phonNumber.first);      // Gibt die erste Telefonnummer aus (aus dem verschachtelten Objekt)
// console.log(user.getAge.name);           // Gibt den Namen der Funktion "getAge" als String zurück
// console.log(user["phonNumber"]["first"]) // Alternative Zugriffsschreibweise auf verschachtelte Objekte

// console.log(user.isActive);              // Gibt die Funktion selbst zurück (nicht das Ergebnis)
// console.log(user["getAge"]());           // Führt die Funktion aus und gibt das Ergebnis zurück

// #######################################
// create object:

// let user = {
//   name: "Sameh"          // Eigenschaft 'name' mit dem Wert "Sameh"
// };

// user["age"] = 25;        // Fügt eine neue Eigenschaft 'age' mit dem Wert 25 hinzu (über eckige Klammernotation)
// console.log(user.name);  // Ausgabe: Sameh

// user.name = "Ahmed";     // Überschreibt die bestehende Eigenschaft 'name' mit dem neuen Wert "Ahmed"
// console.log(user.name);  // Ausgabe: Ahmed

// console.log(user.age);   // Ausgabe: 25

// // Fügt eine Methode (Funktion) dem Objekt hinzu
// user.hello = function () {
//   return "hallo";
// }
// console.log(user.hello()); // Ausgabe: hallo



// let product = new Number();  // Erstellt ein Objekt vom Typ Number (nicht der primitive Wert!)
// let product2 = new String(); // Erstellt ein Objekt vom Typ String
// let product3 = new Object(); // Erstellt ein generisches Objekt

// product.title = "Mensch";    // Fügt dem Number-Objekt eine Eigenschaft 'title' hinzu

// console.log(product);        // Zeigt das Number-Objekt mit zusätzlicher Eigenschaft
// console.log(product2);       // Zeigt das String-Objekt (leer, weil kein Text übergeben wurde)
// console.log(product3);       // Zeigt ein leeres Objekt {}
// console.log(product.title);  // Ausgabe: Mensch

// ################################################################
//this 

// // Objekt mit Methode, die 'this' verwendet
// let user = {
//   name: "AbedelRahaman",

//   getName: function () {
//     return this.name;   // 'this' verweist hier auf das aktuelle Objekt 'user'
//   }
// }
// console.log(user.getName());  // Ausgabe: AbedelRahaman


// // Zugriff auf das globale Objekt mit 'this'
// let x = this; // Im globalen Kontext (außerhalb von Funktionen) ist 'this' === window (im Browser)

// // Öffnet ein Alert-Fenster im Browser (nur im Browser sichtbar)
// // Achtung: funktioniert **nicht** in Node.js oder außerhalb des Browsers!
// this.alert("Hallo Yallllllllaaaaaaaaaaaaa")

// console.log(x == window); // Ausgabe: true (im Browser)


// // "use strict";
// // Verwendung von "use strict" aktiviert den strikten Modus
// "use strict";

// // Strikter Modus verhindert, dass man versehentlich globale Variablen erstellt
// // x = 10;  // ❌ Würde einen Fehler verursachen, weil 'x' nicht deklariert wurde
// // console.log(x)

// // //  x = 10;
// // // console.log(x)

// // Achtung: Fehler in der Parameterliste! Beide Parameter heißen 'num1'
// // JavaScript lässt das zwar zu, aber es ist schlecht und führt zu unerwartetem Verhalten

// function calc(num1, num1) {
//   return "Hallo"; // Gibt einfach nur "Hallo" zurück, unabhängig von Eingaben
// }
// console.log(calc()); // Ausgabe: "Hallo"

// ################################################################


let user = {
  name: "AbedelRahaman",

  getName: function () {
    return `Hallo ${user.name}`; // ❗ Hier wird direkt auf 'user.name' zugegriffen, NICHT auf 'this.name'
  }
}


let user2 = Object.create(user); // Erstellt ein neues Objekt 'user2', das von 'user' erbt (Prototype-Vererbung)


console.log(user2.name);
// Ausgabe: "AbedelRahaman"
// Warum? Weil 'user2' keinen eigenen 'name'-Wert hat → also wird der 'name' vom Prototypen (user) verwendet

user2.name = "Ali";  // Jetzt hat 'user2' einen eigenen 'name'-Wert (überschreibt den geerbten)
user2.age = 30;       // Fügt eine neue Eigenschaft 'age' zu 'user2' hinzu

console.log(user2.getName());
// Ausgabe: "Hallo AbedelRahaman"
// ❗ Warum nicht "Hallo Ali"? Weil in der Methode `getName()` folgendes steht:
// `return "Hallo " + user.name` → es wird IMMER auf das Objekt `user` verwiesen, nicht auf `this`
// 🔧 Lösung wäre: `return "Hallo " + this.name`

console.log(user2.name);
// Ausgabe: "Ali" (weil eigene Eigenschaft von 'user2')

console.log(user.name);
// Ausgabe: "AbedelRahaman" (nicht verändert)

console.log(user2.age);
// Ausgabe: 30 (Eigenschaft gehört nur zu 'user2')

// ################################################################

// assign
// Drei separate Objekte
let a1 = {
  num1: 1
}
let a2 = {
  num2: 2
}
let a3 = {
  num3: 3
}

// Object.assign kopiert alle Eigenschaften von a2, a3 und dem letzten Objekt
// in das erste Objekt (a1), und gibt dieses aktualisierte Objekt zurück.
let a4 = Object.assign(a1, a2, a3, {
  num4: 4
});

a4.num1 = 10;  // Überschreibt num1 in a4 (also auch in a1)
a4.r = 100;    // Fügt neue Eigenschaft hinzu

console.log(a4)