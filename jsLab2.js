/*The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week 

Predict the plant growth after a specific number of weeks
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

include the results for 1, 2, and 3 weeks of growth as inputs*/

const pi=3.1415;
const radius = 5;
const area = pi * radius * radius;
console.log("Total area is : "+ area + " sq m2");

const perPlantArea = 0.8;
const week1plants = 20;
const week2Plants = 40;
const week3Plants = 80;

const growth1 = (week1plants * perPlantArea);
console.log("week1Growth is :" + growth1) ;

const growth2 = (week2Plants * perPlantArea) +growth1;
console.log("week2Growth is :" + growth2) ;

const growth3 = (week3Plants * perPlantArea) + growth2;
console.log("week3Growth is :" + growth3) ;

const plantGrowth80 = area * 80/100;
console.log("plant growth with 80% : " + plantGrowth80);

const plantGrowth50 = area * 50/100;
console.log("plant growth with 50% : " + plantGrowth50);
// week 1 status check logic
if(growth1 <= plantGrowth50)
{ console.log("week one growth status is : Planted" );
} else if (growth1 > plantGrowth50 && growth1 <=plantGrowth80)
{
    console.log("week one growth status is : Monitored" ); 
} else {console.log("week one growth status is : Pruned" )}

// week 2 status check logic
if(growth2 <= plantGrowth50)
{ console.log("week two growth status is : Planted" );
} else if (growth2 > plantGrowth50 && growth2 <=plantGrowth80)
{
    console.log("week two growth status is : Monitored" ); 
} else {console.log("week two growth status is : Pruned" )}

// week 3 status check logic

if(growth3 <= plantGrowth50)
{ console.log("week three growth status is : Planted" );
} else if (growth3 > plantGrowth50 && growth3 <=plantGrowth80)
{
    console.log("week three growth status is : Monitored" ); 
} else {console.log("week three growth status is : Pruned" )}

