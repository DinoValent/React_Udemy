const invoice = {
  id: 0,
  name: "",
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

console.log(invoice.company?.name);
console.log(invoice.client?.name);

if (invoice.company != undefined && invoice.company.name) {
  console.log("Perfecto!!");
} else {
  console.log("No viene la empresa");
}
