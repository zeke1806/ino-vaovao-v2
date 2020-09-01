import { Test, TestingModule } from '@nestjs/testing';

import { BcryptService } from './bcrypt.service';

export async function utilsTestModule(): Promise<TestingModule> {
  return Test.createTestingModule({
    providers: [BcryptService],
  }).compile();
}
