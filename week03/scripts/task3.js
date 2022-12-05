/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
    let s = number1 + number2;
    return s;
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let n1 = parseFloat(document.getElementById("addend1").value);
    let n2 = parseFloat(document.getElementById("addend2").value);
    let addition = add(n1, n2);
    document.getElementById("sum").value = addition;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
let buttonadd = document.getElementById("addNumbers");
buttonadd.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2){
    let s = number1 - number2;
    return s;
}
function subtractNumbers() {
    let n1 = parseFloat(document.getElementById("minuend").value);
    let n2 = parseFloat(document.getElementById("subtrahend").value);
    let subtraction = subtract(n1, n2);
    document.getElementById("difference").value = subtraction;
}
let buttonsubtract = document.getElementById("subtractNumbers");
buttonsubtract.addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(factor1, factor2){
    let r = factor1 * factor2;
    return r;
}
function multiplyNumbers() {
    let n1 = parseFloat(document.getElementById("factor1").value);
    let n2 = parseFloat(document.getElementById("factor2").value);
    let multiplication = multiply(n1, n2);
    document.getElementById("product").value = multiplication;
}
let buttonmultiply = document.getElementById("multiplyNumbers");
buttonmultiply.addEventListener("click", multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(dividend, divisor){
    let r = dividend / divisor;
    return r;
}
function divideNumbers() {
    let n1 = parseFloat(document.getElementById("dividend").value);
    let n2 = parseFloat(document.getElementById("divisor").value);
    let division = divide(n1, n2);
    document.getElementById("quotient").value = division;
}
let buttondivide = document.getElementById("divideNumbers");
buttondivide.addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = "November 19th";

// Step 2: Declare a variable to hold the current year
let year = "2022";

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = "2022";

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5 , 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").innerHTML = numbers.filter(odd);
function odd(number){
    return number % 2;
}

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").innerHTML = numbers.filter(even);
function even(x){
    if (x % 2 === 0 || x === 0) {
        return x;
    }
}
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector("#sumOfArray").innerHTML = numbers.reduce(sum);
function sum(total, num){
    return total + num;
}
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").innerHTML = numbers.map(double);
function double(x){
    return x * 2;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").innerHTML = numbers.map(double).reduce(sum);