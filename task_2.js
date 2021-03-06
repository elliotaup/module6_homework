function checkSimpleNum(num) {
    if (num > 1000) {
        let msg = "Еррор";
        return msg;
    } else if (num === 0 || num == 1 || num == 2) {
        let msg = "Число простое"
        return msg;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                let msg = "Число не простое";
                return msg;
                break;
            } else {
                let msg = "Число простое"
                return msg;
            }
        }
    }
}

let user_num = prompt("Введите число(<1000):");
let result = checkSimpleNum(user_num);
alert(result);