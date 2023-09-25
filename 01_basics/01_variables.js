const accountId = 144553
let accountEmail = "ahmed@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

//accountId = 2     //not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "as@as.com"
accountPassword = "121212"
accountCity = "Pune"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])