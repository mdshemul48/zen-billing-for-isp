import User from "../model/User";
import userInterface from "../types/UserType";

const createUserSeeder = async (user: userInterface) => {
  const alreadyExists = await User.findOne({ where: { email: user.email } });
  if (alreadyExists) {
    return;
  }

  const createdUser = await User.create({
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
  });
  return createdUser;
};

export default createUserSeeder;
