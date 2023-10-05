const user = ["pepe", "ana", "maria", "sebastian", "juan", "carlos"];

const [pepe, b, maria, ...rest] = user;

console.log(pepe, b, maria, ...rest);
