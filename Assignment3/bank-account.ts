import type { BankAccountInterface } from "./bank-account.interface.js";

export class BankAccount implements BankAccountInterface {
    customerId: string;
    customerName: string;
    accountNumber: string;
    balance: number;

    constructor(
        customerId: string, 
        customerName: string, 
        accountNumber: string, 
        balance: number) 
        {
        this.customerId = customerId;
        this.customerName = customerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance(): number {
        return this.balance;
    }
    displayAccount(): void {
        console.log("Customer Id:", this.customerId);
        console.log("Customer Name:", this.customerName);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    }
         
}