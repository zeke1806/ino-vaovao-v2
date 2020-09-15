import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { PhotoProfile } from '../photo-profile.entity';

@Resolver()
export class UploadProfileImage {
  @Mutation(() => Boolean)
  async uploadProfileImage(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    console.log(file);
    return true;
  }
}
