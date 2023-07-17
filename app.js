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
// let decimal = document.querySelector(".decimal"); Will be added once the program can run with decimals
let del = document.querySelector(".del");
let allClear = document.querySelector(".all-clear");

let buttonsArr = Array.from(buttons);

var bottomDisplayNumbers = "";
var expressionArr;
const bottomDisplay = document.querySelector('.bottom-display');
const upperDisplay = document.querySelector('.upper-display');
function calculateTwoNumbers(first, operator, second){

    first = Number.parseInt(first);
    second = Number.parseInt(second);
    let result;
    if(operator === '+')
    {
        result = first + second;
    }
    else if(operator === '-')
    {
        result = first - second
    }
    else if(operator === '/')
    {
            if(second == 0)
            {
                result = NaN;
                return;
            }
            result = first/second;
    }
    else if(operator === '*')
    {
        result = first * second
    }
    return result;
}



buttonsArr.forEach((button) => {
    button.addEventListener('click', function displayNumbers(e, button){

        if(e.target.textContent === 'AC' || (e.target.textContent === 'Del' && bottomDisplay.textContent.length === 1))
        {
            bottomDisplayNumbers  = '';
            bottomDisplay.textContent = '0';
            upperDisplay.textContent = '0';
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
        else if(e.target.textContent === '=')
        {
            calculate(bottomDisplay.textContent);
            return;
        }


        bottomDisplayNumbers += e.target.textContent;
        bottomDisplay.textContent = bottomDisplayNumbers;
    })});


function calculate(operationString){
    
    let result = 0;
    let numberArray = operationString.split("+").join(",").split("-").join(",").split("/").join(",").
                           split("*").join(",").split(",");
    numberArray = numberArray.filter((number => Number.isInteger(Number.parseInt(number))));

    console.log(operationString);
 
    let operatorArray = splitMulti(operationString);


    if(operatorArray.length >= numberArray.length)
    {
        bottomDisplayNumbers  = '';
        bottomDisplay.textContent = 'NaN';
        return;
    }

    if(numberArray.length == 1)
    {
        upperDisplay.textContent = numberArray[0];
        return;
    }

    expressionCalculation(numberArray, operatorArray);

}

function expressionCalculation(numberArray, operatorArray){

    let result = 0;
    result = calculateTwoNumbers(numberArray[0], operatorArray[0], numberArray[1]);
    console.log(numberArray);
    console.log(operatorArray);
    console.log(result);
    for(let i = 1; i < numberArray.length-1; i++)
    {
        let val = calculateTwoNumbers(result, operatorArray[i], numberArray[i+1]);
        result = val;
    }

    result = result.toString();
    bottomDisplayNumbers  = '';
    bottomDisplay.textContent = '0';
    upperDisplay.textContent = result;

}

//I know the implementation of this function sucks and I am sorry for that
function splitMulti(string){
    string = string.split("0").join(",").split("1").join(",").split("2").join(",").split("3").join(",").
    split("4").join(",").split("5").join(",").split("6").join(",").split("7").join(",").split("8").
    join(",").split("9").join(",").split(",");

    string = string.filter((operator) => operator === '+' ||operator === '-' ||operator === '*' ||operator === '/' );

    return string;    
}
