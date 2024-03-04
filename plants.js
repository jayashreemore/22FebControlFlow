
/* growing plants

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area);

let space = 0.8;
let plants = 20;


for (let week = 1; week <= 3; week++) {
    console.log(week);
    maxPlants = area / space;
    total = maxPlants * (plants *= 2);
    console.log(total);
    if (total >= (maxPlants * 0.8)) {
        console.log("Pruned");
    }else if (total >= (maxPlants * 0.5) && total <= (maxPlants * 0.8)) {
        console.log("Plant");
    } else{
        console.log("Monitor");
    }
}
*/
/*
/// think bigger ///
const PI = 3.1415;

let space = 0.8;
let plants = 100;
let week = 10;

let area = plants * space * 2 *  week;

console.log(area + " square meters");

let radius = 0.5 * (area / PI)
console.log(radius + " radius");

*/

//error 
/*
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log(area);
let space = 0.8;
let plants = 100;
let week = 10;
let newarea = plants * space * 2 *  week;
console.log(newarea);

try{
    if(newarea < area){
    console.log("You can add more plant");
    } else if (newarea == area){
        console.log("You have the exact amount plants");
    } else{
        throw("TOO MANY PLANTS")
    }
} catch(error){
    console.log(error);
}

/*
/// Fuel Car miles 

console.log("--------Rode trip---------");
let cost = 3;
let budget = 175;
let trip = 1500
let mph1 = 55;
let mph2 = 60; 
let mph3 = 70;
let mpg1 = 30;
let mpg2 = 28;
let mpg3 = 23;

total = trip / mpg1
console.log("Total gallons is " + total + " for 30 miles per gallon");
if(budget >= ((trip / mpg1) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

total = trip / mpg2
console.log("Total gallons is " + total + " for 28 miles per gallon");
if(budget >= ((trip / mpg2) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

total = trip / mpg3
console.log("Total gallons is " + total + " for 23 miles per gallon");
if(budget >= ((trip / mpg3) * 3)){
    console.log("We have enough to pay");
} else{
    console.log("We don't have enough");
}

hours = trip / mph1
console.log("It would take " + hours + " to reach " + trip + " driving 55mph");

hours = trip / mph2
console.log("It would take " + hours + " to reach " + trip + " driving 60mph");
hours = trip / mph3
console.log("It would take " + hours + " to reach " + trip + " driving 70mph");

console.log("I would say driving 60mph is best, even though it is longer than 70mph but it is more affordable in fuel than drvinging 70 and it not too far from 55mph in fuel");

//// csv ///let csv = ['ID,Name,Occupation,Age,42,Bruce,Knight,41,57,Bob,Fry Cook,19,63,Blaine,Quiz Master,58,98,Bill,Doctors Assistant,26']

console.log(csv);

console.log('-------Expanding Functionality---------');

csv.push('55');
csv.push('Peter');
csv.push('developer')
csv.push('26');
console.log(csv);


csv = [["ID", "Name", "Occupation", "Age"],["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctors Assistant", "26"]]

console.log(csv);
console.log('-------Transforming Data--------');

csv = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctors Assistant", age: "26" }
]
console.log(csv);

console.log('--------Sorting and Manipulating Data--------');

csv.pop();
console.log(csv);
csv.splice(1, 0,{
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(csv);
csv.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(csv);

let age= 0;
for (employee of csv) {
  age += parseInt(employee.age);
}

let avgAge = (age / csv.length).toFixed(2);
console.log('avarge age at CSV is ' + avgAge);

console.log('--------Full Circle------');

csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n48,Barry,Runner,25'

console.log(csv);
///////