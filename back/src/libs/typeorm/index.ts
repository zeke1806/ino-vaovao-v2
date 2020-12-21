import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import bcrypt from "bcrypt";
import configs from "../../configs";
import { createConnection } from "typeorm";

async function firstStart(): Promise<void> {
  const userService = new UserService();
  const users = await userService.getAll();

  if (!users.length) {
    const user1 = new UserEntity();
    user1.username = "user1";
    user1.password = await bcrypt.hash("user1pass", 2);
    const user2 = new UserEntity();
    user2.username = "user2";
    user2.password = await bcrypt.hash("user2pass", 2);
    await userService.save(user1);
    await userService.save(user2);
  }
}

export const connectDB = async () => {
  const connexion = await createConnection(configs.database);
  console.log("Database connection ok");

  firstStart();
};
