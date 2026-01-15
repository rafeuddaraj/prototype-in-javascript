class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("Person is eating");
    }
    sleep() {
        console.log("Person is sleeping");
    }
    play() {
        console.log("Person is playing");
    }
}

const messi = new Person("Messi", 38);
const neymar = new Person("Neymar", 33);
messi.play();
neymar.eat();