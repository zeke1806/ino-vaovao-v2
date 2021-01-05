import { FileUpload } from 'graphql-upload';
import { MutationUpdatePhotoArgs, Resolver, User } from '../../types';
import { CloudinaryService } from '../../libs/cloudinary';
import { UserService } from '../user.service';
import { authGuard } from '../../utils/authGuard';
import { ApolloError } from 'apollo-server-express';
import { UserEntity } from '../user.entity';
import { delUserPhoto } from '../../utils/delPhotoIfExist';
import { mapUser } from '../../utils/mapEntityScema';

const onFinishStream = async (
  error: any,
  result: any,
  resolve: (value?: User | PromiseLike<User>) => void,
  reject: (reason?: any) => void,
  user: UserEntity,
  userService: UserService
): Promise<void> => {
  if (result) {
    user.photo = result.url;
    user.photoPublicId = result.public_id;
    const r = await userService.save(user);
    resolve(mapUser(r));
  } else {
    console.log(error);
    reject(null);
  }
}

type T = Resolver<User, {}, { req: any }, MutationUpdatePhotoArgs>;

export const updatePhoto: T = async (_, { file }, { req }) => {
  console.log(`resolver updatePhoto => {
    file: ${file}
  }`);

  const {
    payload: { id }
  } = authGuard(req);
  const cloudinaryService = new CloudinaryService();
  
  const { createReadStream } = await file as FileUpload;

  const userService = new UserService();
  const user = await userService.getById(id);
  if(!user) throw new ApolloError('user not find');

  await delUserPhoto(user.id);

  return new Promise((resolve, reject) => {
    const stream = cloudinaryService.cloudinary.uploader.upload_stream(
      {
        folder: 'ino-vaovao',
      },
      (error: any, result: any) =>
        onFinishStream(error, result, resolve, reject, user, userService),
    );
    createReadStream().pipe(stream);
  });
}
  