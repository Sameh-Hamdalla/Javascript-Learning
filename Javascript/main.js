

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


// let user = {
//   name: "AbedelRahaman",

//   getName: function () {
//     return `Hallo ${user.name}`; // ❗ Hier wird direkt auf 'user.name' zugegriffen, NICHT auf 'this.name'
//   }
// }


// let user2 = Object.create(user); // Erstellt ein neues Objekt 'user2', das von 'user' erbt (Prototype-Vererbung)


// console.log(user2.name);
// // Ausgabe: "AbedelRahaman"
// // Warum? Weil 'user2' keinen eigenen 'name'-Wert hat → also wird der 'name' vom Prototypen (user) verwendet

// user2.name = "Ali";  // Jetzt hat 'user2' einen eigenen 'name'-Wert (überschreibt den geerbten)
// user2.age = 30;       // Fügt eine neue Eigenschaft 'age' zu 'user2' hinzu

// console.log(user2.getName());
// // Ausgabe: "Hallo AbedelRahaman"
// // ❗ Warum nicht "Hallo Ali"? Weil in der Methode `getName()` folgendes steht:
// // `return "Hallo " + user.name` → es wird IMMER auf das Objekt `user` verwiesen, nicht auf `this`
// // 🔧 Lösung wäre: `return "Hallo " + this.name`

// console.log(user2.name);
// // Ausgabe: "Ali" (weil eigene Eigenschaft von 'user2')

// console.log(user.name);
// // Ausgabe: "AbedelRahaman" (nicht verändert)

// console.log(user2.age);
// // Ausgabe: 30 (Eigenschaft gehört nur zu 'user2')

// // ################################################################

// // assign
// // Drei separate Objekte
// let a1 = {
//   num1: 1
// }
// let a2 = {
//   num2: 2
// }
// let a3 = {
//   num3: 3
// }

// // Object.assign kopiert alle Eigenschaften von a2, a3 und dem letzten Objekt
// // in das erste Objekt (a1), und gibt dieses aktualisierte Objekt zurück.
// let a4 = Object.assign(a1, a2, a3, {
//   num4: 4
// });

// a4.num1 = 10;  // Überschreibt num1 in a4 (also auch in a1)
// a4.r = 100;    // Fügt neue Eigenschaft hinzu

// console.log(a4)

// // ################################################################
// // Wir erreichen das gesamte HTML-Dokument über das "document"-Objekt in JavaScript

// // Zugriff auf ein Element mit bestimmter ID:
// document.getElementById("head");
// // In der Konsole so ausgeben:
// console.log(document.getElementById("head"));

// // Oder das Element in einer Variablen speichern:
// let head = document.getElementById("head");
// console.log("head");  // (hier wird nur der Text "head" ausgegeben, nicht das Element selbst)

// // Element mit einer bestimmten Klasse finden:
// let head = document.getElementsByClassName("head")[1]; // Zugriff auf das zweite Element mit Klasse "head"

// // Zugriff auf ein Element über seinen Tag-Namen:
// let head = document.getElementsByTagName('h1')[0]; // Erstes <h1>-Element
// head.style.color = 'red'; // Textfarbe rot setzen
// console.log(head); // Das Element in der Konsole anzeigen

// // Verwendung von querySelector (liefert das erste passende Element zurück):
// let head = document.querySelector('h1'); // Erstes <h1>-Element im Dokument
// head.style.color = 'red'; // Farbe rot setzen
// console.log(head); // Element anzeigen

// // Verwendung von querySelectorAll (liefert eine Liste aller passenden Elemente):
// let head = document.querySelectorAll('h1')[0]; // Erstes <h1>-Element
// // let head = document.querySelectorAll('h1')[1]; // Zweites <h1>-Element
// // let head = document.querySelectorAll('h1')[2]; // Drittes <h1>-Element
// head.style.color = 'red'; // Farbe ändern
// console.log(head); // Element anzeigen

// // Zugriff auf den <body> des Dokuments:
// let body = document.body;

