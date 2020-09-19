import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { CloudinaryService } from '../../utils/cloudinary.service';
import { readFile } from 'fs';

@Resolver()
export class UploadProfileImage {
  constructor(private cloudinaryService: CloudinaryService) {}

  @Mutation(() => Boolean)
  async uploadProfileImage(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const stream = this.cloudinaryService.cloudinary.uploader.upload_stream(
        {
          folder: 'ino-vaovao',
        },
        (error, result) => {
          if (result) {
            console.log(result);
            resolve(true);
          } else {
            resolve(error);
            reject(false);
          }
        },
      );
      createReadStream().pipe(stream);
    });
  }
}
