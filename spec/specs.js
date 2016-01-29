describe("Pizza", function() {
  var myPizza = new Pizza("small", ["pineapple", "pepperoni", "bacon"]);
  var myToppings = new Toppings("pineapple", 2.50);

  it("creates a new pizza of your choice called myPizza with desired diameter and toppings", function() {
    expect(myPizza.diameter).to.equal("small");
    expect(myPizza.toppings).to.eql(["pineapple", "pepperoni", "bacon"]);
  });

  it("creates a new topping constructor with desired toppings", function() {
    expect(myToppings.toppingName).to.equal("pineapple");
    expect(myToppings.price).to.equal(2.50);
  });

  it("creates a prototype method for the cost of a pizza depending on selections", function() {
    expect(myPizza.sizePrice()).to.equal(5);
  });
});
