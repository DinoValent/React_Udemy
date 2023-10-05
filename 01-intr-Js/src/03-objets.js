const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon ",
    lastname: "Doe",
    age: 20,
  },
  items: [
    {
      product: "Keyboard",
      price: 400,
      quantity: 2,
    },
    {
      product: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      product: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

// invoice.client.name = "Pepe Roe";
// invoice.total = 5000;
console.log(invoice);
const greeting = invoice.greeting();
console.log(greeting);
console.log(`Total: ${invoice.total()}`);
