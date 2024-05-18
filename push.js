var fruitBasket = ["Apple", "mango", "banana"];
fruitBasket.push("mango"); //Add string on first index number
console.log(fruitBasket); //
fruitBasket.shift();
console.log(fruitBasket); //Remove first string which is at first index number
fruitBasket.unshift();
console.log(fruitBasket); //Appear first string which is shifted from first index number
var f = fruitBasket.unshift("Apple");
console.log(f);
