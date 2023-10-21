/*
Filename: complex_code.js
Content: Complex code demonstrating the implementation of a fictional online shopping system with multiple features such as user authentication, product listings, cart management, and order placement.
*/

// User Class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.shoppingCart = [];
    this.orders = [];
  }

  // Add item to shopping cart
  addItemToCart(item) {
    this.shoppingCart.push(item);
  }

  // Remove item from shopping cart
  removeItemFromCart(itemToRemove) {
    this.shoppingCart = this.shoppingCart.filter(item => item !== itemToRemove);
  }

  // Place order
  placeOrder() {
    const order = new Order(this.shoppingCart);
    this.orders.push(order);
    this.shoppingCart = [];
    return order;
  }
}

// Order Class
class Order {
  constructor(items) {
    this.items = items;
    this.status = 'pending';
    this.id = Math.floor(Math.random() * 100000);
  }

  // Cancel order
  cancelOrder() {
    this.status = 'cancelled';
  }

  // Get total price of order
  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }
}

// Product Class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Create sample products
const products = [
  new Product('iPhone 12', 999),
  new Product('MacBook Pro', 1999),
  new Product('Apple Watch', 399),
  new Product('AirPods Pro', 249)
];

// Create sample users
const user1 = new User('John Doe', 'john@example.com', 'password123');
const user2 = new User('Jane Smith', 'jane@example.com', 'password456');

// Simulate user actions
user1.addItemToCart(products[0]);
user1.addItemToCart(products[2]);
user2.addItemToCart(products[1]);
user2.addItemToCart(products[3]);

console.log(user1.placeOrder().getTotalPrice()); // Output: 1398
console.log(user2.placeOrder().getTotalPrice()); // Output: 2248

user2.orders[0].cancelOrder();
console.log(user2.orders[0].status); // Output: cancelled