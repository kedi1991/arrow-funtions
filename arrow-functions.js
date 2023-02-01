/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addNumbers(a, b){
    return a + b;
}

answer = addNumbers(2,8);
console.log(answer);

// Arrow Function With Parameters
const addNumbers2 = (a, b) => {
    return a + b;
}

// Single Line Arrow Function With Parameters
const addNumbers3 = (a, b) => a + b;

// Implicit Returns
const addNumbers4 = () => console.log("okurut");
// Returning Multiple Lines

addNumbers4();


mathem = [12,45,45,67];

sci = [...mathem];
sci.push(89);

console.log(mathem);
console.log(sci);

//the rest operator   ...rest . you can use any other name 
//add 3 numbers
const addNumbers20 = (a,b,c) => (a + b + c);
console.log(addNumbers20(12,45,23));

const addNumbers21 = (a,b,c, ...others) => {
    sum = a +b+c;
    for (let i of others) {
        sum = sum + i;
    }
    return sum;
}

console.log(addNumbers21(12,45,23,100,2000));


//destructuring
let marks = [80,45,34,12];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);

let [eng, hist, mat, geo] = marks;
console.log(eng, hist,mat,geo);

//using the map function

let nums = [1,2,3,4,5];
let newnums = [];
for (let num of nums){
    newnums.push(num * 20);
}
console.log(newnums);

//using the fx here

let fig = [45];

let result = fig.map((num) => num * 100);
console.log("Daddy: " + result);


//filter method
let students = [
    {name:"okurut", age: 45}, 
{name:"gilli", age: 19}, 
{name:"Koba", age: 34}
];

//apply filtering
let filtered = students.filter(child => child.age > 30);
console.log(filtered);


//reduce method
//always use the initial value to avoid bugs
let costs = [10,34,56,33];

console.log(costs.reduce((acc, curr) => acc + curr, 0));

