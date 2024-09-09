/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
 
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ){}


  // register user service!
  async register(registerDto:RegisterDto, ){
     
  }


  // login user service!
  async login(loginDto:LoginDto){

  }
}
