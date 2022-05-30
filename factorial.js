function factorial(num) {
    var factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

}
var result = factorial(10);
console.log(result);