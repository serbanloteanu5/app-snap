/*
Filename: ComplexCode.js

This code demonstrates a complex JavaScript implementation of a banking system.
It includes various classes, functions, and methodologies commonly used in professional web development.
*/

// Define the Bank class
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getAllAccounts() {
    let accounts = [];
    this.customers.forEach((customer) => {
      customer.accounts.forEach((account) => {
        accounts.push(account);
      });
    });
    return accounts;
  }
}

// Define the Customer class
class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }
}

// Define the Account class
class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount,
      timestamp: new Date(),
    });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: "withdraw",
        amount: amount,
        timestamp: new Date(),
      });
      return true;
    } else {
      return false;
    }
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

// Create a bank instance
const myBank = new Bank("My Bank");

// Create customers
const john = new Customer("John Doe", 30);
const jane = new Customer("Jane Smith", 25);

// Add customers to the bank
myBank.addCustomer(john);
myBank.addCustomer(jane);

// Create accounts for customers
const johnAccount1 = new Account("ACC001", 1000);
const johnAccount2 = new Account("ACC002", 5000);
const janeAccount1 = new Account("ACC003", 2000);

// Add accounts to customers
john.addAccount(johnAccount1);
john.addAccount(johnAccount2);
jane.addAccount(janeAccount1);

// Perform transactions
johnAccount1.deposit(500);
johnAccount2.withdraw(2000);
johnAccount1.withdraw(200);

// Display account information
const allAccounts = myBank.getAllAccounts();
allAccounts.forEach((account) => {
  console.log(`Account Number: ${account.accountNumber}`);
  console.log(`Balance: ${account.balance}`);
  console.log(`Transaction History:`);
  account.getTransactionHistory().forEach((transaction) => {
    console.log(
      `Type: ${transaction.type}, Amount: ${transaction.amount}, Timestamp: ${transaction.timestamp}`
    );
  });
  console.log("---------------------");
});