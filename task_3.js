function sumOut(num1) {
    return function sumIn(num2) {
        return num1 + num2;
    }
}

let user_num1 = +prompt("Введите первое число:");
let user_num2 = +prompt("Введите второе число:");
let sumResult = sumOut(user_num1);
console.log(sumResult(user_num2));