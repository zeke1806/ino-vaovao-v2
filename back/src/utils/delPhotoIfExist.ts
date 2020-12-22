import { UserEntity } from "../user/user.entity";
import { UserService } from "../user/user.service";
import { CloudinaryService } from "../libs/cloudinary";
import { ApolloError } from "apollo-server-express";

export const delUserPhoto = async (userId: number): Promise<UserEntity | undefined> => {
  const userService = new UserService();
  const cloudinaryService = new CloudinaryService();
  let user = await userService.getById(+userId);

  if(user && user.photo) {
    const cloudinaryRsp = await cloudinaryService.cloudinary.uploader.destroy(user.photoPublicId);
    if(cloudinaryRsp.result === 'ok') {
      user.photo = undefined;
      user.photoPublicId = undefined;
      user = await userService.save(user);
    } else {
      throw new ApolloError('cloudinary error del image')
    }
  }

  return user;
}