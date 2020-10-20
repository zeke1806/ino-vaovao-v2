import { createUnionType, ObjectType, Field } from '@nestjs/graphql';

// removeProfileImage
@ObjectType()
export class RemoveProfileImageError {
  @Field()
  notUserPhoto: string;
}

@ObjectType()
export class RemoveProfileImageOk {
  @Field()
  status: boolean;
}

export const RemoveProfileImageResult = createUnionType({
  name: 'RemoveProfileImageResult',
  types: () => [RemoveProfileImageOk, RemoveProfileImageError],
  resolveType: (value: RemoveProfileImageOk | RemoveProfileImageError) => {
    if (value instanceof RemoveProfileImageOk) return 'RemoveProfileImageOk';
    if (value instanceof RemoveProfileImageError)
      return 'RemoveProfileImageError';
    return null;
  },
});

// fin removeProfileImage
