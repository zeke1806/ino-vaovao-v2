import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    service = new AuthService({} as JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
