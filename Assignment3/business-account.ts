import { BankAccount } from "./bank-account.js";

export class BusinessAccount extends BankAccount {
    transactionfee: number; 
    constructor(
        customerId: string, 
        customerName: string, 
        accountNumber: string, 
        balance: number,) 
        {
        super(customerId, customerName, accountNumber, balance);
        this.transactionfee = 500;
        }
        withdraw(amount: number): void {
        const totalAmount = amount + this.transactionfee;
        if (totalAmount <= this.balance) {
            this.balance = this.balance - totalAmount;
        } else {
            console.log("Insufficient balance");
        }
    }
}