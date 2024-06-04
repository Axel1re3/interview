const transactions = [
    {customerId:'C111',  productId:'P1', quantity:3, pricePerUnit:100}, 
    {customerId:'C2222', productId:'P2', quantity:2, pricePerUnit:50}, 
    {customerId:'C3333', productId:'P3', quantity:1, pricePerUnit:200}, 
    {customerId:'C4444', productId:'P2', quantity:5, pricePerUnit:50}, 
    {customerId:'C111',  productId:'P2', quantity:2, pricePerUnit:50} 
] 

class Main {
    constructor(transactions) {
        this.transactions = transactions                                       // Initializing with constructor. 
    }

    idsAnnonymizing() {
        this.transactions.forEach(transaction => {
            transaction.customerId = `ID_${Math.floor(Math.random() * 101)}`   // Replaysing Ids with random numbers from 0 to 100.
        });
    }

    calculatingTotalSpendings() {
        this.transactions.forEach(transaction => {
            return (transaction.quantity && transaction.pricePerUnit) ?
                transaction.totalSpendings = `$${transaction.quantity * transaction.pricePerUnit}`
            : (transaction.quantity == 0) ?                                                        // Multiplying and calculation total (If no queantity return 0).
                transaction.totalSpendings = `${transaction.customerId}:0`
            : "Invalid integer"    
        })
    }

    customerWithHighestTotal() {
        const highestTotal = this.transactions.reduce((highest, transaction) => {
            return transaction.totalSpendings > highest.totalSpendings ? transaction : highest;            // A method to find a customer with highest total value.
        });

        const customersWithHighestTotal = this.transactions.filter(transaction => {                           // Finding a customers with highest total value.
            return transaction.totalSpendings === highestTotal.totalSpendings;  
        });
    
        return customersWithHighestTotal;
    }

    customerWithLowestTotal() {
        const lowestTotal = this.transactions.reduce((lowest, transaction) => {
            return transaction.totalSpendings < lowest.totalSpendings ? transaction : lowest;                // A method to find a customer with lowes total value.
        });
    
        const customersWithLowestTotal = this.transactions.filter(transaction => {                           // Finding a customers with lowes total value.
            return transaction.totalSpendings === lowestTotal.totalSpendings;  
        });
    
        return customersWithLowestTotal;
    }

    customerWithHighestQuantity() {
        const highestQuantity = this.transactions.reduce((highest, transaction) => {
            return transaction.quantity > highest.quantity ? transaction : highest;                // A method to find a customer with highest quantity.
        });
    
        const customersWithhighestQuantity = this.transactions.filter(transaction => {                           // Finding a customers with higest quantity.
            return transaction.quantity === highestQuantity.quantity;  
        });
    
        return customersWithhighestQuantity;
    }

    transactionsProcessing() {
        if (!this.transactions.length) {
            console.log("No transactions to process.")                          // Checking if there is avaliable transactions.
            return
        }

        this.idsAnnonymizing()
        this.calculatingTotalSpendings()

        console.log(this.transactions)

        let highestTotal = this.customerWithHighestTotal();
        if (highestTotal) {
            console.log(" <---> ", "Customer with highest total:", " <---> ", highestTotal);    // Returning key's and value's of a customer with highest total.
        } else {
            return
        }

        let lowestTotal = this.customerWithLowestTotal();
        if (lowestTotal) {
            console.log(" <---> ", "Customer with lowest total:", " <---> ", lowestTotal);    // Returning key's and value's of a customer with lowest total.
        } else {
            return
        }


        let highestQuantity = this.customerWithHighestQuantity();
        if (highestQuantity) {
            console.log(" <---> ", "Customer with highest quantity:", " <---> ", highestQuantity);    // Returning key's and value's of a customer with highest total.
        } else {
            return
        }
    }
}

const main = new Main(transactions)
main.transactionsProcessing()
