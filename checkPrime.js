var num = 79;
for (let i = 2; i <= num - 1; i++) {
    console.log(i, num % i);
    if (num % i == 0) {
        console.log(num + " is not a prime number");
        break;
    }
    console.log(num + ' is a prime number');
}