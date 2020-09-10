import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './auth.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(payload: Payload): Promise<string> {
    return this.jwtService.sign({
      payload,
    }); // token
  }
}
