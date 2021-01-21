
(function(){
    console.log("choose from the list");
    console.log("1, adddition");
    console.log("2, subtraction");
    console.log("3, multiplication");
    console.log("4, division");
    var choice = prompt("Enter your choice");
    choice = parseInt(choice);
    if(choice == 1){
        addition();
    }else if(choice == 2){
        subtraction();
    }else if(choice == 3){
        multiplication();
    }else if(choice == 3){
        division();
    }
})();


function addition(){
    let numbers = prompt("Enter the amount of number to be added");
    let numberArray = new Array();
    var result = 0;
    for (let i = 0; i < numbers; i++) {
           numberArray[i] = prompt("Enter number " + (i+1));
    }
    
    for (let i = 0; i < numberArray.length; i++) {
        result += parseInt(numberArray[i]);
        console.log(parseInt(numberArray[i]))
        
    }
    console.log("The result is "+ result);

}
function subtraction(){
    let num1 = prompt("Enter the first number");
    let num2 = prompt("Enter the second number");

    let result = parseInt(num1) - parseInt(num2);
    console.log("The result is "+ result);

}

function multiplication(){
    let numbers = prompt("Enter the amount of number to be multiplied");
    let numberArray = new Array();
    var result = 1;
    for (let i = 0; i < numbers; i++) {
        numberArray[i] = prompt("Enter number " + (i+1));
    }
    
    for (let i = 0; i < numberArray.length; i++) {
        result *= parseInt(numberArray[i]);
        
    }
    
    console.log("The result is "+ result);
}

function division(){
    let num1 = prompt("Enter the first number");
    let num2 = prompt("Enter the second number");
    if(parseInt(num2) === 0){
        return console.log("divisble by zero erro!!");
    }

    let result = parseInt(num1) - parseInt(num2);
    console.log("The result is "+ result);

}