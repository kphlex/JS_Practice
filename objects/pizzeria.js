var crustType = ['thin', 'filled', 'deep dish', 'hand tossed']
var sauceType = ['marinara', 'alfredo', 'traditional']
var cheeses = ['mozzarella', 'american', 'mixed', 'feta']
var toppings = ['mushrooms', 'pepperoni', 'jalapenos', 'banana peppers', 'sausage', 'olives', 'onions']

function pizzaOven(crustType, sauceType,cheeses,toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    
    return pizza;
}

var p1 = pizzaOven('deep dish', 'traditional', ['monzarella', 'feta'], ['sausage', 'pepperoni']);

var p2 = pizzaOven('hand tossed', 'marinara', ['monzarella', 'feta'], ['mushrooms', 'olives', 'onions']);

var p3 = pizzaOven('filled', 'marinara', 'mixed', ['sausage', 'pepperoni']);

var p4 = pizzaOven('filled', 'marinara', 'american', ['mushrooms', 'banana peppers', 'pepperoni']);

console.log(p1, p2, p3, p4);

function randomPizzaStuff(array) {
    var i = Math.floor(array.length * Math.random());
    return array[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPizzaStuff(crustType);
    pizza.sauceType = randomPizzaStuff(sauceType);
    pizza.cheeses = randomPizzaStuff(cheeses);
    pizza. toppings = randomPizzaStuff(toppings);

    return pizza;
}

console.log(randomPizza());