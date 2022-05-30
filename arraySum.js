function getArraySum(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        var element = number[0];
        sum = sum + element;
    }
    return sum;

}

var number = [45, 81, 63, 98, 56, 35, 23];
var result = getArraySum(number);
console.log("total value is:", result);