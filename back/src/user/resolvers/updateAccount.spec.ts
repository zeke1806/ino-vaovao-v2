import {
  UpdateAccountResolver,
  ifDataUnchanged,
  ifUsernameNotAvailable,
} from './updateAccount';
import { UserService } from '../user.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { UpdateAccountError, UpdateAccountInput } from '../user.model';
import { AuthPayload } from '../../auth/auth.model';

describe('UpdateAccountResolver', () => {
  let userService: UserService;
  let bcryptService: BcryptService;
  let updateAccountResolver: UpdateAccountResolver;

  beforeEach(() => {
    jest.resetAllMocks();
    userService = new UserService({} as Repository<User>);
    bcryptService = new BcryptService();
    updateAccountResolver = new UpdateAccountResolver(
      userService,
      bcryptService,
    );
  });

  describe('ifDataUnchanged', () => {
    it('shoudl return cannotUpdateTheSameInfo error', async () => {
      const expectedResult = new UpdateAccountError();
      expectedResult.cannotUpdateTheSameInfo = 'Informations inchangee';
      const dataMock: UpdateAccountInput = {
        username: 'user',
        password: '',
        statusConnected: false,
      };
      const currentUserMock: User = dataMock as User;
      const bcryptServiceMock: BcryptService = new BcryptService();
      const compareSpy = jest
        .spyOn(bcryptServiceMock, 'compare')
        .mockResolvedValue(true);

      const result = await ifDataUnchanged(
        dataMock,
        currentUserMock,
        bcryptServiceMock,
      );
      expect(result).toEqual(expectedResult);
      expect(compareSpy).toHaveBeenCalled();
    });
  });

  describe('ifUsernameNotAvailable', () => {
    it('should return usernameNotAvailable error', () => {
      const expectedResult = new UpdateAccountError();
      expectedResult.usernameNotAvailable =
        "Le nom d'utilisateur n'est plus disponible";
      const isUserExist: User = {
        id: 0,
        username: 'user',
        password: '',
        statusConnected: false,
      };
      const currentUser: User = {
        ...isUserExist,
        username: '',
      };

      const result = ifUsernameNotAvailable(isUserExist, currentUser);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('updateAccount', () => {
    it('should return updated user', async () => {
      const expectedResult: User = {
        id: 0,
        username: 'user',
        password: '',
        statusConnected: false,
      };
      userService.getUserByUsername = jest.fn();
      userService.getUserById = jest.fn();
      userService.updateUser = jest.fn().mockResolvedValue(expectedResult);
      bcryptService.hash = jest.fn();
      const _ifDataUnchangedSpy = jest.fn().mockResolvedValue(undefined);
      const _ifUsernameNotAvailable = jest.fn().mockReturnValue(undefined);
      Object.assign = jest.fn();

      const result = await updateAccountResolver.updateAccount(
        {} as UpdateAccountInput,
        { payload: { id: 0 } } as AuthPayload,
        _ifDataUnchangedSpy,
        _ifUsernameNotAvailable,
      );
      expect(userService.getUserByUsername).toHaveBeenCalled();
      expect(userService.getUserById).toHaveBeenCalled();
      expect(_ifDataUnchangedSpy).toHaveBeenCalled();
      expect(_ifUsernameNotAvailable).toHaveBeenCalled();
      expect(Object.assign).toHaveBeenCalled();
      expect(userService.updateUser).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });
  });
});
