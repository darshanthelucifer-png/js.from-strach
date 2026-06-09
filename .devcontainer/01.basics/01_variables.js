const account_Id = 938076
let account_Email = "darshandarshu938076@gmail.com"
var account_Password="12345"
account_City = "bangalore"
let accountState


// account_Id = 3 // not allowed to change const
console.log(account_Id);
account_Email="billionare@ac.com" //let allowed to change
account_Password="234434" //var allowed to change
account_City ="monaco"


console.table([account_Id,account_Email,account_Password,account_City,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/
