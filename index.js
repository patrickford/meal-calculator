var taxRate = 0.08;

var Party = function() {
  this.guests = [];
}

var Guest = function(name, meal, tipPercent) {
  this.name = name;
  this.meal = meal;
  this.standardTip = tipPercent;
}

var Meal = function() {
  this.items = [];
}

var Item = function(name, cost) {
  this.name = name;
  this.cost = cost;
}

Party.prototype.addGuest = function(guest) {
  this.guests.push(guest);
}

Party.prototype.totalBill = function() {
  var result = 0;
  for (var i = 0; i < this.guests.length; i ++) {
    result += this.guests[i].bill();
  }
  console.log("Meal total: $" + result.toFixed(2));
  return result;    
}

Guest.prototype.bill = function() {
  var result = 0;
  for (var i = 0; i < this.meal.items.length; i ++) {
    result += this.meal.items[i].cost;
  }
  result += result * this.standardTip;
  result += result * taxRate;
  console.log(this.name + " paid " + "$" + result.toFixed(2));
  return result;    
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


var hillary = new Guest("Hillary", new Meal(), .18);
var daniel = new Guest("Daniel", new Meal(), .20);
var patrick = new Guest("Patrick", new Meal(), .20);
var donald = new Guest("Donald", new Meal(), .15);

var myParty = new Party();
myParty.addGuest(hillary);
myParty.addGuest(daniel);
myParty.addGuest(patrick);
myParty.addGuest(donald);

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

myParty.totalBill();
