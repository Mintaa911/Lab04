let Account = {
    fullName:"",
    phoneNumber:"",
    accountNum:"",
    currentBalance:0
}

let BankSystem = {
    accountNum : 9596,
    accounts: [],
    numberOfUsers: 0,
    activeAccount:"",
    create_account: function(){
        let fullName = prompt("Enter your full name ");
        let phoneNumber = prompt("Enter your phone number");
        
        let newAccount = Object.create(Account);
        newAccount.fullName = fullName;
        newAccount.phoneNumber = phoneNumber;
        newAccount.currentBalance = 0;
        newAccount.accountNum += this.accountNum + this.accounts.length;
        this.accounts[this.numberOfUsers] = newAccount;
        this.numberOfUsers++;
        return console.log("Your Account Number is " + newAccount.accountNum); 
    },
    deposite_money: function(){

        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let tempAccount = this.accounts[accNumber];
            tempAccount.currentBalance += parseInt(prompt("Enter the money to deposite"));
            return console.log("Transaction is successful!");
        }else{
            console.log("Account does not exist.");
        }
        return false;
    },
    withdraw_money: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let tempAccount = this.accounts[accNumber];
            if(tempAccount.currentBalance > 25){
                let amount = parseInt(prompt("Enter the money to withdraw"));
                if((tempAccount.currentBalance - 25) < amount ){
                    console.log("Your balance is insuffecient.");
                }else{
                    tempAccount.currentBalance = tempAccount.currentBalance - amount;
                    return console.log("Transaction is successful!");
                }
            }else{
                console.log("Your balance is insuffecient.");
            }

        }else{
            console.log("Account does not exist.");
        }
        return false;
    },
    check_balance: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let tempAccount = this.accounts[accNumber];
          
            return console.log("Your balance is " + tempAccount.currentBalance);;
        }else{
            console.log("Account does not exist.");
        }
        return false;
    },
    transfer_money: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let sender = this.accounts[accNumber];
            let reciverAccount = this.validate_account("reciver");
            if( reciverAccount >= 0){
                let reciver = this.accounts[reciverAccount];
                let amount = parseInt(prompt("Enter the transfer money."));
                reciver.currentBalance += amount;
                
                sender.currentBalance -= amount;
                return console.log("Transaction successful!");
               
            }else{
                console.log("Reciver account does not exist")
            }
        }else{
            console.log("Account does not exist");
        }
        return false;
        
    },
    delete_account: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            if(confirm("Are you sure?")){
                this.accounts.splice(accNumber);
                return console.log("Account successfully deleted.");
            
            }
        }else{
            console.log("Account does not exist");
        }
        return false;
        
    },
    validate_account : function(string = "your"){
        let accNumber = prompt("Enter " + string + " account number, please!").trim();
        for (let i = 0; i < this.accounts.length; i++) {
            if(this.accounts[i].accountNum === accNumber) return i;
            
            
        }
        return -1;
    },
   

};

(function(){
 
    console.log("choose service below to use");
    console.log("1, Create Account");
    console.log("2, Deposite");
    console.log("3, Withdrawal");
    console.log("4, Balance");
    console.log("5, transfer");
    console.log("6, Delete Account");
    console.log("0, Exit program");

    var choice = parseInt(prompt("Enter your choice"));
    while(choice !== 0){
        if(choice === 1){
            BankSystem.create_account();
        }
        else if(choice == 2){
            BankSystem.deposite_money();
        }else if(choice == 3){
            BankSystem.withdraw_money();
        }else if(choice == 4){
            BankSystem.check_balance();
        }else if(choice == 5){
            BankSystem.transfer_money();
        }else if(choice === 6){
            BankSystem.delete_account();
        }
        else{
            console.log("Out of menu.");
        }
        choice = parseInt(prompt("Enter your choice"));
    }
    console.log("Goodbye!");

})();