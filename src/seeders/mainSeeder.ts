import createUserSeeder from "./userSeeder";

const mainSeederFunc = async () => {
  await createUserSeeder({
    name: "MD. Shimul",
    password: "thisIsPassword",
    email: "mdshemul480@gmail.com",
    role: "admin",
  });
};

export default mainSeederFunc;
