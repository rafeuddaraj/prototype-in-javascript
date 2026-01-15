const captain = {
    name: "Messi",
    age: 38,
    country: "Argentina"
};

const player = Object.create(captain);

console.log(player);
console.log(player.name);
console.log(player.age);