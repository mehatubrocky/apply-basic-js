function explain_callback(name, age, task) {

    console.log('Hello', name);
    console.log('Your age', age);
    task();

}

function washHand() {
    console.log("wash hand with soap");
}

function takeShower() {
    console.log("take shower");
}

function scrollFacebook() {
    console.log("Scroll facebook but don't like any posts");
}

explain_callback('sogir uddin', 17, washHand);
explain_callback('jogir uddin', 12, takeShower);
explain_callback('mugir uddin', 21, scrollFacebook);