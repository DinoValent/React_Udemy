const user = {
  username: "andres",
  email: "correo@gmail.com",
  age: 20,
  ranking: 9,
};

// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

const detail = ({ username, email }) => {
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

detail(user);