// // Zugriff auf den Titel der Seite:
// let title = document.title;
// // body.style.background = 'red'; // Hintergrundfarbe des Body auf rot setzen
// title = 'Sameh'; // Titel der Seite ändern
// // console-console.log(body); // Fehlerhafter Befehl, sollte entfernt werden
// console.log(title); // Neuen Titel anzeigen

// // Zugriff auf alle <img>-Elemente:
// let images = document.images;
// console.log(images); // Liste aller Bilder anzeigen

// // Zugriff auf Links (<a>-Elemente):
// let links = document.links[0]; // Erster Link im Dokument
// links.href = "https://www.youtube.com/"; // Link-Adresse ändern
// console.log(links.href); // Neue Adresse anzeigen

// // Zugriff auf Formulare:
// let forms = document.forms[0]; // Erstes Formular im Dokument
// console.log(forms); // Formular anzeigen


// // ################################################################
// Zugriff auf das <img>-Element über die ID
// let img = document.getElementById('img');

// // Ausgabe des aktuellen Attributwerts "id"
// // console.log(img.id);

// // Attributwerte ändern oder setzen:
// // img.src = 'im';       // ❗ Schreibfehler: sollte "src" sein, nicht "scr"
// // img.className = 'im'; // ❗ "class" in JS → "className"
// // img.id = 'im';         // ID neu setzen

// // Neuen Attributwert setzen:
// // img.title = 'test'; // "title" wird hinzugefügt oder überschrieben
// // console.log(img.title); // Ausgabe: "test"

// // Prüfen, ob das Element bestimmte Attribute hat:
// // console.log(img.hasAttribute());       // ❌ Fehler – benötigt ein Argument
// // console.log(img.hasAttributes());      // ✅ Gibt true zurück, wenn das Element mindestens ein Attribut hat
// // console.log(img.hasAttribute('src'));  // ✅ Gibt true zurück, wenn das Attribut "src" existiert

// // Alle Attribute anzeigen:
// // console.log(img.attributes);       // Liste aller Attribute (NamedNodeMap)
// // console.log(img.attributes[0]);    // Erstes Attribut im Objekt
// // console.log(img.attributes[1]);    // Zweites Attribut im Objekt

// // Attribut neu setzen oder überschreiben:
// // console.log(img.setAttribute('alt', 'Ahmed')); // Setzt "alt"-Attribut auf "Ahmed"

// Attribute entfernen:
// img.removeAttribute('alt');   // entfernt das "alt"-Attribut
// img.removeAttribute('scr');   // ❗ Schreibfehler – sollte "src" sein
// img.removeAttribute('class'); // entfernt das "class"-Attribut
// img.removeAttribute('id');    // entfernt das "id"-Attribut

// // Ausgabe des <img>-Elements nach dem Entfernen der Attribute
// console.log(img);

// // ################################################################

// // sibling and parent
// // Holt das Element mit der ID 'second'
// let element = document.getElementById('second');

// // Ändert den Inhalt (HTML) des nächsten Geschwisterelements (nextElementSibling) zu 'test'
// element.nextElementSibling.innerHTML = ('test');

// // Entfernt das nächste Geschwisterelement (Elementknoten, nicht Text oder Kommentar)
// element.nextElementSibling.remove();

// // Gibt das vorherige Element-Geschwisterelement in der Konsole aus
// console.log(element.previousElementSibling);

// // Gibt das nächste Element-Geschwisterelement in der Konsole aus (nach dem remove evtl. null)
// console.log(element.nextElementSibling);

// // Gibt das vorherige **Node-Geschwister** aus (kann auch ein Textknoten sein, z. B. Leerzeichen)
// console.log(element.previousSibling);

// // Gibt das nächste **Node-Geschwister** aus (kann auch ein Textknoten sein)
// console.log(element.nextSibling);

// // Entfernt das übergeordnete Elternelement (parentElement) inklusive aller Kinder (also auch 'element' selbst)
// element.parentElement.remove();

// // Gibt das Elternelement aus (nach dem Entfernen ist es wahrscheinlich null)
// console.log(element.parentElement);

// // ################################################################
// // Holt das Element mit der ID "container" aus dem HTML
// let container = document.getElementById('container');

