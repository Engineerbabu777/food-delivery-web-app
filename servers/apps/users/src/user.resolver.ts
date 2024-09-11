import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  LoginResponse,
  RegisterResponse,
  Test,
} from './types/user.types';
import {
  RegisterDto,
} from './dto/user.dto';
import { UsersService } from './users.service';

@Resolver('User')
// @UseFilters
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    // @Args('registerDto') registerDto: {user:string},
    // @Context() context: { res: Response },
  ): Promise<Test> {
    // if (!registerDto.name || !registerDto.email || !registerDto.password) {
    //   throw new BadRequestException('Please fill the all fields');
    // }

    return await this.userService.register();
  }

  // @Mutation(() => LoginResponse)
  // async Login(
  //   @Args('email') email: string,
  //   @Args('password') password: string,
  // ): Promise<LoginResponse> {
  //   return await this.userService.Login({ email, password });
  // }


  @Query(() => [Test])
  async getUsers() {
    return await this.userService.getAllUsers();
  }
}