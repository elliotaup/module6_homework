function arrayCheck(user_arr) {
    let sample = user_arr[0];
    let check = 1;
    for (let i = 0; i < user_arr.length; i++) {
        if (user_arr[i] == sample) {
            check += 0;
        } else {
            check += 1;
        }
    }
    if (check == 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}

let arr_1 = [1, 2, 3];
let arr_2 = [1, 1, 1, 1, 1];
let arr_3 = [1, 2, 1, 1, 1, 1];
let arr_4 = [1, 1, 1, 1, 1, 2];
arrayCheck(arr_1);
arrayCheck(arr_2);
arrayCheck(arr_3);
arrayCheck(arr_4);