// Gibt das Element im Originalzustand in der Konsole aus (auskommentiert)
// console.log(container)

// Gibt den gesamten HTML-Code des Elements inklusive des Elements selbst aus (auskommentiert)
// console.log(container.outerHTML);

// Gibt nur den inneren HTML-Inhalt des Elements aus (auskommentiert)
// console.log(container.innerHTML);

// Ersetzt den Inhalt des Elements durch echtes HTML: <p>hello</p>
// Das bedeutet: der alte Inhalt (z. B. <h3>Hallo Ihr</h3>) wird gelöscht und durch <p>hello</p> ersetzt
// container.innerHTML = "<p>hello</p>";

// Ersetzt das gesamte <div id="container">-Element (inkl. sich selbst) durch <p>hello</p>
// Danach existiert "container" nicht mehr als Referenz im DOM
// container.outerHTML = "<p>hello</p>";

// Setzt den Textinhalt des Elements auf den String "<p>hello</p>"
// HTML-Tags werden nicht interpretiert, sondern als normaler Text dargestellt
// container.innerText = "<p>hello</p>";

// Ersetzt das gesamte <div id="container">-Element durch reinen Text "<p>hello</p>"
// HTML wird hier nicht als Tag erkannt, sondern nur als Text gezeigt
// container.outerText = "<p>hello</p>";

// // ################################################################
// // CSS-Stile im DOM direkt über JavaScript setzen

// let container = document.getElementById('container'); // Zugriff auf das Element mit der ID 'container'

// // console.log(container) // Zum Testen: Gibt das Element in der Konsole aus

// container.innerText = 'Hallo World'; // Textinhalt des Elements ändern

// // Einzelne CSS-Eigenschaften direkt setzen:
// container.style.backgroundColor = 'red'; // Hintergrundfarbe auf Rot setzen
// container.style.color = '#fff';          // Textfarbe auf Weiß setzen
// container.style.padding = '10px';        // Innenabstand (Padding) setzen
// container.style.borderLeft = '4px solid yellow'; // Linke Rahmenlinie setzen

// // Mehrere CSS-Eigenschaften gleichzeitig über cssText setzen:
// container.style.cssText = `
// background: #444;
// color: white;
// `; // Achtung: cssText überschreibt vorher gesetzte Styles

// // Einzelne CSS-Eigenschaft mit setProperty setzen:
// container.style.setProperty('color', 'red'); // Farbe auf Rot setzen

// // CSS-Eigenschaften wieder entfernen:
// container.style.removeProperty('color');       // Farbe entfernen (wird zurückgesetzt)
// container.style.removeProperty('background');  // Hintergrund entfernen (wird zurückgesetzt)

// #############################################
// Element per JavaScript erstellen

// Elemente erzeugen
// let container = document.createElement('div'); // kein <body> neu erstellen!
// let head = document.createElement('h1');
// let img = document.createElement('img');

// // Textknoten erzeugen und dem <h1> hinzufügen
// let content = document.createTextNode('hallo world');
// head.appendChild(content);

// // Bild konfigurieren
// img.src = './Meinbild.jpg';  // Bildpfad (achte auf richtigen Pfad!)
// img.style.width = '100px';

// // Elemente zum Container hinzufügen
// container.appendChild(img);
// container.appendChild(head);

// // Container zum bestehenden <body> hinzufügen
// document.body.appendChild(container);

// // Container stylen
// container.style.background = '#666';
// container.style.color = '#fff';
// container.style.padding = '10px';
// container.style.textAlign = 'center';

// // Debug-Ausgabe
// console.log(head);
// // console.log(img)
// #############################################

// CARDS Projekt

// let names = ['Sameh', 'Jasin', 'Lina', 'Julia']; // Namen der Personen
// let Alter = ['37 Jahre alt ', '5 Jahre alt', '2 Jahre alt', '34 Jahre alt']; // Alter der Personen als Text

// let container = document.createElement('div'); // Erstelle ein übergeordnetes Container-Element
// document.body.appendChild(container); // Füge den Container zum Body der Webseite hinzu
// container.style.textAlign = 'center'; // Zentriere den Inhalt im Container

