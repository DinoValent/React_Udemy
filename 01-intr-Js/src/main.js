const invoices = [
  {
    id: 1,
    name: "Compras de oficina",

    client: {
      name: "Jhon ",
      lastname: "Doe",
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
  },
  {
    id: 2,
    name: "Compras de computación",

    client: {
      name: "Jhon ",
      lastname: "Doe",
    },
    items: [
      {
        product: "Keyboard",
        price: 400,
        quantity: 2,
      },
      {
        product: "screem",
        price: 800,
        quantity: 1,
      },
      {
        product: "CPU",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras de papeleria",

    client: {
      name: "Jhon ",
      lastname: "Doe",
    },
    items: [
      {
        product: "Papel",
        price: 400,
        quantity: 2,
      },
      {
        product: "Lapiz",
        price: 200,
        quantity: 1,
      },
    ],
  },
];

const invoicesClone = invoices.map{}