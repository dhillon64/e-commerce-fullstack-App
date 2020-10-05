import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "bobby robbie",
    email: "bobby@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "johnny bob",
    email: "johnny@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
