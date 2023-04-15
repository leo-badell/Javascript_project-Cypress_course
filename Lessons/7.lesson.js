//Loops

console.log('Hello world!')

// for(statment1; statment2; statement3){

// }

//i=i+1 and i++ is the same thing

for(let i=0; i<5; i++){
    console.log('Hello world!' + i)
}

var cars = ['Fiat', 'Peugeot', 'Volks']
//for of loop
for(let car of cars){
    console.log(car)
    if(car == 'Peugeot'){
        break
    }
}

//could I use (c) instead of car also.

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})

