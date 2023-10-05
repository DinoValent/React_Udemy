const sayHello = (name = "Pepe", age = 0) =>
  `Hola mundo function!! ${name} ${age}`;

const add = (a = 0, b = 0) => a + b;
const result = sayHello("Andres", 10);

console.log(result, add(3, 5));
