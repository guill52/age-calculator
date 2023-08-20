let monthVal = false;
let dayVal = false;
let yearVal = false;

// =============================================
// Check if form was enterd correctly
// apply appropriate style with input

function userStyle(){

    const correctStyle = (el) => {
        const element = el.target.parentElement;
        let dateStyle = element.querySelector('.date');
    
        if (dateStyle.classList.contains('error-border')) {
            dateStyle.classList.remove('error-border');
            element.querySelector('.error').textContent = '';
            dateStyle.classList.add('correct');
        } else {
            dateStyle.classList.add('correct');
        }
    };

    const errorStyle = (el) => {
    const element = el.target.parentElement;
    let dateStyle = element.querySelector('.date');

        if (!dateStyle.classList.contains('error-border')) {
            dateStyle.classList.remove("correct");
            dateStyle.classList.add('error-border');
            element.querySelector('.error').textContent = 'Invalid input';
        }
    };
    
    return { errorStyle, correctStyle };

}
const elementStyle = userStyle();

function formVal(key) {

    // console.log(key.target.value)

    const formValFunc = formValidate();
    const element = key.target.parentElement;

    if(element.classList.contains('month')){
        formValFunc.shortVal(key);
    }    

    if(element.classList.contains('day')){
        formValFunc.midVal(key);
    }

    if(element.classList.contains('year')){
        formValFunc.longVal(key);
    }

}

function formValidate() {

    const shortVal = (key) => {
        const numOnly = key.target.value.replace(/[^0-9]/g, '');
        if((numOnly.length <= 2) &&  (numOnly === key.target.value) && (numOnly <= 12)){
            elementStyle.correctStyle(key);
            monthVal = true;
            return
        } else {
            elementStyle.errorStyle(key);
            monthVal = false;
        }
    }

    const midVal = (key) => {
        const numOnly = key.target.value.replace(/[^0-9]/g, '');
        if(numOnly.length <= 2 &&  (numOnly === key.target.value) && numOnly <= 31){
            elementStyle.correctStyle(key);
            dayVal = true;
        } else {
            elementStyle.errorStyle(key);
            dayVal = false;
        }
    }

    const longVal = (key) => {
        const numOnly = key.target.value.replace(/[^0-9]/g, '');
        if(numOnly.length <= 4 && (numOnly === key.target.value)){
            elementStyle.correctStyle(key);
            yearVal = true;
        } else {
            elementStyle.errorStyle(key);
            yearVal = false;
        }
    }

    return { shortVal, midVal, longVal }
}


let dateValInput = document.querySelectorAll('.date');
dateValInput.forEach(date => {
    date.addEventListener('keyup', formVal)
})

// =============================================
// Age calculation with user input

function ageCalc(month, day, year){
    let timeData = new Date();
    let monthData = timeData.getMonth() + 1;
    let dayData = timeData.getDate();
    let yearData = timeData.getFullYear();
    let m, y, d;

    if(day > dayData){
        dayData = dayData + 30
        monthData = monthData - 1
    } if (month > monthData){
        monthData = monthData+12;
        yearData = yearData - 1;
    }
    
    m = monthData - month;
    d = Math.abs((day-dayData));
    y = yearData - year    

    // console.log(`I am ${m} months ${d} days, ${y} years old`)
    displayAge(m, d, y)
}

function displayAge(m, d, y){
    let spanMonth = document.querySelector('.date-month');
    let spanDay = document.querySelector('.date-day');
    let spanYear = document.querySelector('.date-year');

    spanMonth.textContent = `${m}  `;
    spanDay.textContent = d;
    spanYear.textContent = y;
}

let submitBtn = document.getElementById('submit');
let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let userMonth = parseInt(document.getElementById('user-month').value);
    let userDay = parseInt(document.getElementById('user-day').value);
    let userYear = parseInt(document.getElementById('user-year').value);

    if(monthVal && dayVal && yearVal){
        ageCalc(userMonth, userDay, userYear);
    } 

});
