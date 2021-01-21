var customer = new Array();
var currentBalance;
var choice;

(function(){
    create_account();
    console.log("choose service below to use");
    console.log("1, Deposite");
    console.log("2, Withdrawal");
    console.log("3, Balance");
    console.log("4, transfer");

    choice = prompt("Enter your choice");
    if(parseInt(choice) == 1){
        deposite();
    }else if(parseInt(choice) == 2){
        withdrawal();
    }else if(parseInt(choice) == 3){
        balance();
    }else if(parseInt(choice) == 4){
        transfer();
    }

})();

function create_account(){
    console.log("Create account first");
    prompt("Full name ");
    currentBalance = 0;
    console.log("your bank account number is " + 9596);
}

function deposite(){
    let accountNum = prompt("Enter you account number");

    if(parseInt(accountNum) == 9596){
        let birrAmount = prompt("Enter birr amount");
        currentBalance += parseInt(birrAmount);
        console.log("Successfull! your account is " + currentBalance);
    }
    


}

function withdrawal(){
    let accountNum = prompt("Enter you account number");

    if(parseInt(accountNum) == 9596){
        if(balance > 25){
            currentBalance -= parseInt(birrAmount);
        }else{
            console.log("Balance is low can not withdraw")
        }
       
    }

}

function balance(){
    let accountNum = prompt("Enter you account number");

    if(parseInt(accountNum) == 9596){
        console.log("Your balance is "+ currentBalance);
    }

}

function transfer(){
    let senderAccount = prompt("Enter sender account number");
    let reciverAccount = prompt("Enter reciver account number")

    if(parseInt(senderAccount) == 9596){
        let birrAmount = prompt("Enter transfer amount");
        currentBalance -= parseInt(birrAmount);
        console.log(birrAmount + " birr is transfered to account number " + reciverAccount)
    }

}