//Declarative function

function helloOne (){
    console.log('Hello one!')
}
helloOne()


//Anonymus function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Leo', 'Badell')

//function with return
function multiplyByThree(number){
    var result = number * 3
    return result
}
var myResult = multiplyByThree(5)
console.log(myResult)

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)