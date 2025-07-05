/**
 * parameter are local variable. They are block variable
 * 
 * 
 */ 

// function functionName(){
//     // do some work
// }

// functionName() --> To call a function


// function myFunction() {
//     console.log("This is Istiak");
// }

// myFunction()

function makeOperation(num1, num2, opr){
    if (opr == "+"){
        console.log(`The result is ${num1 + num2}`)
    }
    else if(opr == "-"){
        console.log(`The result is ${num1 - num2}`)
    }
    else if(opr == "*"){
        console.log(`The result is ${num1 * num2}`)
    }
    else if(opr == "/"){
        console.log(`The result is ${num1 / num2}`)
    }
    else {
        console.log("Invalid Input")
    }

}

makeOperation(2, 5, "p")