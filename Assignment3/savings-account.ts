import { BankAccount } from "./bank-account.js";

export class SavingsAccount extends BankAccount {
    interestRate: number;
    constructor(
        customerId: string, 
        customerName: string, 
        accountNumber: string, 
        balance: number,
        interestRate: number) 
        {
        super(customerId, customerName, accountNumber, balance);
        this.interestRate = interestRate;
        }
        deposit(amount: number): void {
            const interest = amount * this.interestRate;
                this.balance = this.balance + amount + interest;
            }
        calculateInterest(): number {
            return this.balance * this.interestRate;
        }    
}