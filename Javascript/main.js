

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
let cars = ["BMW", "Mercedes", "Honda"];

// Ein Array mit Modelljahren
let models = [2020, 2021, 2022];

// Ein Array mit Farben
let colors = ["blacks", "white", "red"];

// Äußere Schleife: Durchläuft jede Automarke im Array "cars"
for (let i = 0; i < cars.length; i++) {
    // Gibt die aktuelle Automarke aus
    console.log(`cars : ${cars[i]}`);

    // Innere Schleife 1: Durchläuft jedes Modelljahr im Array "models"
    for (let j = 0; j < models.length; j++) {
        // Gibt das aktuelle Modelljahr aus
        console.log(`models : ${models[j]}`);
    }

    // Innere Schleife 2: Durchläuft jede Farbe im Array "colors"
    for (let x = 0; x < colors.length; x++) {
        // Gibt die aktuelle Farbe aus
        console.log(`colors : ${colors[x]}`);
    }

    // Trennt die Ausgabe für jede Automarke optisch
    console.log("_____________");
}



