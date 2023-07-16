let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttons');
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let multiply_button = document.querySelector(".multiply");
let divide_button = document.querySelector(".divide");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".del");
let allClear = document.querySelector(".all-clear");

let buttonsArr = Array.from(buttons);

const bottomDisplay = document.querySelector('.bottom-display');
// let buttons = {
// one : 1,
// two : 2,
// three : 3,
// four : 4,
// five : 5,
// six : 6,
// seven : 7,
// eight : 8,
// nine : 9,
// zero : 0,
// equals 
// multiply : document.querySelector(".multiply"),
// divide : document.querySelector(".divide"),
// plus : document.querySelector(".plus"),
// minus : document.querySelector(".minus"),
// decimal : document.querySelector(".decimal"),
// del : document.querySelector(".del"),
// allClear : document.querySelector(".all-clear"),
// }

// buttonsArr.sort((a, b) => a>b? 1:-1);

function calculate(first, operator, second){
    if(operator === '+')
    {
        (first, second) => first + second;
    }
    else if(operator === '-')
    {
        (first, second) => first - second;
    }
    else if(operator === '/')
    {
        (first, second) => {
            if(second == 0)
                return NaN;
            return first/second;
        };
    }
    else if(operator === 'x')
    {
        (first, second) => first * second;
    }
}

var bottomDisplayNumbers = "";

// const NumsOperators = buttonsArr.filter((button) => {
//     if(button.textContent === "AC" || button.textContent === "=" ||button.textContent === "Del")
//         return false;
//     return true;
// });

buttonsArr.forEach((button) => {
    button.addEventListener('click', function displayNumbers(e, button){

        if(e.target.textContent === 'AC' || (e.target.textContent === 'Del' && bottomDisplay.textContent.length === 1))
        {
            bottomDisplayNumbers  = '';
            bottomDisplay.textContent = '0';
            return;
        }
        else if(e.target.textContent === 'Del')
        {
            if(bottomDisplay.textContent === '0')
                return;
                
            bottomDisplayNumbers =  bottomDisplayNumbers.slice(0, bottomDisplayNumbers.length - 1);
            bottomDisplay.textContent = bottomDisplayNumbers;
            return;
        }


        bottomDisplayNumbers += e.target.textContent;
        bottomDisplay.textContent = bottomDisplayNumbers;
    })});


// function displayNumbers(e, button){
//     // if(button.class)
//     console.log(e);
// }