let balance =5000;
  let choice = parseInt(prompt("What would you like to do?\n1) Deposit\n2) Check balance\n3) Withdraw\n4) Exit"));
switch(choice)
{
  case 1:
    let depositAmount = parseFloat(prompt("Enter the amount you want to deposit:"));
    balance += depositAmount;
        alert(`You have deposited ${depositAmount}. Your new balance is ${balance}`);
    break;
  case 2:
    alert(`Your current balance is ${balance}`)
    break;
  case 3:
   let Withdraw =parseFloat(prompt("Enter the amount you want to Withdraw:"));
    if(Withdraw > balance ){
      alert("Insufficient balance ")
    }
    else{
    balance -= Withdraw;
        alert(`You have Withdrawn ${Withdraw}. Your new balance is ${balance}`);
}
    break;
    case 4:
            alert("Thank you for using our ATM. Goodbye!");
            break;
        default:
            alert("Invalid choice. Please choose again.");

}