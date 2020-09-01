import { TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { utilsTestModule } from './utils.test-module';
import { BcryptService } from './bcrypt.service';

describe('bcryptService', () => {
  let bcryptService: BcryptService;

  beforeEach(async () => {
    const module: TestingModule = await utilsTestModule();

    bcryptService = module.get<BcryptService>(BcryptService);
  });

  it('should be defined', () => {
    expect(bcryptService).toBeDefined();
  });

  it('should hash password', async () => {
    const expectedResult = 'result';
    jest.spyOn(bcrypt, 'hash').mockImplementation(async () => expectedResult);

    const result = await bcryptService.hash('password');
    expect(bcrypt.hash).toHaveBeenCalled();
    expect(result).toBe(expectedResult);
  });
});