// function element(name, Alter) {

//     // Elemente erstellen

//     let card = document.createElement('div'); // Karte für jede Person
//     let title = document.createElement('h2'); // Überschrift für den Namen
//     let age = document.createElement('p'); // Absatz für das Alter
//     let img = document.createElement('img'); // Bild-Element

//     // Inhalte hinzufügen

//     let head = document.createTextNode(name); // Name als Text
//     let ageContent = document.createTextNode(Alter); // Alter als Text
//     img.src = './Meinbild.png'; // Bildquelle festlegen
//     title.appendChild(head); // Name in die Überschrift einfügen
//     age.appendChild(ageContent); // Alter in den Absatz einfügen

//     // Style der Karte

//     card.style.width = '100%';
//     card.style.background = '#444';
//     card.style.color = '#fff';
//     card.style.padding = '10px';
//     card.style.margin = '2px';
//     card.style.display = 'inline-block'; // Damit Karten nebeneinander stehen können

//     img.style.width = '30%'; // Bildbreite

//     // Baue die Karte zusammen und füge sie dem Container hinzu

//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);
//     container.appendChild(card);
// }

// // Schleife, um für jede Person eine Karte zu erstellen

// for (let i = 0; i < 4; i++) {
//     element(names[i], Alter[i]);
// }

// #############################################
// Events

// let btn = document.getElementById('btn'); // Holt das Button-Element mit der ID "btn"

// // Methode 1: onclick direkt benutzen (klassisch)
// // btn.onclick = function () {
// //     console.log('hallo')
// // }

// // Methode 2: onclick mit einer Arrow-Funktion
// // btn.onclick = () => {
// //     console.log('hallo')
// // }

// // Methode 3: eigene Funktion definieren und über onclick zuweisen
// // function hallo() {
// //     document.body.style.background = 'red';
// // }
// // btn.onclick = hallo;

// // Methode 4: addEventListener benutzen → flexibler

// // Beim Klicken wird der Hintergrund der Webseite rot
// btn.addEventListener('click', function() {
//   document.body.style.background = 'red';
// });

// // Beim Klicken wird der Button blau
// btn.addEventListener('click', function() {
//   btn.style.background = 'blue';
// });

// // Beim Klicken wird der Text im Button weiß
// btn.addEventListener('click', function() {
//   btn.style.color = 'white';
// });

// was ist der Unterschied zwischen onclick und addEventListener??

// btn.onclick = function1;
// btn.onclick = function2; // ❌ function1 wird ersetzt

// btn.addEventListener('click', function1);
// btn.addEventListener('click', function2); // ✅ beide werden ausgeführt

// ✅ Fazit:
// Nutze onclick, wenn du nur eine einfache Funktion brauchst.

// Nutze addEventListener, wenn du mehrere Dinge gleichzeitig bei einem Event machen willst – wie in deinem Beispiel (Hintergrund, Button-Farbe, Textfarbe).

// #############################################
// Events 2
// Mausereignisse (Mouse Events)

// onclick – Wird ausgelöst, wenn man auf ein Element klickt
// element.onclick = function() {
//   console.log("Element wurde angeklickt");
// };

// // onmouseover – Wird ausgelöst, wenn die Maus über das Element fährt
// element.onmouseover = function() {
//   console.log("Maus ist über dem Element");
// };

// // onmouseout – Wird ausgelöst, wenn die Maus das Element verlässt
// element.onmouseout = function() {
//   console.log("Maus hat das Element verlassen");
// };

// // onmousedown – Wird ausgelöst, wenn eine Maustaste gedrückt wird
// element.onmousedown = function() {
//   console.log("Maustaste wurde gedrückt");
// };

// // onmouseup – Wird ausgelöst, wenn die Maustaste losgelassen wird
// element.onmouseup = function() {
//   console.log("Maustaste wurde losgelassen");
// };

// // onmousemove – Wird ausgelöst, wenn sich die Maus über dem Element bewegt
// element.onmousemove = function() {
//   console.log("Maus bewegt sich über dem Element");
// };

