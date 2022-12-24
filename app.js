//console.log("Hello world");
//console.error("Error");
//console.warn("Warn")

let a = 5;
var b = 10; //global scoped
const c = 15;

let s1 = "Today is sunny day";
let s2 = "World";
let result = `${s1} jckjdbcsdj ${s2}`;

//console.log(s1.split(" ").join(" "));
//console.log(s1.length)

function sum(a, b){
    return a + b;
}

//console.log(sum(5,6));

let arr = [1, "jcdjcnds", false];
arr.push(17);

let temp1 = 6;
let temp2 = "6";
let temp3 = true;
/*
if (temp1 === temp2){
    console.log("Enters if statement");
}
else{
    console.log("Doesnt enter if statement");
}

if (false)
    console.log("true");
else if (7 > 5) {
    console.log("Enters else if");
}  
*/
/*
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
*/
/*
for (let i = 0; i < 10; i++){
    console.log(i);
}
*/

let obj = {
    name : "Petar",
    surname : "Petrovic",
    arr : [20, 23, 56]
}

//console.log(`${obj.name} ${obj.surname} age :  ${obj.age}`);
/*console.log(obj.arr);

for (let i = 0; i < obj.arr.length; i++){
    console.log(obj.arr[i]);
}*/
/*
let city1 = {
    name : "Podgorica",
    population : 250000,
    settlement: [
        {name : "Zabjelo"},
        {name: "Stari aerodrom"}
      ]
}
let city2 = {
    name : "Niksic",
    population : 40000,
    settlement: [
        {name : "Zupa"},
        {name: "Centar"}
    ]
}

let cities = [city1, city2]
console.log(cities);
console.log(cities[0].name + " settlement 2 " + cities[0].settlement[1].name)
*/
let city = {
    name : "Podgorica",
    population : 250000
}


let array = [5, 6, 7, 8, 9, 10];

let print = function (element, index){
    console.log("index" + index + " " + element);
}

let filterFunction = function (element){
    return element > 6
}

let filteredArray = array.filter(filterFunction);
console.log(filteredArray);

let objArray = [
    {name: "Podgorica", population : 2500000},
    {name: "Niksic", population : 45000}
];

let mapFunction = function (element){
    return element.name + " " + element.population ;
}
console.log(objArray.map(mapFunction));


if (true){
    let n = 5;
}

console.log(n)

