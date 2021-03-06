function countNumbers(start_num, end_num) {
    let count = start_num;
    let timerCount = setInterval(function() {
        console.log(count);
        if (count == end_num) {
            clearInterval(timerCount);
        }
        count++;
    }, 1000);
}

countNumbers(5, 15);