// // Tastaturereignisse (Keyboard Events)

// // onkeydown – Wird ausgelöst, wenn eine Taste gedrückt wird
// document.onkeydown = function() {
//   console.log("Taste wurde gedrückt");
// };

// // onkeyup – Wird ausgelöst, wenn eine Taste losgelassen wird
// document.onkeyup = function() {
//   console.log("Taste wurde losgelassen");
// };

// //  Formularereignisse (Form Events)

// // onfocus – Wird ausgelöst, wenn ein Element den Fokus bekommt
// input.onfocus = function() {
//   console.log("Fokus auf das Eingabefeld");
// };

// // onsubmit – Wird ausgelöst, wenn das Formular abgeschickt wird
// form.onsubmit = function() {
//   console.log("Formular wurde abgeschickt");
//   return false; // Um tatsächliches Absenden zu verhindern
// };

// // onblur – Wird ausgelöst, wenn das Element den Fokus verliert
// input.onblur = function() {
//   console.log("Fokus vom Eingabefeld entfernt");
// };

// // onchange – Wird ausgelöst, wenn sich der Wert eines Formularfeldes ändert
// input.onchange = function() {
//   console.log("Wert des Feldes wurde geändert");
// };

// // Fenster-/Dokumentereignisse (Window/Document

// // onload – Wird ausgelöst, wenn die gesamte Seite geladen ist
// window.onload = function() {
//   console.log("Seite vollständig geladen");
// };

// // onunload – Wird ausgelöst, wenn die Seite verlassen wird
// window.onunload = function() {
//   console.log("Seite wird verlassen");
// };

// // onresize – Wird ausgelöst, wenn die Fenstergröße verändert wird
// window.onresize = function() {
//   console.log("Fenstergröße wurde geändert");
// };
// #############################################

// Project USD to EGY

// // Wir holen uns das Eingabefeld für Dollar über seine ID
// let dollar = document.getElementById('dollar');

// // Wir holen uns das Eingabefeld für Pfund über seine ID
// let pound = document.getElementById('pound');

// // Wenn der Benutzer eine Taste im Dollar-Feld drückt
// dollar.onkeyup = function () {
//   // Rechne den Dollar-Wert in Pfund um (1 USD = 50,50 EGP)
//   pound.value = dollar.value * 50.50;
// }

// // Wenn der Benutzer eine Taste im Pfund-Feld drückt
// pound.onkeyup = function () {
//   // Rechne den Pfund-Wert in Dollar um (EGP zurück in USD)
//   dollar.value = pound.value / 50.50;
// }
// #############################################

// after before inside

// // Wir holen die Buttons mit den IDs 'after', 'before', 'inside'
// let after = document.getElementById('after');
// let before = document.getElementById('before');
// let inside = document.getElementById('inside');

// // Wir holen das Element, das verschoben werden soll
// let content = document.getElementById('content');

// // Wir holen den Container, in den oder um den das Element verschoben wird
// let container = document.getElementById('container');

// // Wir setzen den Hintergrund des Containers auf ein helles Gelb
// container.style.backgroundColor = '#ffa';

// // Wir setzen die Höhe des Containers auf 50 Pixel
// container.style.height = '50px';

// // Wenn auf den "after"-Button geklickt wird,
// // wird das Element 'content' direkt NACH dem Container eingefügt
// after.onclick = function() {
//   container.after(content);
// }

// // Wenn auf den "before"-Button geklickt wird,
// // wird das Element 'content' direkt VOR dem Container eingefügt
// before.onclick = function() {
//   container.before(content);
// }

// // Wenn auf den "inside"-Button geklickt wird,
// // wird das Element 'content' IN den Container eingefügt (als letztes Kind)
// inside.onclick = function () {
//   container.append(content);
// }
// #############################################
// navbar

// // Den Button mit der ID "open" auswählen
// let btnOpen = document.getElementById('open');

// // Den Button mit der ID "close" auswählen
// let btnClose = document.getElementById('close');

