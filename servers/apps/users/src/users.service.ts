import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  
  constructor(
    // private readonly jwtService: JwtService,
    // private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    // private readonly emailService: EmailService,
  ){}


  async register(){
    return {user:"Test User Register"}
  }

  async login(){
    return {user:"Test User Login"}
  }

  async getAllUsers(){
    return [{user:"Name.."}]
  }
}
