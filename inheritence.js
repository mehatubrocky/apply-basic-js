class parent {
    constructor() {
        this.fatherName = "abdullah";
    }
}
class child extends parent {
    constructor(name) {
        super();
        this.name = name;
    }
}
const baby = new child("Arnold");
const baby2 = new child("Tom");

console.log(baby, baby2);