// // Das Element mit der Klasse "container" auswählen
// let container = document.querySelector('.container');

// // Wenn auf den Schließen-Button geklickt wird
// btnClose.onclick = function () {
//   // Die Box ausblenden, indem die Klasse "hide" hinzugefügt wird
//   container.classList.add('hide');

//   // Den Schließen-Button selbst ausblenden
//   this.classList.add('hide');

//   // Den Öffnen-Button sichtbar machen
//   btnOpen.classList.remove('hide');
// }
// // Wenn auf den Öffnen-Button geklickt wird
// btnOpen.onclick = function () {
//   // Den Öffnen-Button ausblenden
//   this.classList.add('hide');

//   // Den Schließen-Button sichtbar machen
//   btnClose.classList.remove('hide');

//   // Die Box wieder anzeigen
//   container.classList.remove('hide');
// }
// #############################################
// add, remove and toggle class

// // Element mit der ID "hallo" holen
// let hallo = document.getElementById('hallo');

// // Beim Linksklick: Klasse "name" hinzufügen
// hallo.onclick = function () {
//   hallo.classList.add("name");
// }

// // Beim Rechtsklick: Klasse "name" entfernen
// hallo.oncontextmenu = function () {
//   hallo.classList.remove("name");
// }

// // Beim Linksklick: Klasse "name" umschalten (toggle)
// // ⚠️ Überschreibt die vorherige onclick-Funktion!
// hallo.onclick = function () {
//   hallo.classList.toggle("name");
// }
// #############################################
// auto event

// Das Eingabefeld mit der ID "txt" auswählen
// let txt = document.getElementById('txt');

// Den Button mit der ID "btn" auswählen
// let myBtn = document.getElementById('btn');

// Wenn die Seite geladen wird, den Cursor automatisch ins Eingabefeld setzen
// window.onload = function () {
//   txt.focus();
// }

// Wenn die Seite geladen wird, automatisch den Button klicken
// window.onload = function () {
//   myBtn.click();
// }

// Wenn die Seite geladen wird, einen Platzhaltertext ins Eingabefeld schreiben
// window.onload = function () {
//   txt.placeholder = 'Hallo Habibi';
// }

// Beim Rechtsklick auf das Eingabefeld den Fokus entfernen (Cursor verschwindet)
// txt.oncontextmenu = function () {
//   txt.blur();
// }

// Wenn man auf den Button klickt, ändert sich die Hintergrundfarbe zu rot
// myBtn.onclick = function() {
//   myBtn.style.background = 'red';
// }
// #############################################
// Galary Project
// html Teil
//    <div class="gallery">
//       <div class="photos">
//          <img onclick="haupt.src = this.src" src="images/1.jpg" alt="Bild 1">
//          <img onclick="haupt.src = this.src" src="images/2.jpg" alt="Bild 2">
//          <img onclick="haupt.src = this.src" src="images/3.jpg" alt="Bild 3">
//          <img onclick="haupt.src = this.src" src="images/4.jpg" alt="Bild 4">
//       </div>
   
//       <div class="main">
//          <img src="images/4.jpg" name="haupt" alt="">
//       </div>
//       <div class="photos">
//          <img onmouseenter="haupt.src = this.src" src="images/1.jpg" alt="Bild 1">
//          <img onmouseenter="haupt.src = this.src" src="images/2.jpg" alt="Bild 2">
//          <img onmouseenter="haupt.src = this.src" src="images/3.jpg" alt="Bild 3">
//          <img onmouseenter="haupt.src = this.src" src="images/4.jpg" alt="Bild 4">
//       </div>
//    </div>

// CSS Teil 

// .photos img {
//     width: 200px;         /* العرض المناسب */
//     height: 200px;         /* يخلي الارتفاع يتناسب مع العرض */
//     border: 5px solid black;
    
// }
// .photos img:hover {
//     cursor: pointer;
//     border: 5px solid #080; 
// }
// .main img{
//     width: 500px;
//     height: 400px;
//     border: 5px solid #080; 
// }
// .main img:hover {
//     cursor: pointer;
//     border: 5px solid #080; 
// }