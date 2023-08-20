// // 2weeks

// let mom = 1300;
// let dad = 1300;

// let gil = 400;
// let margui = 500;


// let rent = 2900;
// let phone = 185;
// let gym = 40;
// let carInc = 210;
// let food = 700;
// let gas = 180;

// let total = ((mom + dad) * 2) - ((rent - (gil + margui)) + phone + gym + carInc + food + gas)

// console.log(total)
// console.log(total - 150 - 130 - 50 - 250 )



// house income

let d = 50000;
let m = 50000;
let g = 10000;
let t = 50000;
let h = 25000;
let p = 80000;

let home = 700000;

let total = d + m + g + t + h + p;

// console.log(total)
let homeCalc = home - total;
// console.log((homeCalc / 30) / 12 * .07) 





let arr = [2,4,6,9];
let newArr = [];

arr.forEach(item => {
    newArr.push(item + 5)
})

// console.log(newArr)


let mapArr = [1,2,3,4];

let newMapArr = mapArr.map(mapFunc);
let arrMap = mapArr.map(item => item * 10);

function mapFunc(num){
    return num * 10;
}

// console.log(newMapArr)
// console.log(arrMap)

let reduceArr = [2,4,5,6,7];

let reduceArrNew = reduceArr.reduce((item, index) => {
    // console.log(`This is the ${item}: and this is the ${index}`)
    return item + index;
}, 0)

// console.log(reduceArrNew)

// 
// 
// 

let a = 1;
const b = 2;
var c = 3;
// console.log(c)
 c = 4
//  console.log(c)

function varFunc(){
    // let a = 4;
    // const b = 5;
    // var c = 6;
    console.log(a)
    console.log(b)
    console.log(c)
}

// varFunc()




const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});