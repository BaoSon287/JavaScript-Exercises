function createAccount(initialBalance) {
    let deposit = 0;
    let withdraw = 0;
    return function account(action, amount) {
        if (action === "deposit") {
            if (amount < 0) {
                console.log("Invalid amount");
            } else {
                initialBalance += amount;
                deposit++;
            }
        } else if (action === "withdraw") {
            if (amount < 0) {
                console.log("Invalid amount");
            } else if (amount > initialBalance) {
                console.log("Insufficient balance");
            } else {
                initialBalance -= amount;
                withdraw++;
            }
        } else if (action === "balance") {
            return initialBalance;
        } else if (action === "history") {
            console.log(`Deposits: ${deposit}, Withdrawals: ${withdraw}`);
        } else console.log("Không hợp lệ");
    }
}

const account = createAccount(100000);

account("deposit", 50000);
account("withdraw", 30000);
console.log(account("balance")); // 120000
account("history");
console.log(account("history"));

account("withdraw", 999999); // phải báo lỗi "Insufficient balance", không cho rút âm
