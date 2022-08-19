import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },

  {
    name: "Adil Shaikh",
    email: "adil@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },

  {
    name: "Hussnain User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
];

export default users;
