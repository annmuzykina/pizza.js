let orderCount = 0;
const takeOrder = (topping, crustType) => {
  
  orderCount = orderCount + 1; /*Create a variable to hold the number of pizzas ordered . Whenever a pizza is ordered, add one to the number of pizzas ordered.*/
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
}
const getSubTotal = (itemCount) => {
    return itemCount * 7.5; // Take the total number of pizzas and multiply them by 7.5, since each pizza is $7.50
  }
takeOrder('mushrooms', 'beakon');
takeOrder('chees', 'onion');
takeOrder('tomato', 'chocolate');
console.log(getSubTotal(orderCount));