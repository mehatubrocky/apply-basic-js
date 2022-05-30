var numbers = [3, 6, 1, 5, 7, 1, 9, 66, 55, 2, 1, 2];
var newElement = [];

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var index = newElement.indexOf(element);
    if (index == -1) {
        newElement.push(element);
    }
}
console.log(newElement);