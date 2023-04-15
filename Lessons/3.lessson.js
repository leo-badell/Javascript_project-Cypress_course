//objects

var customer = {
    firstName: 'Leonardo',
    lastName: 'Badell',
    cars: ['Fiat', 'Peugeot', 'Volks']
}

//Dot notation
customer.firstName = 'Pablo'
//Bracket notation
customer['lastName'] = 'Iglesias'
console.log(`${customer.firstName} ${customer.lastName}`)
//console.log(customer.firstName)

//Arrays

var car = ['Fiat', 'Peugeot', 'Volks']
car [1] = 'Nissan'
console.log (car[1])
//console.log(customer.cars[0])

