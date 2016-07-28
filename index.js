var Party = function() {
  this.guests = [];
}

var Guest = function(name, meal) {
  this.name = name;
  this.meal = meal;
}

var Meal = function() {
  this.items = [];
}

var Item = function(name, cost) {
  this.name = name;
  this.cost = cost;
}

Meal.prototype.addItem = function(item) {
  this.items.push(item);
}

Meal.prototype.total = function () {
  var result = 0
  for (var i = 0; i < this.items.length; i ++) {
    result += this.items[i].cost;
  }
  return result;    
}



var cocktail = new Item('cocktail', 10);

var appetizer = new Item('appetizer', 15);

var entree = new Item('entree', 25);

var dessert = new Item('dessert', 10);

var coffee = new Item('coffee', 4);

var meal = new Meal();
var hillary = new Guest("Hillary", meal);
var meal = new Meal();
var daniel = new Guest("Daniel", meal);
var meal = new Meal();
var patrick = new Guest("Patrick", meal);
var meal = new Meal();
var donald = new Guest("Donald", meal);

var myParty = new Party();
myParty.addGuest(hillary);


hillary.meal.addItem(cocktail);
hillary.meal.addItem(appetizer);
hillary.meal.addItem(entree);
daniel.meal.addItem(entree);
daniel.meal.addItem(dessert);
patrick.meal.addItem(appetizer);
patrick.meal.addItem(entree);
donald.meal.addItem(cocktail);
donald.meal.addItem(appetizer);
donald.meal.addItem(entree);
donald.meal.addItem(coffee);

console.log(hillary.meal.total());


